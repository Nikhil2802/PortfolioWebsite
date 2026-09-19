import Image from "next/image";
import Carousel from "./Carousel";
import VideoPlayer from "./VideoPlayer";
import { projects } from "./data";
import { JET, PALETTE } from "./palette";

/*
  The software jet at full depth. Each project gets the room its evidence
  deserves rather than an identical card: ScentScape leads with real product
  screenshots pulled from its own recording, and Locasa is labelled as work in
  progress instead of dressed up as shipped.
*/

const STATUS = {
  offline: { text: "Offline", color: PALETTE.steelBright },
  shipped: { text: "Shipped", color: JET.software },
  building: { text: "In progress", color: JET.infrastructure },
};

function StatusTag({ status }) {
  const s = STATUS[status];
  if (!s) return null;
  return (
    <span
      className="inline-flex items-center gap-2 border px-2.5 py-1 font-mono text-meas uppercase tracking-[0.14em]"
      style={{ borderColor: `${s.color}55`, color: s.color }}
    >
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: s.color }} aria-hidden="true" />
      {s.text}
    </span>
  );
}

/*
  A project's media as carousel slides: every screenshot, then the recording
  last. The recording only mounts its <video> when the visitor asks for it, and
  the carousel passes `isCurrent` so an off-screen slide never starts playing.
*/
function mediaFor(p) {
  const slides = p.shots.map((s) => ({
    key: s.src,
    caption: s.alt,
    w: s.w,
    h: s.h,
    render: () => (
      <Image
        src={s.src}
        alt={s.alt}
        width={s.w}
        height={s.h}
        sizes="(min-width: 1024px) 60vw, 100vw"
        className="h-full w-full object-contain"
      />
    ),
  }));

  if (p.video) {
    slides.push({
      key: p.video.src,
      caption: `${p.title} walkthrough recording`,
      w: p.video.pw,
      h: p.video.ph,
      render: (isCurrent) => (
        <VideoPlayer
          src={p.video.src}
          poster={p.video.poster}
          posterW={p.video.pw}
          posterH={p.video.ph}
          label={`${p.title} walkthrough recording`}
          active={isCurrent}
        />
      ),
    });
  }

  return slides;
}

export default function Software() {
  return (
    <section
      id="software"
      className="mx-auto max-w-[1600px] scroll-mt-20 px-6 py-20 md:px-12 md:py-28"
    >
      <h2 className="text-3xl font-semibold leading-tight tracking-[-0.02em] text-software md:text-4xl">
        Software
      </h2>

      <div className="mt-12 space-y-20 md:mt-16 md:space-y-28">
        {projects.map((p) => (
          <article
            key={p.id}
            id={`project-${p.id}`}
            className="evidence grid scroll-mt-24 gap-8 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-14"
          >
            <div className="lg:sticky lg:top-24 lg:self-start">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-2xl font-semibold tracking-[-0.015em] text-ink md:text-3xl">
                  {p.title}
                </h3>
                <StatusTag status={p.status} />
              </div>

              <p className="mt-2 font-mono text-meas text-steel">{p.year}</p>

              <p className="mt-5 max-w-measure text-base leading-relaxed text-steel-bright">
                {p.summary}
              </p>

              {p.detail.map((d) => (
                <p key={d.slice(0, 20)} className="mt-4 max-w-measure text-base leading-relaxed text-steel-bright">
                  {d}
                </p>
              ))}

              {p.statusNote ? (
                <p className="mt-5 max-w-measure border-l border-steel-dim pl-4 text-sm leading-relaxed text-steel">
                  {p.statusNote}
                </p>
              ) : null}

              {p.stack.length > 0 ? (
                <ul className="mt-6 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <li
                      key={t}
                      className="border border-steel-dim px-2.5 py-1 font-mono text-meas tracking-[0.06em] text-steel-bright"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              ) : null}

              {p.repo || p.live ? (
                <div className="mt-7 flex flex-wrap gap-3">
                  {p.repo ? (
                    <a href={p.repo} target="_blank" rel="noopener noreferrer" className="control">
                      Source
                    </a>
                  ) : null}
                  {p.live ? (
                    <a href={p.live} target="_blank" rel="noopener noreferrer" className="control control-primary">
                      Live site
                    </a>
                  ) : null}
                </div>
              ) : null}
            </div>

            <div>
              {mediaFor(p).length > 0 ? (
                <Carousel label={`${p.title} screenshots and recording`} slides={mediaFor(p)} />
              ) : (
                <div className="flex min-h-[220px] items-center justify-center border border-dashed border-steel-dim px-6 py-10">
                  <p className="max-w-sm text-center text-sm leading-relaxed text-steel">
                    Nothing to show yet. This one is still being built.
                  </p>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
