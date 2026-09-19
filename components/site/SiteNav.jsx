import { useEffect, useState } from "react";
import { identity, sections } from "./data";

/*
  Persistent navigation. The old site lost its nav after the first scroll;
  this one stays, marks the section you are in, and offers a skip link ahead
  of everything else.
*/

export default function SiteNav() {
  const [current, setCurrent] = useState("event");

  useEffect(() => {
    const nodes = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean);
    if (nodes.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setCurrent(visible.target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0.01, 0.25, 0.5] }
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a
        href="#event"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:border focus:border-software focus:bg-vacuum focus:px-4 focus:py-2 focus:font-mono focus:text-meas focus:uppercase focus:text-software"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-30 border-b border-steel-dim/70 bg-vacuum/85 backdrop-blur-md">
        <nav
          aria-label="Sections"
          className="mx-auto flex max-w-[1600px] flex-nowrap items-center gap-3 px-6 py-3 md:gap-4 md:px-12"
        >
          {/* The name wants room the section links need more, so it waits for
              lg. At 768 keeping both wrapped the bar onto a second row. */}
          <a
            href="#event"
            className="hidden shrink-0 font-mono text-meas uppercase tracking-[0.18em] text-ink transition-colors duration-200 ease-expo hover:text-software lg:inline"
          >
            {identity.name}
          </a>

          <span
            className="hidden h-3 w-px shrink-0 bg-steel-dim lg:inline-block"
            aria-hidden="true"
          />

          {/* One row at every width. Phones take the short labels; the
              accessible name stays the full section label either way. */}
          <ul className="flex min-w-0 flex-1 flex-nowrap items-center gap-x-3 md:gap-x-4">
            {sections.slice(1).map((s) => (
              <li key={s.id} className="shrink-0">
                <a
                  href={`#${s.id}`}
                  aria-label={s.label}
                  aria-current={current === s.id ? "true" : undefined}
                  className={`block whitespace-nowrap py-1 font-mono text-meas uppercase tracking-[0.1em] transition-colors duration-200 ease-expo hover:text-ink md:tracking-[0.12em] ${
                    current === s.id ? "text-software" : "text-steel"
                  }`}
                >
                  <span aria-hidden="true" className="sm:hidden">
                    {s.short}
                  </span>
                  <span aria-hidden="true" className="hidden sm:inline">
                    {s.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          {/* On a phone the Contact link above already carries this action. */}
          <a href="#contact" className="control hidden shrink-0 px-3 py-1.5 sm:inline-flex">
            Contact
          </a>
        </nav>
      </header>
    </>
  );
}
