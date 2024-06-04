"use client";

import { useEffect, useState } from "react";
import { useGenerateButtonClasses } from "@/app/components/button";
import { HUBSPOT_REGION, HUBSPOT_SRC, formToLang } from "@/constants";
import { env } from "@/env";

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

    script.addEventListener("load", () => {
      cleanupForm();
      try {
        window.hbspt.forms.create({
          region: HUBSPOT_REGION,
          portalId: env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID,
          formId: formToLang[lang],
          target: "#hubspotForm",
          onFormReady: () => {
            setLoading(false);
            const formContainer = document.getElementById("hubspotForm");
            if (formContainer) {
              setLoading(false);
              applyTailwindClasses(formContainer, buttonClasses);
              const observer = observeMutations(formContainer, buttonClasses);
              return () => {
                observer.disconnect();
                cleanupForm();
              };
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

const FormLoading = () => (
  <div role="status" className="full-w animate-pulse flex flex-col gap-4">
    <div className="h-6 bg-gray-700 rounded"></div>
    <div className="h-6 bg-gray-700 rounded"></div>
    <div className="h-6 bg-gray-700 rounded"></div>
    <div className="h-6 bg-gray-700 rounded"></div>
    <div className="h-6 bg-gray-700 rounded"></div>
    <div className="h-6 bg-gray-700 rounded"></div>
    <span className="sr-only">Loading...</span>
  </div>
);

// Generate Tailwind classes for the HubSpot form.
const applyTailwindClasses = (
  container: HTMLElement,
  buttonClasses: string
) => {
  const form = container.querySelector("form");
  form?.classList.add("w-full", "flex", "flex-col");

  const inputSelectors = [
    "input[type=text]",
    "input[type=email]",
    "input[type=tel]",
    "textarea",
    "select",
  ].join(", ");

  const inputs = container.querySelectorAll(inputSelectors);
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
    if (label.classList.contains("hs-error-msg")) {
      label.classList.replace("text-primary", "text-orange");
      label.classList.add("mt-1");
    }
  });

  const booleanCheckBox = container.querySelectorAll(
    ".hs-form-booleancheckbox"
  );
  booleanCheckBox.forEach((checkbox) => {
    checkbox.querySelectorAll("input[type=checkbox]").forEach((input) => {
      input.classList.add(
        "w-6",
        "h-6",
        "mr-2",
        "border",
        "border-gray-600",
        "rounded",
        "select-none",
        "bg-gray-800",
        "text-orange",
        "focus:ring-primary-500",
        "checked:bg-primary-500"
      );
    });

    checkbox.querySelectorAll("label").forEach((label) => {
      label.classList.add("text-secondary", "text-sm", "flex");
      label.querySelector("span")?.classList.add("flex", "items-center");
    });

    checkbox.querySelectorAll("a").forEach((link) => {
      link.classList.add("text-orange", "text-sm", "underline");
    });
  });

  container.querySelectorAll(".hs-richtext").forEach((richText) => {
    richText.classList.add("text-secondary", "text-sm");
  });

  container.querySelectorAll(".hs-form-field").forEach((field) => {
    field.classList.add("mb-5");
  });

  container.querySelectorAll(".actions").forEach((action) => {
    action.classList.add("mt-3", "flex", "justify-end");
  });

  const buttonClassesArray = buttonClasses.split(" ");
  container.querySelectorAll("input[type=submit]").forEach((button) => {
    button.classList.add(...buttonClassesArray);
  });

  container.querySelector(".submitted-message")?.classList.add("text-xl");
};

// Observe mutations on the form container to apply Tailwind classes (otherwise they get removed)
const observeMutations = (container: HTMLElement, buttonClasses: string) => {
  const observer = new MutationObserver((mutations) => {
    if (mutations.length > 0) {
      const formContainer = document.getElementById("hubspotForm");
      if (formContainer) {
        applyTailwindClasses(formContainer, buttonClasses);
      }
    }
  });

  // Observe changes to the form container and scope to certain attributes (otherwise there are too many mutations)
  observer.observe(container, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["type", "value", "placeholder", "checked"], // Only observe these attributes
  });

  return observer;
};
