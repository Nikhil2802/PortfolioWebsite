import dynamic from "next/dynamic";
import { JET } from "./palette";
import { useEffect, useState } from "react";

/*
  The custom cursor stays: it is a pinned constraint.

  It is loaded only when it can do no harm, which is the compromise that lets
  it keep its place. It never mounts on touch or coarse pointers, never under
  prefers-reduced-motion, and never below the desktop breakpoint, and it is
  code-split so the bundle does not carry it for the visitors who never see it.
  Focus rings are drawn independently in globals.css, so keyboard users keep a
  visible position indicator regardless.
*/

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), { ssr: false });

/* react-animated-cursor wants an "r, g, b" string, so the token is unpacked here
   rather than duplicated as a literal. */
const SOFTWARE_RGB = [1, 3, 5].map((i) => parseInt(JET.software.slice(i, i + 2), 16));

export default function Cursor() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const ok = window.matchMedia(
      "(min-width: 1024px) and (pointer: fine) and (prefers-reduced-motion: no-preference)"
    );
    setEnabled(ok.matches);
    const onChange = (e) => setEnabled(e.matches);
    ok.addEventListener("change", onChange);
    return () => ok.removeEventListener("change", onChange);
  }, []);

  if (!enabled) return null;

  return (
    <AnimatedCursor
      innerSize={7}
      outerSize={34}
      outerScale={1.9}
      innerScale={0.9}
      outerAlpha={0}
      color={SOFTWARE_RGB.join(", ")}
      outerStyle={{ border: `1px solid rgba(${SOFTWARE_RGB.join(",")},0.55)` }}
      clickables={["a", "button", "input", "textarea", "label", "[role='button']"]}
    />
  );
}
