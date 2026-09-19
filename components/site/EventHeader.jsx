import { useCallback, useEffect, useMemo, useState } from "react";
import EventDisplay from "./EventDisplay";
import { InstrumentRail, useReadout } from "./Readout";
import { identity, jets } from "./data";
import { JET } from "./palette";

/*
  First viewport. One reconstructed event: name, one positioning line, two
  controls, and two jets of identical weight fanning out of a single origin.

  Every track is a route to its own proof. The chips are the real links, in
  the tab order, each named for the thing on this page that evidences it.
  Hovering or focusing one lights it and every track proved by the same thing,
  the rail names the destination, and following the link goes there. The
  graphic mirrors that state and is aria-hidden, so there is one set of tab
  stops rather than two.
*/

const JET_LIST = [jets.infrastructure, jets.software];
const TRACK_COUNT = jets.infrastructure.tracks.length + jets.software.tracks.length;
const ROUTE_COUNT = new Set(
  [...jets.infrastructure.tracks, ...jets.software.tracks].map((t) => t.to)
).size;

export default function EventHeader() {
  const [active, setActive] = useState(null);
  /*
    The reconstruction runs exactly once per page load.
    "idle" is what the server renders and what a reader sees before hydration:
    the finished event, no animation attached. "run" plays it once on mount.
    "done" strips the animation classes for good, so a resize, a rotation or a
    style recalculation can never replay the entrance.
  */
  const [phase, setPhase] = useState("idle");
  const { report, clear } = useReadout();

  const byKey = useMemo(() => {
    const m = new Map();
    for (const jet of JET_LIST) {
      for (const t of jet.tracks) m.set(`${jet.id}:${t.name}`, { jet, track: t });
    }
    return m;
  }, []);

  const activeGroup = active ? byKey.get(active)?.track.to ?? null : null;

  useEffect(() => {
    if (!active) {
      clear();
      return;
    }
    const hit = byKey.get(active);
    if (hit) report({ jet: hit.jet.id, label: hit.track.name, meta: hit.track.where });
  }, [active, byKey, report, clear]);

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return undefined;
    setPhase("run");
    // 15 stagger steps at 70ms, plus the 620ms arrival, plus headroom.
    const t = setTimeout(() => setPhase("done"), 2300);
    return () => clearTimeout(t);
  }, []);

  const onGraphHover = useCallback((key) => setActive(key), []);

  return (
    <section
      id="event"
      className="relative mx-auto max-w-[1600px] px-6 pb-20 pt-16 md:px-12 md:pb-28 md:pt-24"
    >
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-8">
        <div>
          <h1
            className="font-semibold leading-[0.92] tracking-[-0.035em] text-ink"
            style={{ fontSize: "clamp(2.75rem, 8vw, 6rem)" }}
          >
            {identity.name}
          </h1>

          <p className="mt-6 max-w-measure text-lg leading-relaxed text-steel-bright md:text-xl">
            {identity.positioning}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#software" className="control control-primary">
              View the work
            </a>
            <a href="#contact" className="control">
              Get in touch
            </a>
            {identity.cvUrl ? (
              <a href={identity.cvUrl} className="control" download>
                Download CV
              </a>
            ) : null}
          </div>

          <InstrumentRail tracks={TRACK_COUNT} routes={ROUTE_COUNT} />
        </div>

        {/* The event: full fan from tablet up, compact form on phones so the
            signature image survives instead of disappearing. */}
        <div className="hidden md:block">
          <EventDisplay
            active={active}
            activeGroup={activeGroup}
            onHover={onGraphHover}
            phase={phase}
            preset="full"
          />
        </div>
        <div className="-mx-2 md:hidden">
          <EventDisplay
            active={active}
            activeGroup={activeGroup}
            onHover={onGraphHover}
            phase={phase}
            preset="compact"
          />
        </div>
      </div>

      {/* The tracks as real links: this is the keyboard and screen-reader path. */}
      <div className="mt-14 grid gap-8 border-t border-steel-dim pt-10 md:grid-cols-2 md:gap-12">
        {JET_LIST.map((jet) => {
          const color = JET[jet.id];
          return (
            <div key={jet.id}>
              <div className="mb-4 flex items-baseline gap-3">
                <span
                  className="h-2 w-2 shrink-0 rounded-full"
                  style={{ background: color }}
                  aria-hidden="true"
                />
                <p
                  id={`jet-${jet.id}`}
                  className="font-mono text-meas uppercase tracking-[0.22em]"
                  style={{ color }}
                >
                  {jet.label}
                </p>
              </div>
              <p className="mb-5 text-sm text-steel-bright">{jet.summary}</p>

              <ul className="flex flex-wrap gap-2" aria-labelledby={`jet-${jet.id}`}>
                {jet.tracks.map((track) => {
                  const key = `${jet.id}:${track.name}`;
                  const isActive = active === key;
                  const isSibling = !isActive && activeGroup != null && track.to === activeGroup;
                  const dim = active && !isActive && !isSibling;
                  return (
                    <li key={track.name}>
                      <a
                        href={`#${track.to}`}
                        aria-label={`${track.name}, evidenced in ${track.where}`}
                        onMouseEnter={() => setActive(key)}
                        onMouseLeave={() => setActive(null)}
                        onFocus={() => setActive(key)}
                        onBlur={() => setActive(null)}
                        className="block border px-3 py-1.5 font-mono text-meas tracking-[0.06em] transition-all duration-200 ease-expo"
                        style={{
                          borderColor: isActive || isSibling ? color : "var(--steel-dim)",
                          color: isActive || isSibling ? color : "var(--steel-bright)",
                          opacity: dim ? 0.4 : 1,
                        }}
                      >
                        {track.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
