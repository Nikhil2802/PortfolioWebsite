# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Recruiters, in-house talent partners, and engineering hiring managers screening Nikhil Patel for a role. They arrive from a CV, a LinkedIn profile, or a job application, and they skim. Two distinct readers matter equally:

- **Technical hiring managers and engineering leads**, who want evidence he can build and operate real systems, and who read specifics (tooling, scale, architecture) as the signal.
- **Non-technical recruiters and HR screeners**, who need to file him against a job title within seconds and find a way to contact him.

Desktop is the common case, mobile is frequent, and neither is a fallback.

## Product Purpose

A personal portfolio site whose job is to get Nikhil interviews. Success is a reader who, within roughly thirty seconds, can say what he does, believes he has actually done it, and knows how to reach him. A visit that ends without a contact attempt or a saved link has failed, however good the site looked.

## Positioning

Two tracks carried at equal weight, which is the thing most candidates cannot claim:

1. **Operating secure infrastructure in production, in UK defence.** Systems Engineer at Fujitsu since Nov 2023, building and managing virtualised data centres and Microsoft estates for the UK Ministry of Defence, supporting Royal Navy and Royal Fleet Auxiliary operations, under MOD security policy.
2. **Designing and shipping full-stack products.** Self-directed web applications with real scope: catalogues, authentication, role-based access, recommendation models, containerisation, cloud deployment.

Neither track is subordinate to the other and neither is a hobby. A candidate with only the first cannot show shipped product; a candidate with only the second has never been accountable for a production estate under compliance.

## Operating Context

The site is read in a hiring funnel, usually alongside a CV and a LinkedIn profile, often in a tab opened for under a minute between other candidates. Readers are comparing, not exploring. Some will open it on a phone from an email. Some will forward it to a colleague, so the link preview matters. None of them will hunt for anything.

## Capabilities and Constraints

- Single-page Next.js 14 site, pages router, deployed on Vercel with Vercel Analytics and Speed Insights active.
- The contact form posts to a live Formspree endpoint (`formspree.io/f/mldgpwqq`). This works and must keep working.
- **Binding user constraint:** the custom cursor (`react-animated-cursor`) stays.
- The vertical timeline library may be replaced, but the change must be easy to revert; the user likes the idea of a timeline.
- Build environment has no `ffmpeg`, so video transcoding cannot be done here. ImageMagick and Python are available, so image compression can.
- Undecided: whether a CV PDF will be supplied. Until one exists, the site must not link to one.

## Brand Commitments

- Name: Nikhil Patel. Job title in prose is "Systems Engineer" (plural "Systems"), not "System Engineer".
- Voice: plain, specific, and first-person. Concrete nouns over adjectives. No hype, no third-person CV register.

## Evidence on Hand

Real, verified material:

- **Fujitsu role**, Nov 2023 to present. Nine specific responsibility areas recorded in `components/Constants.jsx`: VMware ESXi / vCenter / NSX / Horizon, Windows Server Active Directory / Group Policy / DNS / PKI / Exchange / SQL / SharePoint / WSUS, Cisco switching and routing, PowerShell automation, MOD security compliance and firmware management, SolarWinds / Veeam / Trend Micro, bulk provisioning and migration, thin clients and Teradici PCoIP, system validation and compliance checks.
- **BSc (Hons) Computer Science, Liverpool John Moores University**, Sept 2020 to July 2023, First Class at 83%, with fourteen recorded module grades including Final Year Project 86% and Parallel Algorithms 92%.
- **A Levels**, Bolton Sixth Form, 2018 to 2020: Computer Science, Mathematics, IT.
- **ScentScape**: full-stack fragrance discovery platform, catalogue of 23,000+ fragrances, search and filtering, reviews and ratings, role-based accounts, ML-driven recommendations. GitHub repo is public. A 25MB screen recording exists at `public/ScentScape.mp4`. **It has been taken offline to save hosting costs, so there is no live URL and the site must not imply one.**
- **Facial Recognition System**: deep-learning identification and verification. GitHub repo is public. A 22MB recording exists at `public/FRdemo.mp4`, plus a still at `public/FR-3.webp`.
- **Locasa**: in progress, not deployed. Helps buyers research an area and record a property viewing. Five official area signals sit alongside a Property Score weighted by the buyer's Blueprint. No repo link or screenshots confirmed yet.
- **Photograph** of Nikhil at `public/me.png`. The user does not want to supply a new one.

Absences that must never be invented: no CV PDF, no live product URLs, no testimonials, no named customers, no user counts, no performance benchmarks, no press, no salary or availability details, no security clearance claim.

## Product Principles

1. **Both tracks, equal weight.** Every structural decision must leave a reader able to describe two credible halves, not one with a footnote.
2. **Proof beats claim.** A named tool, a real grade, a working repo, or a recording outranks any adjective. Where proof does not exist, say less.
3. **Nothing unfinished may look finished.** In-progress work is labelled as in progress. A placeholder, a filler tag, or a joke link on this surface costs a real interview, and once did.
4. **Built for a thirty-second skim.** Anything that delays comprehension, including motion, is a cost that must be earned.
5. **Two readers, one page.** A non-technical screener and an engineering lead must both leave satisfied without a separate route.

## Accessibility & Inclusion

WCAG 2.2 AA is the floor, not an aspiration: every control reachable and operable by keyboard, visible focus, 4.5:1 contrast on body text, correct heading order, associated form labels, and `prefers-reduced-motion` honoured throughout. The custom cursor is a decorative addition and may never be the only affordance or suppress a native one. Readers include recruiters using screen readers and assistive technology, and an unreachable detail layer is the same as no detail.
