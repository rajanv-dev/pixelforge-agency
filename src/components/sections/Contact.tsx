"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { validateContactForm, isFormValid } from "@/lib/validation";
import type { ContactFormData, ContactFormErrors, FormStatus } from "@/types";

const INITIAL_FORM: ContactFormData = {
  name: "",
  email: "",
  projectType: "",
  message: "",
};

const PROJECT_TYPES = [
  "UI/UX Design",
  "Web Development",
  "Brand Identity",
  "Digital Strategy",
  "Full Project",
  "Other",
];

/** PixelForge Studio — Validated Contact section */
export function Contact() {
  const [form, setForm] = useState<ContactFormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validateContactForm(form);
    if (!isFormValid(validationErrors)) {
      setErrors(validationErrors);
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm(INITIAL_FORM);
        setErrors({});
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-20 lg:py-28 bg-[var(--background)] border-t border-[var(--border)] transition-colors duration-200"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: Heading & studio email */}
          <div className="lg:col-span-5">
            <p className="mb-3 font-sans text-xs font-medium uppercase tracking-[0.18em] text-[var(--muted)]">
              HAVE A PROJECT IN MIND?
            </p>
            <h2
              id="contact-heading"
              className="font-display font-bold leading-[1.02] tracking-tight text-4xl sm:text-5xl lg:text-[3.5rem] text-[var(--foreground)]"
            >
              Let&apos;s create
              <br />
              something
              <br />
              remarkable.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[var(--muted)] max-w-md">
              Have an idea? Let&apos;s discuss how we can bring it to life.
            </p>

            <div className="mt-10 border-t border-[var(--border)] pt-7">
              <p className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-[var(--muted)] mb-1.5">
                Direct Email
              </p>
              <a
                href="mailto:hello@pixelforge.studio"
                className="font-display text-base font-medium text-[var(--foreground)] hover:underline"
              >
                hello@pixelforge.studio
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 sm:p-10 transition-colors duration-200">
              {status === "success" ? (
                <div
                  role="alert"
                  className="flex flex-col items-start gap-4 py-8"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--accent-foreground)]">
                    <CheckCircle size={22} aria-hidden="true" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-[var(--foreground)]">
                    Submission validated &amp; received
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--muted)] max-w-md">
                    Your inquiry was validated and handled by{" "}
                    <code className="rounded bg-[var(--secondary)] px-1.5 py-0.5 text-xs text-[var(--foreground)]">
                      /api/contact
                    </code>
                    . Note: no external email provider is configured yet, so
                    submissions are not delivered to an inbox.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setStatus("idle")}
                    type="button"
                    className="mt-2"
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  aria-label="Contact form"
                  className="flex flex-col gap-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Field
                      label="Full Name"
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange}
                      error={errors.name}
                      placeholder="Alex Johnson"
                      required
                    />
                    <Field
                      label="Email Address"
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      error={errors.email}
                      placeholder="alex@example.com"
                      required
                    />
                  </div>

                  {/* Project Type */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="projectType"
                      className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-[var(--foreground)]"
                    >
                      Project Type{" "}
                      <span className="font-normal normal-case tracking-normal text-[var(--muted)]">
                        (optional)
                      </span>
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={form.projectType}
                      onChange={handleChange}
                      className="w-full rounded-md border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm text-[var(--foreground)] transition-colors focus:border-[var(--foreground)] focus:outline-none"
                    >
                      <option value="">Select a project type...</option>
                      {PROJECT_TYPES.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <Field
                    label="Message"
                    id="message"
                    name="message"
                    type="textarea"
                    value={form.message}
                    onChange={handleChange}
                    error={errors.message}
                    placeholder="Tell us about your goals, timeline, and vision..."
                    required
                  />

                  {status === "error" && (
                    <div
                      role="alert"
                      className="flex items-center gap-2 rounded-md border border-red-400/50 bg-red-500/10 px-4 py-3 text-sm text-red-500"
                    >
                      <AlertCircle size={16} aria-hidden="true" />
                      <span>
                        Something went wrong. Please check your inputs or email
                        us at hello@pixelforge.studio.
                      </span>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                    <Button
                      type="submit"
                      variant="dark"
                      size="lg"
                      disabled={status === "loading"}
                      aria-busy={status === "loading"}
                      className="w-full sm:w-auto"
                    >
                      {status === "loading" ? (
                        <>
                          <span
                            className="size-4 rounded-full border-2 border-current/30 border-t-current animate-spin"
                            aria-hidden="true"
                          />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <ArrowRight size={16} aria-hidden="true" />
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-[var(--muted)]">
                      Validated by{" "}
                      <code className="text-[var(--foreground)]">/api/contact</code>{" "}
                      (no inbox delivery configured).
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

interface FieldProps {
  label: string;
  id: string;
  name: string;
  type: "text" | "email" | "textarea";
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  error?: string;
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
}

function Field({
  label,
  id,
  name,
  type,
  value,
  onChange,
  error,
  placeholder,
  autoComplete,
  required,
}: FieldProps) {
  const baseClass =
    "w-full rounded-md border bg-[var(--background)] px-4 py-3 text-sm text-[var(--foreground)] placeholder:text-[var(--muted)]/70 transition-colors focus:border-[var(--foreground)] focus:outline-none";
  const borderClass = error
    ? "border-red-500"
    : "border-[var(--border)] hover:border-[var(--muted)]";

  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="font-sans text-xs font-semibold uppercase tracking-[0.12em] text-[var(--foreground)]"
      >
        {label}
        {required && (
          <span className="ml-1 text-[var(--foreground)]" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={4}
          aria-describedby={error ? `${id}-error` : undefined}
          aria-invalid={!!error}
          aria-required={required}
          className={`${baseClass} ${borderClass} resize-none`}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
          aria-describedby={error ? `${id}-error` : undefined}
          aria-invalid={!!error}
          aria-required={required}
          className={`${baseClass} ${borderClass}`}
        />
      )}
      {error && (
        <p id={`${id}-error`} role="alert" className="text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}
