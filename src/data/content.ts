/*
  Central content layer for the Big Red Oak site (v1).

  This is intentionally a single typed source of truth that mirrors the planned
  Sanity schemas (siteSettings, page sections, capabilities, tiers, faqs, etc.).
  When the Sanity project exists, each export here maps 1:1 to a GROQ query — the
  components don't change, only the data source.

  COPY NOTE: text below is structural placeholder derived from the PRD outline.
  Replace verbatim with the approved 2026 copy deck (requirement BR-05) before launch.
*/

export const site = {
  name: 'Big Red Oak',
  tagline: 'Strategic communications for the energy transition',
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

export const socialProofLogos = [
  'Bruce Power', 'Westinghouse', 'CNL', 'OPG', 'Conexus', 'ONA',
];

// ---------------------------------------------------------------- HOME
export const home = {
  hero: {
    eyebrow: 'Clean energy · Nuclear · Energy transition',
    title: 'Communications that move the energy transition forward',
    sub: 'Big Red Oak is a specialist marketing and communications agency for the clean energy, nuclear, and energy transition sectors. We turn complex, high-stakes work into clear, credible stories.',
  },
  stats: [
    { value: '15+', label: 'Years in the sector' },
    { value: '200+', label: 'Projects delivered' },
    { value: '6', label: 'Core capabilities' },
  ],
  problem: {
    title: 'The problem we solve',
    body: 'Energy and nuclear organizations do extraordinary, complicated work — and too often it gets lost in jargon, caution, or noise. We make the case clearly, to the people who matter, without losing the technical truth.',
  },
  why: [
    { title: 'Sector fluency', body: 'We speak the language of reactors, grids, storage, and policy — no ramp-up, no hand-holding.' },
    { title: 'Strategic depth', body: 'We lead with strategy, not production. The deliverables follow the thinking.' },
    { title: 'Stakeholder trust', body: 'Two decades of relationships across operators, regulators, and communities.' },
    { title: 'Senior team', body: 'You work with the strategists, not a junior hand-off.' },
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
    role: 'Client',
  },
};

// ---------------------------------------------------------------- ABOUT
export const about = {
  story: {
    title: 'Our story',
    body: 'Big Red Oak was built by communicators who knew the energy sector deserved better than generic agency work. We pair strategic communications craft with deep sector knowledge — so the work is both sharp and true.',
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
    title: 'Our work',
    body: 'Strategy-led communications across the energy transition. Six core capabilities, applied to the sector’s hardest stories.',
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
