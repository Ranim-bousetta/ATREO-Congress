import { useState } from "react";
import { registerFields } from "../data/siteData";

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  speciality: "",
  country: "",
  city: "",
  message: "",
};

export default function RegisterForm() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="glass-card overflow-hidden">
      <div className="bg-gradient-to-r from-cyan-600 to-[var(--navy)] px-6 py-8 text-white sm:px-10 sm:py-10">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/75">
          Congress registration
        </p>
        <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
          Register for MOIP 2026
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-white/80 sm:text-base">
          Fill in the form below with your name, specialty, country, city, and
          contact details.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="grid gap-5 p-6 sm:grid-cols-2 sm:p-10"
      >
        {registerFields.map((field) => {
          const sharedProps = {
            id: field.name,
            name: field.name,
            value: form[field.name],
            onChange: handleChange,
            required: field.required,
            className:
              "mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100",
          };

          return (
            <label
              key={field.name}
              htmlFor={field.name}
              className={field.type === "textarea" ? "sm:col-span-2" : ""}
            >
              <span className="text-sm font-semibold text-slate-700">
                {field.label}
              </span>
              {field.type === "textarea" ? (
                <textarea {...sharedProps} rows={5} />
              ) : (
                <input {...sharedProps} type={field.type} />
              )}
            </label>
          );
        })}

        <div className="sm:col-span-2 flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
          <button type="submit" className="btn-primary">
            Submit registration
          </button>
          {submitted ? (
            <p className="text-sm font-medium text-emerald-700">
              Demo form submitted. Replace this with your backend or Formspree
              endpoint.
            </p>
          ) : (
            <p className="text-sm text-slate-500">
              This demo currently works as a front-end form only.
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
