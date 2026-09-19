import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { JET, PALETTE } from "./palette";

/*
  The instrument rail: run metadata in mono, with the live readout as its last
  row. It sits in the flow at the lower left of the first viewport rather than
  floating over the page, so it is present the moment the page loads and never
  covers a control.

  It never shows invented values. The metadata describes the display itself,
  and the readout only ever repeats a label that exists in data.js.
*/

const ReadoutContext = createContext({ reading: null, report: () => {}, clear: () => {} });

export function ReadoutProvider({ children }) {
  const [reading, setReading] = useState(null);
  const report = useCallback((next) => setReading(next), []);
  const clear = useCallback(() => setReading(null), []);
  const value = useMemo(() => ({ reading, report, clear }), [reading, report, clear]);
  return <ReadoutContext.Provider value={value}>{children}</ReadoutContext.Provider>;
}

export function useReadout() {
  return useContext(ReadoutContext);
}

const JET_COLOR = {
  infrastructure: JET.infrastructure,
  software: JET.software,
};

function Row({ label, children }) {
  return (
    <div className="grid grid-cols-[5.5rem_minmax(0,1fr)] items-baseline gap-3 border-t border-steel-dim py-2">
      <dt className="legend text-steel">{label}</dt>
      <dd className="font-mono text-meas tracking-[0.06em] text-steel-bright">{children}</dd>
    </div>
  );
}

export function InstrumentRail({ tracks, routes }) {
  const { reading } = useReadout();

  return (
    <dl className="mt-10 max-w-sm" aria-live="polite">
      <Row label="Tracks">{tracks}</Row>
      <Row label="Routes">{routes}</Row>
      <div className="grid grid-cols-[5.5rem_minmax(0,1fr)] items-baseline gap-3 border-y border-steel-dim py-2">
        <dt className="legend text-steel">Readout</dt>
        <dd
          className="truncate font-mono text-meas tracking-[0.06em] transition-colors duration-200 ease-expo"
          style={{ color: reading ? JET_COLOR[reading.jet] ?? PALETTE.ink : PALETTE.steel }}
        >
          {reading ? (
            <>
              {reading.label}
              <span className="text-steel"> → </span>
              <span className="text-steel-bright">{reading.meta}</span>
            </>
          ) : (
            "Hover a track to find its proof"
          )}
        </dd>
      </div>
    </dl>
  );
}
