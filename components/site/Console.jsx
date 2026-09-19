import { useState } from "react";
import { identity } from "./data";
import { JET, PALETTE, STATUS } from "./palette";

/*
  Contact. Same Formspree endpoint as before, rebuilt with associated
  labels, an aria-live status that does not vanish on a timer, and errors that
  name both the problem and the recovery.
*/

const FIELDS = [
  { name: "name", label: "Name", type: "text", autoComplete: "name" },
  { name: "email", label: "Email", type: "email", autoComplete: "email" },
];

export default function Console() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const onChange = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(identity.formspree, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(values),
      });
      if (res.ok) {
        setStatus("sent");
        setValues({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const message = {
    sending: { text: "Sending your message.", color: JET.infrastructure },
    sent: { text: "Sent. I will reply to the address you gave.", color: JET.software },
    error: {
      text: "That did not send. Check your connection and try again, or reach me on LinkedIn.",
      color: STATUS.energy,
    },
  }[status];

  return (
    <section
      id="contact"
      className="mx-auto max-w-[1600px] scroll-mt-20 px-6 py-20 md:px-12 md:py-28"
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
        <div>
          <h2 className="text-3xl font-semibold leading-tight tracking-[-0.02em] text-ink md:text-4xl">
            Get in touch
          </h2>
          <p className="mt-6 max-w-measure text-base leading-relaxed text-steel-bright">
            If you are hiring for infrastructure, software, or the overlap between them, send
            a message here and it reaches me directly.
          </p>
          <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2">
            {identity.links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-meas uppercase tracking-[0.14em] text-steel-bright underline decoration-steel-dim underline-offset-4 transition-colors duration-200 ease-expo hover:text-software hover:decoration-software"
                >
                  {l.label}
                </a>
              </li>
            ))}
            {identity.email ? (
              <li>
                <a
                  href={`mailto:${identity.email}`}
                  className="font-mono text-meas uppercase tracking-[0.14em] text-steel-bright underline decoration-steel-dim underline-offset-4 hover:text-software"
                >
                  Email
                </a>
              </li>
            ) : null}
          </ul>
        </div>

        {/* action + method are the no-JavaScript path: without the handler the
            browser posts straight to Formspree instead of doing nothing. */}
        <form
          onSubmit={onSubmit}
          action={identity.formspree}
          method="POST"
          className="border border-steel-dim p-6 md:p-8"
        >
          <div className="grid gap-5 md:grid-cols-2">
            {FIELDS.map((f) => (
              <div key={f.name}>
                <label htmlFor={`console-${f.name}`} className="legend block text-steel">
                  {f.label}
                </label>
                <input
                  id={`console-${f.name}`}
                  name={f.name}
                  type={f.type}
                  autoComplete={f.autoComplete}
                  required
                  value={values[f.name]}
                  onChange={onChange}
                  className="mt-2 w-full border border-steel-dim bg-vacuum-raised px-3 py-2.5 text-base text-ink transition-colors duration-200 ease-expo placeholder:text-steel hover:border-steel focus:border-software focus:outline-none"
                />
              </div>
            ))}
          </div>

          <div className="mt-5">
            <label htmlFor="console-message" className="legend block text-steel">
              Message
            </label>
            <textarea
              id="console-message"
              name="message"
              rows={6}
              required
              value={values.message}
              onChange={onChange}
              className="mt-2 w-full resize-y border border-steel-dim bg-vacuum-raised px-3 py-2.5 text-base leading-relaxed text-ink transition-colors duration-200 ease-expo hover:border-steel focus:border-software focus:outline-none"
            />
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-5">
            <button
              type="submit"
              disabled={status === "sending"}
              className="control control-primary disabled:cursor-not-allowed disabled:opacity-50"
            >
              {status === "sending" ? "Sending" : "Send message"}
            </button>

            <p
              aria-live="polite"
              className="font-mono text-meas leading-relaxed"
              style={{ color: message ? message.color : "transparent" }}
            >
              {message ? message.text : " "}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
