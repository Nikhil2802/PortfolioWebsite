import { useId } from "react";
import { jets } from "./data";
import { JET, PALETTE } from "./palette";

/*
  One collision, two jets, and every track is a route to its own proof.

  The fan used to be decoration: sixteen names on sixteen rays, encoding
  nothing the chips below did not already say. Now each track points at the
  exact thing on this page that evidences it, hovering one lights every track
  that shares a destination, and clicking goes there. The concentric arcs are
  the detector's own chrome and are no longer labelled as an axis, because
  they never measured anything.

  The graphic stays aria-hidden and its links stay out of the tab order. The
  chips in EventHeader are the same sixteen destinations as real focusable
  links, so keyboard and screen-reader users get one set of tab stops, not two.
*/

const FULL = {
  view: "0 0 1000 660",
  origin: { x: 150, y: 330 },
  radii: [180, 310, 440],
  trackEnd: 470,
  labelR: 490,
  labelSize: 13,
  hit: 14,
};

const COMPACT = {
  view: "0 0 420 400",
  origin: { x: 66, y: 200 },
  radii: [110, 188, 266],
  trackEnd: 290,
  labelR: null,
  labelSize: 0,
  hit: 10,
};

const PRESETS = { full: FULL, compact: COMPACT };

const ARC_SPAN = 44;
const deg = (d) => (d * Math.PI) / 180;

const JETS = [
  { jet: jets.infrastructure, from: -38, to: -10, bend: -3.5, color: JET.infrastructure },
  { jet: jets.software, from: 10, to: 38, bend: 3.5, color: JET.software },
];

function anglesFor(count, from, to) {
  if (count === 1) return [(from + to) / 2];
  const step = (to - from) / (count - 1);
  return Array.from({ length: count }, (_, i) => from + i * step);
}

export default function EventDisplay({
  active,
  activeGroup,
  onHover,
  preset = "full",
  phase = "idle",
  className = "h-auto w-full",
}) {
  const uid = useId().replace(/:/g, "");
  const G = PRESETS[preset] ?? FULL;
  const compact = preset === "compact";
  const O = G.origin;
  const anim = phase === "run";
  const viewW = Number(G.view.split(" ")[2]);

  const polar = (r, a) => ({
    x: O.x + r * Math.cos(deg(a)),
    y: O.y + r * Math.sin(deg(a)),
  });

  /* Charged tracks bend in the field: a quadratic curve, never a straight ray. */
  const trackPath = (a, bend) => {
    const end = polar(G.trackEnd, a);
    const mid = polar(G.trackEnd * 0.55, a + bend);
    return `M ${O.x} ${O.y} Q ${mid.x.toFixed(1)} ${mid.y.toFixed(1)} ${end.x.toFixed(1)} ${end.y.toFixed(1)}`;
  };

  const arcPath = (r) => {
    const a = polar(r, -ARC_SPAN);
    const b = polar(r, ARC_SPAN);
    return `M ${a.x.toFixed(1)} ${a.y.toFixed(1)} A ${r} ${r} 0 0 1 ${b.x.toFixed(1)} ${b.y.toFixed(1)}`;
  };

  return (
    <svg
      viewBox={G.view}
      className={className}
      role="presentation"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <radialGradient id={`${uid}-core`}>
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
          <stop offset="45%" stopColor={JET.software} stopOpacity="0.5" />
          <stop offset="100%" stopColor={JET.software} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Detector chrome: rings, not an axis. */}
      <g>
        {G.radii.map((r) => (
          <path key={r} d={arcPath(r)} fill="none" stroke={PALETTE.arc} strokeWidth="1" />
        ))}
      </g>

      <line
        x1="0"
        y1={O.y}
        x2={viewW}
        y2={O.y}
        stroke={PALETTE.steelDim}
        strokeWidth="1"
        strokeDasharray="2 8"
      />

      {JETS.map(({ jet, from, to, bend, color }) => {
        const angles = anglesFor(jet.tracks.length, from, to);

        return (
          <g key={jet.id}>
            {jet.tracks.map((track, i) => {
              const key = `${jet.id}:${track.name}`;
              const isActive = active === key;
              // Everything proved by the same thing lights together.
              const isSibling = !isActive && activeGroup != null && track.to === activeGroup;
              const dim = active && !isActive && !isSibling;
              const angle = angles[i];
              const end = polar(G.trackEnd, angle);
              const label = G.labelR ? polar(G.labelR, angle) : null;
              const d = trackPath(angle, bend);
              const delay = `${i * 70}ms`;
              const markDelay = `${i * 70 + 620}ms`;

              return (
                <a
                  key={track.name}
                  href={`#${track.to}`}
                  tabIndex={-1}
                  onPointerEnter={() => onHover?.(key)}
                  onPointerLeave={() => onHover?.(null)}
                  style={{
                    opacity: dim ? 0.16 : 1,
                    transition: "opacity 260ms cubic-bezier(0.16,1,0.3,1)",
                    cursor: "pointer",
                  }}
                >
                  {/* A hit target wider than the 1px mark it covers. */}
                  <path
                    d={d}
                    fill="none"
                    stroke="transparent"
                    strokeWidth={G.hit}
                    strokeLinecap="round"
                  />
                  <path
                    className={anim ? "ev-track" : undefined}
                    style={anim ? { animationDelay: delay } : undefined}
                    pathLength="1"
                    d={d}
                    fill="none"
                    stroke={color}
                    strokeWidth={isActive ? 3 : isSibling ? 2.2 : track.core ? 1.9 : 1}
                    strokeOpacity={isActive || isSibling ? 1 : track.core ? 0.85 : 0.5}
                    strokeLinecap="round"
                  />
                  <circle
                    className={anim ? "ev-mark" : undefined}
                    style={anim ? { animationDelay: markDelay } : undefined}
                    cx={end.x}
                    cy={end.y}
                    r={isActive ? 5 : 4}
                    fill={color}
                  />
                  {label ? (
                    <text
                      className={anim ? "ev-mark font-mono" : "font-mono"}
                      style={{
                        ...(anim ? { animationDelay: markDelay } : null),
                        fontSize: G.labelSize,
                        letterSpacing: "0.04em",
                      }}
                      x={label.x}
                      y={label.y}
                      dy="0.34em"
                      textAnchor="start"
                      fill={isActive || isSibling ? color : PALETTE.steelBright}
                    >
                      {track.name}
                    </text>
                  ) : null}
                </a>
              );
            })}
          </g>
        );
      })}

      <circle cx={O.x} cy={O.y} r={compact ? 30 : 52} fill={`url(#${uid}-core)`} />
      <circle cx={O.x} cy={O.y} r={compact ? 3.5 : 5} fill="#FFFFFF" />
    </svg>
  );
}
