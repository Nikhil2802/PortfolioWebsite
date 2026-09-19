import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/*
  Click to load. The source files are large screen recordings, so nothing is
  fetched until a visitor actually asks for one: the poster is a 12KB still and
  the <video> element is only mounted on activation. preload="none" keeps even
  the metadata request off the initial load.
*/

export default function VideoPlayer({ src, poster, posterW, posterH, label, active = true }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  // Scrolling a playing recording out of the carousel should stop the sound.
  useEffect(() => {
    if (!active && videoRef.current) videoRef.current.pause();
  }, [active]);

  if (!playing) {
    return (
      <button
        type="button"
        onClick={() => setPlaying(true)}
        className="group relative block h-full w-full overflow-hidden transition-colors duration-200 ease-expo"
      >
        <Image
          src={poster}
          alt=""
          width={posterW}
          height={posterH}
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="h-full w-full object-contain opacity-70 transition-opacity duration-300 ease-expo group-hover:opacity-95"
        />
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="flex items-center gap-3 border border-software bg-vacuum/85 px-5 py-3 font-mono text-meas uppercase tracking-[0.16em] text-software">
            <svg width="12" height="14" viewBox="0 0 12 14" aria-hidden="true" fill="currentColor">
              <path d="M0 0v14l12-7z" />
            </svg>
            Play walkthrough
          </span>
        </span>
        <span className="sr-only">{label}</span>
      </button>
    );
  }

  return (
    // eslint-disable-next-line jsx-a11y/media-has-caption
    <video
      ref={videoRef}
      className="h-full w-full object-contain"
      src={src}
      poster={poster}
      controls
      autoPlay
      preload="none"
      playsInline
      aria-label={label}
    >
      Your browser cannot play this recording.{" "}
      <a href={src} className="underline">
        Download it instead
      </a>
      .
    </video>
  );
}
