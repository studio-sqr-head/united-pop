"use client";

import { useEffect, useState } from "react";

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
          portalId: HUBSPOT_PORTAL_ID,
          formId: formToLang[lang],
          target: "#hubspotForm",
          onFormReady: () => {
            setLoading(false);
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
  }, [lang]);

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
