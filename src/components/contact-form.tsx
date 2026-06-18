"use client";

import { useState, useEffect, FormEvent } from "react";
import { SubmitButton } from "./cta-button";
import { trackConversion } from "@/components/analytics";

interface ContactFormData {
  name: string;
  email: string;
  productName: string;
  productUrl: string;
  whatBuilding: string;
  whatNeed: string;
  showcaseConsent: boolean;
  honeypot: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

function getCtaSource(): string {
  if (typeof window === "undefined") return "direct";
  return sessionStorage.getItem("ctaSource") || "direct";
}

export default function ContactForm({ id }: { id?: string }) {
  const [ctaSource, setCtaSource] = useState("direct");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    productName: "",
    productUrl: "",
    whatBuilding: "",
    whatNeed: "",
    showcaseConsent: false,
    honeypot: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  useEffect(() => {
    setCtaSource(getCtaSource());
    const handler = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest('a[href*="#contact-form"]');
      if (link) {
        const text = link.textContent?.trim() || "unknown";
        sessionStorage.setItem("ctaSource", text);
        setCtaSource(text);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  function validate(): boolean {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email.";
    }
    if (!formData.productName.trim()) {
      newErrors.productName = "Product name is required.";
    }
    if (!formData.whatBuilding.trim()) {
      newErrors.whatBuilding = "Tell me what you're building — one line is enough.";
    }
    if (!formData.whatNeed.trim()) {
      newErrors.whatNeed = "Tell me what you need from your landing.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    // Clear error for the field being edited
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    // Honeypot check
    if (formData.honeypot) {
      // Silently "succeed" — it's a bot
      setStatus("success");
      return;
    }

    if (!validate()) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          productName: formData.productName,
          productUrl: formData.productUrl || undefined,
          whatBuilding: formData.whatBuilding,
          whatNeed: formData.whatNeed,
          showcaseConsent: formData.showcaseConsent,
          ctaSource: ctaSource,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      trackConversion("free_landing_cta", {
        product_name: formData.productName,
      });
      setFormData({
        name: "",
        email: "",
        productName: "",
        productUrl: "",
        whatBuilding: "",
        whatNeed: "",
        showcaseConsent: false,
        honeypot: "",
      });
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  }

  const inputClass =
    "w-full px-4 py-3 text-base font-body text-ink bg-bg-alt border border-border rounded-lg placeholder:text-faint focus:border-brand focus:ring-2 focus:ring-brand/30 focus:outline-none transition-colors duration-200";
  const errorClass = "border-error focus:border-error focus:ring-error/30";
  const labelClass = "block text-sm font-medium text-muted mb-1.5";

  if (status === "success") {
    return (
      <div id={id} className="text-center py-12 px-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success/10 mb-6">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#5CB878" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="text-2xl font-display text-ink mb-3 text-balance">
          Got it. I&apos;ll be in touch.
        </h3>
        <p className="text-base text-muted max-w-md mx-auto">
          I read every submission personally. Expect a reply from me within 48 hours — not an auto-responder.
        </p>
      </div>
    );
  }

  return (
    <form
      id={id}
      onSubmit={handleSubmit}
      className="space-y-6 max-w-xl mx-auto relative"
      noValidate
    >
      {/* Honeypot — invisible to users, irresistible to bots */}
      <div className="absolute opacity-0 pointer-events-none" aria-hidden="true">
        <label htmlFor="honeypot">Leave this empty</label>
        <input
          type="text"
          id="honeypot"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Name */}
      <div>
        <label htmlFor="contact-name" className={labelClass}>
          Your name <span className="text-error">*</span>
        </label>
        <input
          type="text"
          id="contact-name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`${inputClass} ${errors.name ? errorClass : ""}`}
          placeholder=""
          required
        />
        {errors.name && (
          <p className="mt-1 text-sm text-error">{errors.name}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="contact-email" className={labelClass}>
          Your email <span className="text-error">*</span>
        </label>
        <input
          type="email"
          id="contact-email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`${inputClass} ${errors.email ? errorClass : ""}`}
          placeholder=""
          required
        />
        {errors.email && (
          <p className="mt-1 text-sm text-error">{errors.email}</p>
        )}
      </div>

      {/* Product name */}
      <div>
        <label htmlFor="contact-product" className={labelClass}>
          Product name <span className="text-error">*</span>
        </label>
        <input
          type="text"
          id="contact-product"
          name="productName"
          value={formData.productName}
          onChange={handleChange}
          className={`${inputClass} ${errors.productName ? errorClass : ""}`}
          placeholder=""
          required
        />
        {errors.productName && (
          <p className="mt-1 text-sm text-error">{errors.productName}</p>
        )}
      </div>

      {/* Product URL — optional */}
      <div>
        <label htmlFor="contact-url" className={labelClass}>
          Product URL{" "}
          <span className="text-faint font-normal">(if you have one)</span>
        </label>
        <input
          type="text"
          id="contact-url"
          name="productUrl"
          value={formData.productUrl}
          onChange={handleChange}
          className={inputClass}
          placeholder=""
        />
      </div>

      {/* What are you building? */}
      <div>
        <label htmlFor="contact-building" className={labelClass}>
          What are you building? <span className="text-error">*</span>
        </label>
        <input
          type="text"
          id="contact-building"
          name="whatBuilding"
          value={formData.whatBuilding}
          onChange={handleChange}
          className={`${inputClass} ${errors.whatBuilding ? errorClass : ""}`}
          placeholder="One line is enough"
          required
        />
        {errors.whatBuilding && (
          <p className="mt-1 text-sm text-error">{errors.whatBuilding}</p>
        )}
      </div>

      {/* What do you need? */}
      <div>
        <label htmlFor="contact-need" className={labelClass}>
          What do you need? <span className="text-error">*</span>
        </label>
        <textarea
          id="contact-need"
          name="whatNeed"
          value={formData.whatNeed}
          onChange={handleChange}
          rows={4}
          className={`${inputClass} min-h-[120px] resize-y ${errors.whatNeed ? errorClass : ""}`}
          placeholder="Forms? Demo signups? Waitlist? Tell me."
          required
        />
        {errors.whatNeed && (
          <p className="mt-1 text-sm text-error">{errors.whatNeed}</p>
        )}
      </div>

      {/* Showcase consent */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="showcaseConsent"
            checked={formData.showcaseConsent}
            onChange={handleChange}
            className="mt-1 h-4 w-4 rounded border-border bg-bg-alt text-brand focus:ring-brand focus:ring-offset-bg"
          />
          <span className="text-sm text-muted leading-relaxed">
            OK to feature my landing in your showcase (optional — you can revoke this anytime)
          </span>
        </label>
      </div>

      {/* Error message */}
      {status === "error" && errorMessage && (
        <div className="p-4 bg-error/10 border border-error/20 rounded-lg">
          <p className="text-sm text-error">{errorMessage}</p>
        </div>
      )}

      {/* Submit */}
      <div className="pt-2">
        <SubmitButton loading={status === "loading"} className="w-full sm:w-auto">
          Get your first landing — free
        </SubmitButton>
      </div>

      {/* Form footer */}
      <p className="text-xs text-faint text-center">
        No obligation. No credit card. I&apos;ll respond within 48 hours.
      </p>
    </form>
  );
}
