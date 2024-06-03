"use client";

import { useEffect, useState } from "react";
import { useGenerateButtonClasses } from "@/app/components/button";

const HUBSPOT_PORTAL_ID = "143889225";
const HUBSPOT_SRC = `//js-eu1.hsforms.net/forms/embed/v2.js`;
const HUBSPOT_REGION = "eu1";
const HUBSPOT_FORM_ID_EN = "38b95c65-2534-4a9c-b4af-4c96945436b4";
const HUBSPOT_FORM_ID_NL = "0125f0e4-27e0-4fa1-ad0a-283b73fd3c4d";
const formToLang = {
  en: HUBSPOT_FORM_ID_EN,
  nl: HUBSPOT_FORM_ID_NL,
};

const FormLoading = () => {
  return (
    <div role="status" className="full-w animate-pulse flex flex-col gap-4">
      <div className="h-6 bg-gray-700 rounded w-96"></div>
      <div className="h-6 bg-gray-700 rounded"></div>
      <div className="h-6 bg-gray-700 rounded"></div>
      <div className="h-6 bg-gray-700 rounded"></div>
      <div className="h-6 bg-gray-700 rounded"></div>
      <div className="h-6 bg-gray-700 rounded"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export function HubSpotForm({ lang = "en" }: { lang: "en" | "nl" }) {
  const [loading, setLoading] = useState(true);

  const buttonClasses = useGenerateButtonClasses({
    variant: "primary",
    disabled: false,
    size: "medium",
  });

  useEffect(() => {
    const script = document.createElement("script");
    script.src = HUBSPOT_SRC;
    script.async = true;
    document.body.appendChild(script);

    const cleanupForm = () => {
      const formContainer = document.getElementById("hubspotForm");
      if (formContainer) {
        formContainer.innerHTML = "";
      }
    };

    const addTailwindClasses = (container: HTMLElement) => {
      const form = container.querySelector("form");
      form?.classList.add("w-full", "flex", "flex-col");
      const inputs = container.querySelectorAll(
        "input[type=text], input[type=email], input[type=tel], textarea, select"
      );

      // container for input and labels
      const classNameInput = container.querySelectorAll(".hs-form-field");
      classNameInput.forEach((field) => {
        field.classList.add("mb-5");
      });

      inputs.forEach((input) => {
        input.classList.add(
          "p-3",
          "border-1",
          "rounded-lg",
          "w-full",
          "text-primary",
          "text-sm",
          "border-gray-600",
          "bg-gray-800",
          "focus:ring-primary-500",
          "focus:border-primary-500",
          "placeholder-gray-500"
        );
      });
      const labels = container.querySelectorAll("label");
      labels.forEach((label) => {
        label.classList.add("block", "text-primary", "text-sm", "mb-1");
        // label hs error message (hs-error-msgs)
        const isErrorMessage = label.classList.contains("hs-error-msg");
        if (isErrorMessage) {
          label.classList.remove("text-primary");
          label.classList.add("text-orange");
          label.classList.add("mt-1");
        }
      });
      const actions = container.querySelectorAll(".actions");
      actions.forEach((action) => {
        action.classList.add("mt-3", "flex", "justify-end");
      });
      const buttons = container.querySelectorAll("input[type=submit]");
      const classes = buttonClasses.split(" ");
      buttons.forEach((button) => {
        button.classList.add(...classes);
      });
      const submittedMessage = container.querySelector(".submitted-message");
      submittedMessage?.classList.add("text-xl");
    };

    const observeMutations = (container: HTMLElement) => {
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === "childList") {
            addTailwindClasses(container);
          }
        });
      });

      observer.observe(container, {
        childList: true,
        subtree: true,
      });

      return observer;
    };

    script.addEventListener("load", () => {
      cleanupForm();
      try {
        window.hbspt.forms.create({
          region: HUBSPOT_REGION,
          portalId: HUBSPOT_PORTAL_ID,
          formId: formToLang[lang],
          target: "#hubspotForm",
          onFormReady: () => {
            setLoading(false);
            const formContainer = document.getElementById("hubspotForm");
            if (formContainer) {
              addTailwindClasses(formContainer);
              const observer = observeMutations(formContainer);
              return () => observer.disconnect();
            }
          },
        });
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    });

    return () => {
      cleanupForm();
      document.body.removeChild(script);
    };
  }, [lang, buttonClasses]);

  return (
    <>
      {loading && <FormLoading />}
      <div
        id="hubspotForm"
        style={{ display: loading ? "none" : "block" }}
      ></div>
    </>
  );
}
