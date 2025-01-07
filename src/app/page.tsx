"use client";

import React, { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ReCAPTCHA from "react-google-recaptcha";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "./Home/heroHome";
import Keahliaan from "./Home/keahliaan";
import Spesialis from "./Home/spesialis";
import Faq from "./Home/faq";

const RecaptchaDemo: React.FC = () => {
  const sitekey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  const [isVerified, setIsVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [recaptchaError, setRecaptchaError] = useState(false);
  const [recaptchaReady, setRecaptchaReady] = useState(false);
  const router = useRouter();

  const handleRecaptchaChange = (token: string | null) => {
    if (token) {
      setIsVerified(true);
      setRecaptchaError(false);
    } else {
      setIsVerified(false);
    }
    setIsLoading(false);
  };

  const handleRecaptchaLoad = () => {
    setRecaptchaReady(true);
    setIsLoading(false);
  };

  const handleRecaptchaError = () => {
    console.error("reCAPTCHA failed to load");
    setRecaptchaError(true);
    setIsLoading(false);
  };

  const retryRecaptcha = () => {
    window.location.reload();
  };

  if (isVerified) {
    return (
      <div>
        <Navbar />
        <Hero />
        <Keahliaan />
        <Spesialis />
        <Faq />
        <Footer />
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto mt-10">
      <div className="card p-6 shadow-lg">
        <h1 className="text-xl font-semibold text-center">
          reCAPTCHA Demo: Verification Required
        </h1>
        {isLoading && <p className="text-center">Loading reCAPTCHA...</p>}

        <div className="mt-4 justify-center flex">
          <ReCAPTCHA
            sitekey={sitekey || ""}
            onChange={handleRecaptchaChange}
            onLoad={handleRecaptchaLoad}
            onErrored={handleRecaptchaError}
            onExpired={() => {
              setIsVerified(false);
              setRecaptchaError(true);
            }}
          />
        </div>

        {recaptchaError && (
          <div className="mt-4 text-center text-red-500">
            <p>reCAPTCHA failed to load. Please try again.</p>
            <button onClick={retryRecaptcha} className="btn btn-primary mt-2">
              Retry
            </button>
          </div>
        )}

        {!recaptchaReady && !isLoading && (
          <div className="mt-4 text-center">
            <p className="text-red-500">
              reCAPTCHA is not ready yet. Please wait or refresh the page.
            </p>
            <button onClick={retryRecaptcha} className="btn btn-secondary mt-2">
              Refresh
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecaptchaDemo;
