import { role } from "./data";

/*
  The infrastructure jet at full depth. Nine real responsibility areas, each a
  track through the detector: a bold lead naming the practice, then what it
  actually involves. No modal, because none of this needs protecting from the
  reader.
*/

export default function Infrastructure() {
  return (
    <section
      id="infrastructure"
      className="mx-auto max-w-[1600px] scroll-mt-20 px-6 py-20 md:px-12 md:py-28"
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <h2 className="text-3xl font-semibold leading-tight tracking-[-0.02em] text-infra md:text-4xl">
            Infrastructure
          </h2>

          <dl className="mt-7 space-y-4 border-l border-infra/40 pl-5">
            <div>
              <dt className="legend text-steel">Role</dt>
              <dd className="mt-1 text-lg text-ink">{role.title}</dd>
            </div>
            <div>
              <dt className="legend text-steel">Employer</dt>
              <dd className="mt-1 text-lg text-ink">{role.company}</dd>
            </div>
            <div>
              <dt className="legend text-steel">Client</dt>
              <dd className="mt-1 text-lg text-ink">{role.client}</dd>
            </div>
            <div>
              <dt className="legend text-steel">Dates</dt>
              <dd className="mt-1 font-mono text-sm text-steel-bright">
                {role.start} — {role.end}
              </dd>
            </div>
          </dl>

          <p className="mt-7 max-w-measure text-base leading-relaxed text-steel-bright">
            {role.summary}
          </p>
        </div>

        <ul>
          {role.responsibilities.map((item) => (
            <li
              key={item.label}
              id={item.id}
              className="evidence scroll-mt-24 border-t border-steel-dim py-6 transition-colors duration-200 ease-expo hover:border-infra/50"
            >
              <h3 className="text-lg font-semibold leading-snug text-ink">{item.label}</h3>
              <p className="mt-2 max-w-measure text-base leading-relaxed text-steel-bright">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
