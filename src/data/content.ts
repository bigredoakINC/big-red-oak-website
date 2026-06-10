/*
  Central content layer for the Big Red Oak site (v1).

  This is intentionally a single typed source of truth that mirrors the planned
  Sanity schemas (siteSettings, page sections, capabilities, tiers, faqs, etc.).
  When the Sanity project exists, each export here maps 1:1 to a GROQ query — the
  components don't change, only the data source.

  COPY NOTE: text below is now VOICE-ALIGNED to Brand Voice & Style Guidelines v0.1
  (self-generated draft, 2026-06-10) — signature lines and tone are drawn from the live
  site. It is still a working draft: replace verbatim with the approved 2026 copy deck
  (requirement BR-05) before launch, and re-confirm voice with Lee.
*/

export const site = {
  name: 'Big Red Oak',
  tagline: 'Strategy meets execution for the energy transition',
  email: 'connect@bigredoak.com',
  bookingUrl: 'https://roam.example/big-red-oak/consultation', // TODO: real Roam booking link (IR-01)
  linkedin: 'https://www.linkedin.com/company/big-red-oak/',
  ctaLabel: 'Book a Free 30-Minute Consultation',
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Our Work', href: '/our-work' },
  { label: 'Clean Currents', href: '/clean-currents' },
  { label: 'Contact', href: '/contact' },
];

export const memberships = ['CNA', 'CNS', 'ANS', 'OCNI', 'CNIC', 'TRBOT'];

// Real clients confirmed on the live site (brand guidelines v0.1). Logo assets TBD from BRO.
export const socialProofLogos = [
  'Westinghouse', 'Bruce Power', 'LifeLabs', 'Conexus', 'CCRM', 'OPG',
];

// ---------------------------------------------------------------- HOME
export const home = {
  hero: {
    eyebrow: 'We speak energy',
    title: 'You power the future. We power your story.',
    sub: 'Big Red Oak is Canada’s clean energy communications specialist — strategists, writers, and media pros who already speak your sector. From nuclear to wind to the grid that ties it together, we turn complex energy work into clear narratives that move regulators, communities, and the people you need on side.',
  },
  stats: [
    { value: '15+', label: 'Years in the sector' },
    { value: '200+', label: 'Projects delivered' },
    { value: '6', label: 'Core capabilities' },
  ],
  problem: {
    title: 'Complexity becomes connection',
    body: 'Energy and nuclear organizations do extraordinary, complicated work — and too often it gets lost in jargon or noise. We name the technical reality accurately, then make it land with the audiences that decide your future: regulators, communities, employees, and investors.',
  },
  why: [
    { title: 'We speak energy', body: 'Sector specialism, not generalism. No learning curve — we know transmission from distribution, and why a refurbishment is politically sensitive.' },
    { title: 'Strategy meets execution', body: 'In-house strategists and media pros under one roof. No hand-offs to a separate production shop.' },
    { title: 'We solve problems', body: 'The bottom line? We solve problems for our clients. Outcomes over aesthetics, every time.' },
    { title: 'Built for one industry', body: 'We built Big Red Oak for energy alone — so your message starts with fluency, not a brief.' },
  ],
  serve: [
    { tier: 'Enterprise', body: 'Major operators and large organizations who arrive via referral and need the website to validate reputation.' },
    { tier: 'Mid-market', body: 'Industry associations and government bodies validating credibility before they commit.' },
    { tier: 'Retainer', body: 'Smaller companies advancing the energy transition who discover us and need to build trust independently.' },
    { tier: 'Suppliers', body: 'Vendors and service providers serving the clean energy supply chain across North America and beyond.' },
  ],
  faqs: [
    { q: 'What sectors do you work in?', a: 'Wind, solar, battery storage, hydrogen, nuclear power, transmission, distribution, and the suppliers servicing them.' },
    { q: 'Where do you operate?', a: 'Canada, North America, and internationally.' },
    { q: 'How do we start?', a: 'Book a free 30-minute consultation. We will tell you honestly whether we are the right fit.' },
    { q: 'Do you only do nuclear?', a: 'No — nuclear is a strength, but we work across the full clean energy and energy transition landscape.' },
  ],
  testimonial: {
    quote: 'Big Red Oak understood our world from day one. They made a genuinely complex story land with the audiences that mattered.',
    name: 'Conexus',
    role: 'Client (placeholder quote — to confirm)',
  },
};

// ---------------------------------------------------------------- ABOUT
export const about = {
  story: {
    title: 'Our story',
    body: 'We built Big Red Oak for one industry: energy. That focus means no learning curve — we understand refurbishments, interconnection queues, and social licence the way you do. Our in-house team runs strategy and execution under one roof, so the insight that shapes your message is the same team that brings it to life. The bottom line? We solve problems for our clients.',
  },
  name: {
    title: "What's in a name",
    body: 'The red oak is resilient, deep-rooted, and built to last — a fitting symbol for the long-horizon work of the energy transition.',
  },
  team: [
    { name: 'Team member', role: 'Founder & Principal', bio: 'Bio to be provided by BRO.' },
    { name: 'Team member', role: 'Strategy Lead', bio: 'Bio to be provided by BRO.' },
    { name: 'Team member', role: 'Creative Lead', bio: 'Bio to be provided by BRO.' },
  ],
  partners: ['Partner to be confirmed', 'Partner to be confirmed', 'Partner to be confirmed'],
  advisory: [
    { name: 'Advisory member', role: 'Advisor', bio: 'Details to be provided by BRO.' },
    { name: 'Advisory member', role: 'Advisor', bio: 'Details to be provided by BRO.' },
  ],
};

// ---------------------------------------------------------------- OUR WORK
export const work = {
  intro: {
    title: 'From insight to impact',
    body: 'Strategy-led communications across the energy transition — run through our four-phase process: Discovery, Definition, Design, Delivery. Six core capabilities, applied to the sector’s hardest stories.',
  },
  capabilities: [
    { title: 'Stakeholder Engagement', body: 'Building trust with regulators, communities, and partners.' },
    { title: 'Brand Strategy', body: 'Positioning that reflects strategic depth, not generic agency gloss.' },
    { title: 'Campaigns', body: 'Integrated campaigns that move audiences and outcomes.' },
    { title: 'Change Communication', body: 'Guiding organizations through transformation with clarity.' },
    { title: 'Recruitment', body: 'Employer storytelling that attracts sector talent.' },
    { title: 'Content & Thought Leadership', body: 'Authority-building content grounded in real expertise.' },
  ],
};

// ---------------------------------------------------------------- CLEAN CURRENTS
export const cleanCurrents = {
  intro: {
    title: 'Clean Currents',
    body: 'Thought leadership, perspectives, and the Clean Currents podcast — for people building the energy transition.',
  },
  // Podcast identifiers (embed-only, no API key — IR-03). Replace with real show IDs.
  spotifyShowUrl: 'https://open.spotify.com/embed/show/PLACEHOLDER_SHOW_ID',
  applePodcastUrl: 'https://embed.podcasts.apple.com/us/podcast/PLACEHOLDER',
};

// ---------------------------------------------------------------- CONTACT
export const contact = {
  intro: {
    title: 'Let’s talk',
    body: 'Tell us about your project, or book a free 30-minute consultation. We respond quickly.',
  },
};
