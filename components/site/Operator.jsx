import Image from "next/image";
import { identity } from "./data";

/*
  Who the event belongs to. Deliberately compact: a face, three paragraphs in
  a real reading measure, and the two external links. No section screen of its
  own, because a recruiter does not need one.
*/

export default function Operator() {
  return (
    <section className="mx-auto max-w-[1600px] px-6 py-20 md:px-12 md:py-24">
      <div className="grid gap-10 md:grid-cols-[220px_minmax(0,1fr)] md:gap-14 lg:grid-cols-[260px_minmax(0,1fr)]">
        <div>
          <Image
            src="/shots/nikhil.webp"
            alt={identity.name}
            width={640}
            height={799}
            sizes="(min-width: 1024px) 260px, (min-width: 768px) 220px, 220px"
            loading="lazy"
            className="w-full max-w-[220px] border border-steel-dim object-cover md:max-w-none"
          />
          <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
            {identity.links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-meas uppercase tracking-[0.14em] text-steel-bright underline decoration-steel-dim underline-offset-4 transition-colors duration-200 ease-expo hover:text-software hover:decoration-software"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="max-w-measure space-y-5">
          {identity.bio.map((para) => (
            <p key={para.slice(0, 24)} className="text-base leading-relaxed text-steel-bright md:text-lg">
              {para}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
