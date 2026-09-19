import { useCallback, useEffect, useRef, useState } from "react";

/*
  Media carousel for a project's screenshots and its recording.

  Stacking four tall screenshots made the page enormous, especially on a phone.
  One frame at a time cuts that to a quarter without hiding anything.

  Built on native scroll-snap, so the thing works before any JavaScript runs:
  the track is a real horizontal scroller, so swipe on touch and shift-scroll on
  a trackpad already do the right thing. The buttons, the counter and the tick
  indicators are the enhancement on top, not the mechanism.

  The frame is locked to the tallest slide's aspect ratio so advancing never
  jumps the page, and every slide is `object-contain` so nothing is cropped.
*/

export default function Carousel({ label, slides }) {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);
  const count = slides.length;

  // Tallest slide decides the frame, so the height never changes mid-carousel.
  const ratio = slides.reduce((r, s) => Math.max(r, s.h / s.w), 0) || 0.5;

  const goTo = useCallback((i) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(count - 1, i));
    track.scrollTo({
      left: clamped * track.clientWidth,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  }, [count]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const w = track.clientWidth || 1;
        setIndex(Math.round(track.scrollLeft / w));
      });
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      track.removeEventListener("scroll", onScroll);
    };
  }, []);

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      goTo(index + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      goTo(index - 1);
    }
  };

  if (count === 0) return null;

  return (
    <section
      aria-roledescription="carousel"
      aria-label={label}
      className="relative"
      onKeyDown={onKeyDown}
    >
      <div
        ref={trackRef}
        tabIndex={0}
        className="flex snap-x snap-mandatory overflow-x-auto overflow-y-hidden border border-steel-dim [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{ aspectRatio: `1 / ${ratio}` }}
      >
        {slides.map((s, i) => (
          <div
            key={s.key}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${count}: ${s.caption}`}
            className="flex h-full w-full shrink-0 snap-start items-center justify-center bg-vacuum-sunk"
          >
            {s.render(i === index)}
          </div>
        ))}
      </div>

      {count > 1 ? (
        <div className="mt-3 flex items-center gap-3">
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            disabled={index === 0}
            aria-label="Previous"
            className="control px-2.5 py-1.5 disabled:cursor-not-allowed disabled:opacity-35"
          >
            <svg width="7" height="11" viewBox="0 0 7 11" aria-hidden="true" fill="none">
              <path d="M6 1 1.5 5.5 6 10" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            disabled={index === count - 1}
            aria-label="Next"
            className="control px-2.5 py-1.5 disabled:cursor-not-allowed disabled:opacity-35"
          >
            <svg width="7" height="11" viewBox="0 0 7 11" aria-hidden="true" fill="none">
              <path d="m1 1 4.5 4.5L1 10" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </button>

          {/* Ticks, in the instrument's own vocabulary rather than dots. */}
          <ol className="flex flex-1 items-center gap-1.5" aria-hidden="true">
            {slides.map((s, i) => (
              <li
                key={s.key}
                className="h-px flex-1 transition-colors duration-200 ease-expo"
                style={{
                  background: i === index ? "var(--software)" : "var(--steel-dim)",
                  height: i === index ? 2 : 1,
                }}
              />
            ))}
          </ol>

          <p className="font-mono text-meas tabular-nums text-steel" aria-live="polite">
            {index + 1} / {count}
          </p>
        </div>
      ) : null}

      <p className="mt-2 text-sm leading-relaxed text-steel">{slides[index]?.caption}</p>
    </section>
  );
}
