import Head from "next/head";
import Calorimeter from "@/components/site/Calorimeter";
import Console from "@/components/site/Console";
import Cursor from "@/components/site/Cursor";
import EventHeader from "@/components/site/EventHeader";
import Infrastructure from "@/components/site/Infrastructure";
import Operator from "@/components/site/Operator";
import SiteNav from "@/components/site/SiteNav";
import Software from "@/components/site/Software";
import VacuumField from "@/components/site/VacuumField";
import { ReadoutProvider } from "@/components/site/Readout";
import { identity } from "@/components/site/data";

const DESCRIPTION =
  "Nikhil Patel is a Systems Engineer at Fujitsu building secure infrastructure for the UK Ministry of Defence, and a full-stack engineer who designs and ships his own products.";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nikhil Patel — Systems and Software Engineer</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#07090D" />

        {/* Link previews: a recruiter forwarding this should not send a blank card. */}
        <meta property="og:type" content="profile" />
        <meta property="og:title" content="Nikhil Patel — Systems and Software Engineer" />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:image" content="/og.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nikhil Patel — Systems and Software Engineer" />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content="/og.jpg" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <VacuumField />
      <Cursor />

      <ReadoutProvider>
        <SiteNav />

        <main>
          <EventHeader />
          <Operator />
          <Infrastructure />
          <Software />
          <Calorimeter />
          <Console />
        </main>

        <footer className="border-t border-steel-dim">
          <div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-4 px-6 py-8 md:px-12 md:pb-20">
            <p className="font-mono text-meas uppercase tracking-[0.14em] text-steel">
              {identity.name} · Built with Next.js
            </p>
            <ul className="flex gap-6">
              {identity.links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-meas uppercase tracking-[0.14em] text-steel-bright transition-colors duration-200 ease-expo hover:text-software"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </ReadoutProvider>
    </>
  );
}
