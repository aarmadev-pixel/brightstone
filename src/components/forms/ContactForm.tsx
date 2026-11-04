"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import {
  ENQUIRY_LIMITS,
  emptyEnquiry,
  industryOptions,
  serviceInterestOptions,
  validateEnquiry,
  type EnquiryErrors,
  type EnquiryInput,
} from "@/lib/enquiry";
import { cn } from "@/lib/cn";

type Status =
  | { type: "idle" }
  | { type: "submitting" }
  | { type: "demo"; message: string }
  | { type: "error"; message: string };

import { interpretEnquiryResponse } from "@/lib/enquiry-response";

export function ContactForm() {
  const [values, setValues] = useState<EnquiryInput>(emptyEnquiry);
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [status, setStatus] = useState<Status>({ type: "idle" });
  const formRef = useRef<HTMLFormElement>(null);
  const submittingRef = useRef(false);
  const demoHeadingRef = useRef<HTMLHeadingElement>(null);
  const returnFocusRef = useRef(false);
  const focusFirstErrorRef = useRef(false);

  useEffect(() => {
    if (!focusFirstErrorRef.current) return;
    focusFirstErrorRef.current = false;
    formRef.current
      ?.querySelector<HTMLElement>('[aria-invalid="true"]')
      ?.focus();
  }, [errors]);

  useEffect(() => {
    if (status.type === "demo") demoHeadingRef.current?.focus();
    else if (returnFocusRef.current) {
      returnFocusRef.current = false;
      formRef.current?.querySelector<HTMLElement>("#fullName")?.focus();
    }
  }, [status.type]);

  function update<K extends keyof EnquiryInput>(key: K, value: EnquiryInput[K]) {
    const nextValues = { ...values, [key]: value };
    setValues(nextValues);
    if (errors[key]) {
      const nextError = validateEnquiry(nextValues)[key];
      setErrors((current) => {
        if (current[key] === nextError) return current;
        const nextErrors = { ...current };
        if (nextError) nextErrors[key] = nextError;
        else delete nextErrors[key];
        return nextErrors;
      });
    }
    if (status.type === "error") setStatus({ type: "idle" });
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submittingRef.current) return;

    const nextErrors = validateEnquiry(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus({ type: "idle" });
      focusFirstErrorRef.current = true;
      return;
    }

    submittingRef.current = true;
    setStatus({ type: "submitting" });
    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data: unknown = await response.json().catch(() => null);
      const result = interpretEnquiryResponse(response.status, data);
      if (result.type === "error" && result.errors) {
        setErrors(result.errors);
        focusFirstErrorRef.current = true;
      }
      setStatus(result);
    } catch {
      setStatus({
        type: "error",
        message:
          "A network error prevented the request from completing. Your details are still here; please try again.",
      });
    } finally {
      submittingRef.current = false;
    }
  }

  if (status.type === "demo") {
    return (
      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
        <h2 ref={demoHeadingRef} tabIndex={-1} className="font-heading text-lg font-semibold text-navy">
          Demonstration mode
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate">{status.message}</p>
        <p className="mt-3 text-sm leading-6 text-slate">
          Keep a copy of your message until a secure enquiry endpoint is
          connected. Nothing has been emailed or saved on a server.
        </p>
        <pre className="mt-4 whitespace-pre-wrap break-words rounded-xl bg-white p-4 text-sm text-navy">
          {values.message}
        </pre>
        <Button
          type="button"
          className="mt-4"
          onClick={() => { returnFocusRef.current = true; setStatus({ type: "idle" }); }}
        >
          Return to form
        </Button>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      noValidate
      aria-busy={status.type === "submitting"}
      className="space-y-5"
    >
      <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950">
        Enquiry submission is in demo mode until a secure backend is configured.
        Valid forms will not be emailed or stored.
      </div>
      {status.type === "error" ? (
        <p role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {status.message}
        </p>
      ) : null}
      <Field
        id="fullName"
        label="Full name"
        value={values.fullName}
        error={errors.fullName}
        autoComplete="name"
        maxLength={ENQUIRY_LIMITS.fullName}
        required
        onChange={(value) => update("fullName", value)}
      />
      <Field
        id="businessName"
        label="Business name"
        value={values.businessName}
        error={errors.businessName}
        autoComplete="organization"
        maxLength={ENQUIRY_LIMITS.businessName}
        required
        onChange={(value) => update("businessName", value)}
      />
      <Field
        id="email"
        label="Email address"
        type="email"
        value={values.email}
        error={errors.email}
        autoComplete="email"
        maxLength={ENQUIRY_LIMITS.email}
        required
        onChange={(value) => update("email", value)}
      />
      <Field
        id="phone"
        label="Phone number"
        optional
        type="tel"
        value={values.phone}
        error={errors.phone}
        autoComplete="tel"
        maxLength={ENQUIRY_LIMITS.phone}
        onChange={(value) => update("phone", value)}
      />
      <SelectField
        id="industry"
        label="Industry"
        value={values.industry}
        error={errors.industry}
        options={industryOptions}
        required
        onChange={(value) => update("industry", value)}
      />
      <SelectField
        id="serviceInterest"
        label="Service of interest"
        value={values.serviceInterest}
        error={errors.serviceInterest}
        options={serviceInterestOptions}
        required
        onChange={(value) => update("serviceInterest", value)}
      />
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-navy">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          maxLength={ENQUIRY_LIMITS.message}
          onChange={(event) => update("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-required="true"
          required
          aria-describedby={errors.message ? "message-error message-count" : "message-count"}
          className={inputClass(Boolean(errors.message), "mt-1.5 min-h-[140px]")}
        />
        {errors.message ? (
          <p id="message-error" className="mt-1.5 text-sm text-red-700">
            {errors.message}
          </p>
        ) : null}
        <p id="message-count" className="mt-1.5 text-right text-xs text-slate">
          {values.message.length} / {ENQUIRY_LIMITS.message} characters
        </p>
      </div>
      <div>
        <label htmlFor="privacy" className="flex items-start gap-3 text-sm leading-6 text-slate">
          <input
            id="privacy"
            name="privacy"
            type="checkbox"
            checked={values.privacy}
            onChange={(event) => update("privacy", event.target.checked)}
            aria-invalid={Boolean(errors.privacy)}
            aria-required="true"
            required
            aria-describedby={errors.privacy ? "privacy-error" : undefined}
            className="mt-1 h-4 w-4 rounded border-mist text-royal"
          />
          <span>
            I understand this form is in demonstration mode and I have read the{" "}
            <a className="font-medium text-royal underline" href="/privacy">
              draft privacy notice
            </a>
            .
          </span>
        </label>
        {errors.privacy ? (
          <p id="privacy-error" className="mt-1.5 text-sm text-red-700">
            {errors.privacy}
          </p>
        ) : null}
      </div>
      <Button type="submit" disabled={status.type === "submitting"}>
        <span aria-live="polite">
          {status.type === "submitting" ? "Checking enquiry..." : "Check enquiry"}
        </span>
      </Button>
    </form>
  );
}

function inputClass(invalid: boolean, extra?: string) {
  return cn(
    "w-full rounded-xl border bg-white px-3.5 py-2.5 text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-royal transition",
    invalid ? "border-red-400" : "border-mist focus:border-royal",
    extra,
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  optional,
  type = "text",
  autoComplete,
  maxLength,
  required = false,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  optional?: boolean;
  type?: string;
  autoComplete?: string;
  maxLength: number;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-navy">
        {label}
        {optional ? (
          <span className="ml-1 font-normal text-slate">(optional)</span>
        ) : null}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        autoComplete={autoComplete}
        value={value}
        maxLength={maxLength}
        required={required}
        onChange={(event) => onChange(event.target.value)}
        aria-required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={inputClass(Boolean(error), "mt-1.5")}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-red-700">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function SelectField({
  id,
  label,
  value,
  onChange,
  error,
  options,
  required = false,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  options: readonly { value: string; label: string }[];
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-navy">
        {label}
      </label>
      <select
        id={id}
        name={id}
        value={value}
        required={required}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
        aria-required={required}
        aria-describedby={error ? `${id}-error` : undefined}
        className={inputClass(Boolean(error), "mt-1.5")}
      >
        {options.map((option) => (
          <option key={option.value || "empty"} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-red-700">
          {error}
        </p>
      ) : null}
    </div>
  );
}
