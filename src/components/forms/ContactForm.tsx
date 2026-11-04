"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import {
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
  | { type: "demo"; message: string };

export function ContactForm() {
  const [values, setValues] = useState<EnquiryInput>(emptyEnquiry);
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [status, setStatus] = useState<Status>({ type: "idle" });

  function update<K extends keyof EnquiryInput>(key: K, value: EnquiryInput[K]) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateEnquiry(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus({ type: "idle" });
      return;
    }

    setStatus({ type: "submitting" });
    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await response.json()) as { message?: string };
      setStatus({
        type: "demo",
        message:
          data.message ??
          "Enquiry submission is in demonstration mode. Your details have not been stored or emailed.",
      });
    } catch {
      setStatus({
        type: "demo",
        message:
          "The enquiry could not be sent because no secure backend is configured yet. Your details have not been stored.",
      });
    }
  }

  if (status.type === "demo") {
    return (
      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
        <p className="font-heading text-lg font-semibold text-navy">
          Demonstration mode
        </p>
        <p className="mt-2 text-sm leading-6 text-slate">{status.message}</p>
        <p className="mt-3 text-sm leading-6 text-slate">
          Keep a copy of your message until a secure enquiry endpoint is
          connected. Nothing has been emailed or saved on a server.
        </p>
        <pre className="mt-4 overflow-auto rounded-xl bg-white p-4 text-sm text-navy">
          {values.message}
        </pre>
        <Button
          type="button"
          className="mt-4"
          onClick={() => {
            setStatus({ type: "idle" });
            setValues(emptyEnquiry);
          }}
        >
          Write another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950">
        Enquiry submission is in demo mode until a secure backend is configured.
        Valid forms will not be emailed or stored.
      </div>
      <Field
        id="fullName"
        label="Full name"
        value={values.fullName}
        error={errors.fullName}
        autoComplete="name"
        onChange={(value) => update("fullName", value)}
      />
      <Field
        id="businessName"
        label="Business name"
        value={values.businessName}
        error={errors.businessName}
        autoComplete="organization"
        onChange={(value) => update("businessName", value)}
      />
      <Field
        id="email"
        label="Email address"
        type="email"
        value={values.email}
        error={errors.email}
        autoComplete="email"
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
        onChange={(value) => update("phone", value)}
      />
      <SelectField
        id="industry"
        label="Industry"
        value={values.industry}
        error={errors.industry}
        options={industryOptions}
        onChange={(value) => update("industry", value)}
      />
      <SelectField
        id="serviceInterest"
        label="Service of interest"
        value={values.serviceInterest}
        error={errors.serviceInterest}
        options={serviceInterestOptions}
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
          onChange={(event) => update("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={inputClass(Boolean(errors.message), "mt-1.5 min-h-[140px]")}
        />
        {errors.message ? (
          <p id="message-error" className="mt-1.5 text-sm text-red-700">
            {errors.message}
          </p>
        ) : null}
      </div>
      <div>
        <label className="flex items-start gap-3 text-sm leading-6 text-slate">
          <input
            type="checkbox"
            checked={values.privacy}
            onChange={(event) => update("privacy", event.target.checked)}
            aria-invalid={Boolean(errors.privacy)}
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
        {status.type === "submitting" ? "Checking..." : "Send enquiry"}
      </Button>
    </form>
  );
}

function inputClass(invalid: boolean, extra?: string) {
  return cn(
    "w-full rounded-xl border bg-white px-3.5 py-2.5 text-navy outline-none transition",
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
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  optional?: boolean;
  type?: string;
  autoComplete?: string;
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
        onChange={(event) => onChange(event.target.value)}
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
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  options: readonly { value: string; label: string }[];
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
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
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
