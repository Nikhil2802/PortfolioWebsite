/*
  Single source of truth for page content.
  Every value here is real. Nothing on this page may be invented: no metrics,
  no live URLs that do not resolve, no placeholder rows.
*/

export const identity = {
  name: "Nikhil Patel",
  positioning:
    "Systems Engineer at Fujitsu building secure infrastructure for the UK Ministry of Defence, and a full-stack engineer who designs and ships his own products.",
  bio: [
    "I build and run secure IT infrastructure for the UK Ministry of Defence at Fujitsu, supporting Royal Navy and Royal Fleet Auxiliary operations. That means virtualised data centres, Windows Server estates, Cisco networks and PowerShell automation, all under MOD security policy.",
    "Away from the estate I design and build full-stack products end to end, from the data model and the API to the interface and the deployment. ScentScape was a fragrance platform with a 23,000-entry catalogue, role-based accounts and a recommendation model. Locasa is what I am building now.",
    "I graduated from Liverpool John Moores University with First Class Honours at 83%. I am most interested in the overlap between the two halves: systems that have to stay up, and software that has to be worth using.",
  ],
  // No CV file exists yet. Drop a PDF at public/nikhil-patel-cv.pdf and set
  // this to that path to render the CV control.
  cvUrl: null,
  // No email address exists anywhere in the project. The contact form is the
  // only channel until a real address is supplied here.
  email: null,
  links: [
    { label: "GitHub", href: "https://github.com/Nikhil2802" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/nikhil-patel-b83795199/" },
  ],
  formspree: "https://formspree.io/f/mldgpwqq",
};

/*
  The two jets. Tracks are labelled with tools that appear in the real role
  description or the real project stacks. `core: true` draws a heavier line,
  which is an editorial weighting, not a measurement.
*/
export const jets = {
  infrastructure: {
    id: "infrastructure",
    label: "Infrastructure",
    summary: "Fujitsu · UK Ministry of Defence · Nov 2023 to present",
    section: "infrastructure",
    tracks: [
      { name: "VMware ESXi", core: true, to: "duty-deployment", where: "Infrastructure deployment and management" },
      { name: "vCenter", core: true, to: "duty-deployment", where: "Infrastructure deployment and management" },
      { name: "NSX", core: false, to: "duty-deployment", where: "Infrastructure deployment and management" },
      { name: "Horizon VDI", core: false, to: "duty-deployment", where: "Infrastructure deployment and management" },
      { name: "Active Directory", core: true, to: "duty-microsoft", where: "Microsoft systems administration" },
      { name: "Cisco", core: true, to: "duty-network", where: "Network engineering" },
      { name: "PowerShell", core: true, to: "duty-automation", where: "Automation and scripting" },
      { name: "Veeam", core: false, to: "duty-monitoring", where: "Monitoring and backup" },
    ],
  },
  software: {
    id: "software",
    label: "Software",
    summary: "Self-directed products · 2022 to present",
    section: "software",
    tracks: [
      { name: "Next.js", core: true, to: "project-scentscape", where: "ScentScape" },
      { name: "React", core: true, to: "project-scentscape", where: "ScentScape" },
      { name: "Node.js", core: true, to: "project-scentscape", where: "ScentScape" },
      { name: "PostgreSQL", core: true, to: "project-scentscape", where: "ScentScape" },
      { name: "Docker", core: false, to: "project-scentscape", where: "ScentScape" },
      { name: "AWS", core: false, to: "project-scentscape", where: "ScentScape" },
      { name: "Python", core: true, to: "project-facerec", where: "Facial Recognition System" },
      { name: "TensorFlow", core: false, to: "project-facerec", where: "Facial Recognition System" },
    ],
  },
};

export const role = {
  title: "Systems Engineer",
  company: "Fujitsu",
  client: "UK Ministry of Defence",
  start: "Nov 2023",
  end: "Present",
  summary:
    "I am responsible for the build, deployment and management of secure IT infrastructure for the UK Ministry of Defence, supporting Royal Navy and Royal Fleet Auxiliary operations. The work is configuring, maintaining and troubleshooting virtualised environments, network infrastructure and Microsoft systems, while staying compliant with MOD security policy.",
  responsibilities: [
    {
      id: "duty-deployment",
      label: "Infrastructure deployment and management",
      body: "Build, configure and manage virtualised data centres using VMware ESXi, vCenter, NSX and Horizon (VDI).",
    },
    {
      id: "duty-microsoft",
      label: "Microsoft systems administration",
      body: "Deploy and maintain Windows Server Active Directory, Group Policy, DNS, PKI, Exchange, SQL, SharePoint and WSUS.",
    },
    {
      id: "duty-network",
      label: "Network engineering",
      body: "Configure, support and troubleshoot Cisco switches, routers and Firepower appliances.",
    },
    {
      id: "duty-automation",
      label: "Automation and scripting",
      body: "Use PowerShell to automate system administration tasks and configuration management.",
    },
    {
      id: "duty-security",
      label: "Security and compliance",
      body: "Implement MOD security policies, manage firmware updates across servers, switches and UPS, and ensure compliance with government security standards.",
    },
    {
      id: "duty-monitoring",
      label: "Monitoring and backup",
      body: "Manage and configure SolarWinds for system and network monitoring, Veeam for backup and disaster recovery, and Trend Micro for endpoint protection.",
    },
    {
      id: "duty-config",
      label: "Configuration management and deployment",
      body: "Perform bulk user provisioning, data migration, system configuration and security hardening.",
    },
    {
      id: "duty-hardware",
      label: "Hardware and peripheral support",
      body: "Configure and manage thin clients, Teradici PCoIP, Amulets, printers, scanners and other peripherals within MOD environments.",
    },
    {
      id: "duty-testing",
      label: "Testing and validation",
      body: "Conduct system validation, security hardening, performance assessments and compliance checks to confirm operational readiness.",
    },
  ],
};

export const projects = [
  {
    id: "scentscape",
    title: "ScentScape",
    status: "offline",
    statusNote: "Taken offline to save hosting costs. The recording below is the walkthrough.",
    year: "2024",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Docker", "AWS"],
    summary:
      "A full-stack fragrance discovery platform: a catalogue of 23,000+ fragrances with search and filtering, user reviews and ratings, role-based accounts, and machine-learning scent recommendations.",
    detail: [
      "Fragrance pages carry main accords, longevity and sillage as community-rated scores, so a visitor sees how a scent actually behaves rather than only how it is marketed.",
      "The catalogue supports filtered library views and a guided recommendation flow for people who do not yet know what they are looking for.",
    ],
    shots: [
      { src: "/shots/scentscape-detail.webp", alt: "A ScentScape fragrance page showing main accords, longevity and sillage ratings", w: 1280, h: 634 },
      { src: "/shots/scentscape-library.webp", alt: "The ScentScape library view with filters applied to the fragrance catalogue", w: 1280, h: 634 },
      { src: "/shots/scentscape-home.webp", alt: "The ScentScape home page explaining how to explore the catalogue", w: 1280, h: 634 },
    ],
    video: { src: "/ScentScape.mp4", poster: "/shots/poster-scentscape.webp", pw: 960, ph: 476 },
    repo: "https://github.com/Nikhil2802/ScentScape",
    live: null,
  },
  {
    id: "facerec",
    title: "Facial Recognition System",
    status: "shipped",
    statusNote: null,
    year: "2023",
    stack: ["Python", "TensorFlow", "Keras", "OpenCV"],
    summary:
      "A facial recognition system using deep learning to identify and verify individuals, with enrolment, training and live camera recognition in one desktop application.",
    detail: [
      "The application handles the whole loop: enrol a new face from the camera, train the model on the stored set, then run live recognition against it.",
      "Access to the stored face data sits behind an authentication step.",
    ],
    shots: [
      { src: "/shots/facerec-app.webp", alt: "The Face Recognition System application window with live stream, enrolment, training and review controls", w: 810, h: 598 },
    ],
    video: { src: "/FRdemo.mp4", poster: "/shots/poster-facerec.webp", pw: 810, ph: 598 },
    repo: "https://github.com/Nikhil2802/FacialRecognitionProject",
    live: null,
  },
  {
    id: "locasa",
    title: "Locasa",
    status: "building",
    statusNote: "In progress. No public build yet.",
    year: "2026",
    stack: [],
    summary:
      "Locasa helps buyers research an area and record a property viewing. Five official area signals sit alongside a Property Score weighted by the buyer's Blueprint.",
    detail: [],
    shots: [],
    video: null,
    repo: null,
    live: null,
  },
];

/* Real module grades, drawn as energy bars in the Education section. */
export const degree = {
  award: "BSc (Hons) Computer Science",
  institution: "Liverpool John Moores University",
  start: "Sept 2020",
  end: "July 2023",
  classification: "First Class Honours",
  overall: 83,
  modules: [
    { name: "Computer Science Applications (HOPE)", grade: 95 },
    { name: "Parallel Algorithms", grade: 92 },
    { name: "Graphics and Data Visualisation", grade: 91 },
    { name: "Intro to Programming", grade: 88 },
    { name: "Computer Systems", grade: 88 },
    { name: "Agile Group Project Workshop", grade: 87 },
    { name: "Final Year Project", grade: 86 },
    { name: "Knowledge-Based Systems", grade: 84 },
    { name: "Internet and Web Development", grade: 82 },
    { name: "Data Modelling", grade: 80 },
    { name: "Discrete Mathematics", grade: 76 },
    { name: "Object Oriented Systems Development", grade: 73 },
    { name: "Algorithm Design", grade: 73 },
    { name: "Virtualised Computing Architectures", grade: 71 },
  ],
};

export const sixthForm = {
  award: "A Levels",
  institution: "Bolton Sixth Form",
  start: "Sept 2018",
  end: "July 2020",
  subjects: ["Computer Science", "Mathematics", "IT"],
};

/*
  `short` is the phone label. Martian Mono is a wide face, so the full words
  cannot hold one row at 390px, and wayfinding matters more there than the
  world's vocabulary does. The accessible name is always the full label.
*/
export const sections = [
  { id: "event", label: "Event", short: "Top" },
  { id: "infrastructure", label: "Infrastructure", short: "Infra" },
  { id: "software", label: "Software", short: "Software" },
  { id: "education", label: "Education", short: "Degree" },
  { id: "contact", label: "Contact", short: "Contact" },
];
