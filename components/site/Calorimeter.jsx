import { degree, sixthForm } from "./data";

/*
  Education, drawn as a calorimeter: deposited energy, read as real numbers.

  The section is called Education because that is what a reader is looking for.
  The detector vocabulary stays where it does real work, in the graphic and the
  rail, rather than in a menu a recruiter has to decode.

  Every bar here is an actual module grade from the transcript. Nothing is
  scaled for drama and nothing is invented. The scale starts at 60 rather than
  0 because a first-class transcript compressed against zero reads as fourteen
  identical bars, and the axis says so out loud.
*/

const FLOOR = 60;

function pct(grade) {
  return ((grade - FLOOR) / (100 - FLOOR)) * 100;
}

export default function Calorimeter() {
  return (
    <section
      id="education"
      className="mx-auto max-w-[1600px] scroll-mt-20 px-6 py-20 md:px-12 md:py-28"
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <h2 className="text-3xl font-semibold leading-tight tracking-[-0.02em] text-ink md:text-4xl">
            Education
          </h2>

          <p className="mt-6 max-w-measure text-base leading-relaxed text-steel-bright">
            {degree.award}, {degree.institution}. {degree.classification} at {degree.overall}%.
            Every bar is a real module grade.
          </p>

          <dl className="mt-7 space-y-4 border-l border-calor/40 pl-5">
            <div>
              <dt className="legend text-steel">Dates</dt>
              <dd className="mt-1 font-mono text-sm text-steel-bright">
                {degree.start} — {degree.end}
              </dd>
            </div>
            <div>
              <dt className="legend text-steel">Overall</dt>
              <dd className="mt-1 font-mono text-2xl text-ink">{degree.overall}%</dd>
            </div>
          </dl>

          <div className="mt-8 border-t border-steel-dim pt-6">
            <h3 className="text-base font-semibold text-ink">{sixthForm.award}</h3>
            <p className="mt-1 text-sm text-steel-bright">
              {sixthForm.institution} · {sixthForm.start} — {sixthForm.end}
            </p>
            <p className="mt-2 font-mono text-meas text-steel">
              {sixthForm.subjects.join(" · ")}
            </p>
          </div>
        </div>

        <div>
          <ul>
            {degree.modules.map((m) => (
              <li
                key={m.name}
                className="group grid grid-cols-[minmax(0,1fr)_3.25rem] items-center gap-4 border-b border-steel-dim py-3"
              >
                <div className="min-w-0">
                  <p className="truncate text-sm text-ink md:text-base">{m.name}</p>
                  <div className="mt-2 h-1.5 w-full bg-steel-dim/40">
                    <div
                      className="h-full bg-calor transition-opacity duration-200 ease-expo group-hover:opacity-100"
                      style={{ width: `${pct(m.grade)}%`, opacity: 0.8 }}
                    />
                  </div>
                </div>
                <span className="text-right font-mono text-sm text-steel-bright group-hover:text-calor">
                  {m.grade}%
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-4 font-mono text-meas text-steel">
            Bars scaled from {FLOOR}% to 100%
          </p>
        </div>
      </div>
    </section>
  );
}
