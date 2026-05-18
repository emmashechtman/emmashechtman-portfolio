const buildPhotoSet = (folder, count, extension = 'jpg') =>
  Array.from({ length: count }, (_, index) => ({
    src: `/assets/photojournalism/${folder}/${String(index + 1).padStart(2, '0')}.${extension}`,
    alt: `${folder} photograph ${String(index + 1).padStart(2, '0')}`,
  }))

const napuleImages = buildPhotoSet('napule', 8, 'jpg')

const napuleFinalStatement = {
  italian: 'Sono veloce a rendermi conto che questa specie non è nostra amica.',
  english: 'I am quick to realize that this species is not our friend.',
  image: '/assets/photojournalism/napule/08.jpg',
}

const napuleRows = [
  {
    type: 'textPair',
    layout: 'full',
    italian: [
      "Il calore comincia a colpire la mia schiena mentre giacevo nell'erba ricoperta di rugiada.",
      'Mi giro dalla mia parte, in modo che il mio stomaco ora giace piatto a terra.',
      'Estendo la metà anteriore del mio corpo il più lontano possibile.',
      'Rilascio un piccolo sbadiglio, esponendo i denti anteriori affilati.',
      'Le mie palpebre si aprono lentamente, mentre i raggi del sole colpiscono la parte superiore della mia fronte, inviando uno shock di elettricità lungo la spina dorsale, fino alla punta della mia coda.',
    ],
    english: [
      'The warmth begins to hit my back as I lie in the dew covered grass.',
      'Turning over from my side, so that my stomach now lie flat on the ground.',
      'I extend the front half of my body as far as possible.',
      'I release a small yawn, exposing my sharpened front teeth.',
      'My eyelids slowly open, while the sunlight rays hit the top of my forehead, sending a shock of electricity down my spine, all the way to the tip of my tail.',
    ],
  },
  {
    type: 'image',
    layout: 'center',
    image: '/assets/photojournalism/napule/01.jpg',
  },
  {
    type: 'textPair',
    layout: 'full',
    italian: [
      'Le calde sfumature di colore raggiungono le punte della mia pelliccia, evidenziando le mie strisce color terracotta.',
      'Lecco le mie zampe delicatamente e mi rendo presentabile al fine di iniziare un altro giorno.',
      'Lentamente mi spingo con le mie due zampe anteriori, inarcando la schiena leggermente verso il cielo.',
      'Sollevo il peso rimanente del mio corpo fragile, ora mi trovo su tutte e quattro le zampe.',
      'Le piante riflettono i miei occhi color smeraldo, mentre il cielo si trasforma rapidamente in una bella ombra di azzurro.',
      'La punta del mio naso colpisce gli umidi cespugli che si trovano di fronte a me.',
      "Mi muovo rapidamente come il tocco di acqua che è una sensazione familiare, ma che non mi piace molto.",
      "Comincio a muovere le mie gambe corte all'interno delle strade di Napoli.",
    ],
    english: [
      'The warm hues of color reach the tips of my fur, highlighting my terracotta-colored stripes.',
      'Licking my paws gently, grooming myself as best as I can, in order to start another day.',
      'I slowly push myself up with my two front paws, arching my back slightly upwards towards the sky.',
      'Lifting the remaining weight of my fragile body, I now stand on all four legs.',
      'The plants reflect off of my emerald eyes, while the sky quickly turns into a lovely shade of azure.',
      'The tip of my nose hits the moist shrubbery that lies in front of me.',
      'I quickly move away as the touch of water is a familiar sensation, not one that I am very fond of.',
      'I begin to strut my short legs within the streets of Napoli.',
    ],
  },
  {
    type: 'split',
    columns: [
      { type: 'image', image: '/assets/photojournalism/napule/02.jpg' },
      {
        type: 'textPair',
        italian: [
          'È solo un altro giorno.',
          'Spostandomi dall’erba ... saluto I miei compagni napoletani.',
          'Analogamente alla loro controparte umana, i piccioni iniziano la loro giornata insieme.',
          "Non con l'espresso, ma piuttosto con le briciole che riescono a trovare per le strade.",
          'Comincio ad avvicinarmi lentamente ai miei vicini, ma sembrava che io non piacessi molto a loro. Forse è perché siamo di razze diverse.',
        ],
        english: [
          'It’s just another day.',
          'Walking away from the grass, I greet my fellow Neapolitans.',
          'Similarly to their human counterpart, the pigeons are commencing their day together.',
          'Not with espresso, but rather with the crumbs that they manage to find on the streets.',
          'I begin to slowly approach my neighbors, but they never seemed to like me very much. Perhaps it’s because we are of different race.',
        ],
      },
    ],
  },
  {
    type: 'split',
    columns: [
      {
        type: 'text',
        language: 'italian',
        paragraphs: [
          'O forse si sentono intimiditi dalla mia grandezza e dalla mia astuzia... Come mi sento anch’io quando sono intorno a quei strani animali che hanno quattro zampe, ma scelgono di camminare su due.',
          'Quegli animali che parlano in una lingua molto diversa dalla mia.',
          'Riempiono il mio mondo di oggetti estranei che i miei grandi antenati non hanno mai conosciuto.',
          'Lasciano questi oggetti sulla strada, dove sono facilmente accessibili da chi si muove in giro per terra.',
          'Ingannandoci, mettendo questi oggetti vicino alla loro bocca... ma non possono essere consumati a causa del loro calore e cattivo odore.',
        ],
      },
      { type: 'image', image: '/assets/photojournalism/napule/03.jpg' },
    ],
  },
  {
    type: 'split',
    columns: [
      { type: 'image', image: '/assets/photojournalism/napule/04.jpg' },
      {
        type: 'text',
        language: 'english',
        paragraphs: [
          'Or perhaps they feel intimidated by my grandeur and cunning nature…as I do around those strange animals that have four legs but choose to walk on two.',
          'Those animals who speak in a language far different from my own.',
          'They fill my world with foreign objects that my great ancestors never knew.',
          'They leave these objects on the street, where they are easily accessible by those who move around near the ground.',
          'Misleading us, by placing these objects close to their mouths… but they cannot be consumed because of their heat and foul smell.',
        ],
      },
    ],
  },
  {
    type: 'triple',
    columns: [
      {
        type: 'text',
        language: 'italian',
        paragraphs: [
          'Un odore che rimane nella mia pelliccia per giorni a seguire. Si verificano così spesso che non lo sento nemmeno più.',
          'Altri oggetti restano piatti con immagini che assomigliano al mondo in cui vedo, circondati dai loro simboli estranei.',
          'Lasciano le gabbie – come quelle da cui sono fuggita durante la mia adolescenza – per le strade.',
          'Pensando di poter catturare la mia specie, ma abbiamo imparato e ora sappiamo come non cadere nei i loro trucchi crudeli.',
        ],
      },
      { type: 'image', image: '/assets/photojournalism/napule/05.jpg' },
      {
        type: 'text',
        language: 'english',
        paragraphs: [
          'A smell that remains in my fur for days to follow. Occurring so often, I do not even smell it anymore.',
          'Other objects remain flat with images that resemble the world in which I see, surrounded by their foreign symbols.',
          'They leave cages – like the ones that I escaped from during my adolescence – in the streets.',
          'Thinking that they can capture my kind, but we have learned and we now know not to fall for their cruel tricks.',
        ],
      },
    ],
  },
  {
    type: 'split',
    columns: [
      {
        type: 'text',
        language: 'italian',
        paragraphs: [
          'La crescita di questi esseri è strana.',
          'Partendo da piccolo e lentamente diventando più grande, ma verso la fase finale diventando piccoli ancora una volta.',
          "I piccoli non sanno cosa fanno i loro anziani per l'ambiente, in cui viviamo.",
          'Mi guardano, inconsapevoli e confusi. Sono innocenti, ma non fanno nulla per fermare i loro genitori. Non possono.',
        ],
      },
      { type: 'image', image: '/assets/photojournalism/napule/06.jpg' },
    ],
  },
  {
    type: 'split',
    columns: [
      { type: 'image', image: '/assets/photojournalism/napule/07.jpg' },
      {
        type: 'text',
        language: 'english',
        paragraphs: [
          'The growth of these beings is one that is rather strange.',
          'Starting off small and slowly becoming larger, but towards the end stage becoming small once again.',
          'The small ones don’t know what their elders do to the environment, in which we live.',
          'They look at me, unaware and confused. They are innocent, but they do nothing to stop their elders. They can’t.',
        ],
      },
    ],
  },
  {
    type: 'textPair',
    layout: 'full',
    italian: [
      'I genitori della giovane generazione sono immobili. Non si preoccupano di cambiare i loro modi o le loro abitudini... rimangono lì e guardano il cambiamento del mondo intorno a loro.',
      'Infine, i loro anziani camminano in avanti senza guardare indietro nel passato. Non è che non vogliano evocare il cambiamento. Semplicemente sono troppo stanchi per tornare indietro a questo punto.',
    ],
    english: [
      'The parents of the young generation are immobile. They do not care to change their ways or their habits… they stay there and watch the world change around them.',
      'Lastly, their elders walk forward without looking back into the past. It’s not that they don’t want to evoke change. Simply that they are too tired to turn back at this point.',
    ],
  },
  {
    type: 'image',
    layout: 'center',
    image: '/assets/photojournalism/napule/08.jpg',
  },
  {
    type: 'finalStatement',
    italian: napuleFinalStatement.italian,
    english: napuleFinalStatement.english,
  },
]

export const siteContent = {
  nav: {
    brand: 'Emma Shechtman',
    items: [
      { label: 'About', href: '#about' },
      { label: 'Contact', href: '#contact' },
    ],
    work: {
      label: 'Work',
      href: '#work',
      items: [
        { label: 'Cyvl', href: '#cyvl' },
        { label: 'Asian Girlies of Boston', href: '#agb' },
        { label: '@emmafeedsyourfeed', href: '#emmafeedsyourfeed' },
      ],
    },
    photojournalism: {
      label: 'Photojournalism',
      items: [
        {
          label: 'Napule',
          slug: 'napule',
        },
        {
          label: 'Humans & Lines',
          slug: 'humans-and-lines',
        },
        {
          label: 'Marrakech, Morocco',
          slug: 'marrakech-morocco',
        },
        {
          label: 'The Faces of Scampia & Castel Volturno',
          slug: 'scampia-castel-volturno',
        },
      ],
    },
  },

  hero: {
    eyebrow: 'BOSTON-BASED CREATIVE MARKETER',
    name: ['EMMA', 'SHECHTMAN'],
    paragraphs: [
      'Emma blends creative storytelling with strategic execution across startup growth, content strategy, brand marketing, social media, email, events, community building, sales enablement, and marketing operations.',
      'The result is work that feels sharp and contemporary, but also organized, collaborative, and grounded in actual business goals.',
    ],
    ctas: [
      { label: 'View my work', href: '#work', variant: 'primary' },
      { label: 'Get in touch', href: '#contact', variant: 'secondary' },
    ],
    image: {
      src: '/assets/emma-portrait.png',
      alt: 'Portrait of Emma Shechtman',
      placeholderLabel: 'Emma portrait placeholder',
      placeholderNote: 'Add /assets/emma-portrait.png',
    },
  },

  about: {
    eyebrow: 'About',
    heading: 'Creative storytelling with the strategic structure to make it perform.',
    image: {
      src: '/assets/emma-about-portrait.jpg',
      alt: 'Emma Shechtman portrait',
      placeholderLabel: 'About portrait placeholder',
      placeholderNote: 'Add /assets/emma-about-portrait.jpg',
      tone: 'peach',
    },
    paragraphs: [
      'Emma brings together voice, taste, and systems thinking, helping brands tell better stories while building the operational structure that carries those stories into campaigns, content, and growth.',
      'Her work moves fluidly between high-level narrative and the practical execution behind startup marketing, social strategy, community building, events, sales enablement, and marketing operations.',
    ],
    meta: [
      'Boston, MA / Remote',
      'Content, growth, and brand systems',
      'Creative marketer with operator instincts',
    ],
  },

  whatIDo: {
    eyebrow: 'What I Do',
    heading: 'A creative marketer who can build the story and run the system.',
    items: [
      {
        title: 'Brand Storytelling',
        description:
          'Crafting voice, messaging, and narrative systems that make brands feel sharp, human, and memorable.',
      },
      {
        title: 'Content Strategy',
        description:
          'Turning business goals into channel-ready plans with strong hooks, repeatable formats, and editorial rigor.',
      },
      {
        title: 'Startup Growth',
        description:
          'Blending experimentation and execution to support awareness, acquisition, community, and launch momentum.',
      },
      {
        title: 'Marketing Operations',
        description:
          'Building the behind-the-scenes structure that helps creative marketing run smoothly across teams.',
      },
    ],
  },

  selectedWork: {
    eyebrow: 'Selected Work',
    heading:
      'A portfolio spanning social content, community growth, and startup marketing foundations.',
    items: [
      {
        number: '01',
        category: 'Startup marketing foundation',
        title: 'Cyvl',
        description:
          'Messaging, content systems, and sales enablement support built for an early-stage team scaling with more intention.',
        href: '#cyvl',
      },
      {
        number: '02',
        category: 'Community growth',
        title: 'Asian Girlies of Boston',
        description:
          'Content and events designed to grow local belonging, cultural relevance, and consistent engagement.',
        href: '#agb',
      },
      {
        number: '03',
        category: 'Social Content Case Study',
        title: '@emmafeedsyourfeed',
        description:
          'Boston food recommendations translated into scroll-stopping social content with hooks, overlays, local business collaborations, and SEO-friendly captions.',
        href: '#emmafeedsyourfeed',
      },
    ],
  },

  cyvl: {
    id: 'cyvl',
    eyebrow: 'Startup Marketing Foundation',
    heading: 'Building marketing systems for an early-stage GovTech startup, Cyvl',
    intro:
      'At Cyvl, I worked as the first dedicated marketing hire, supporting the company’s marketing foundation across content, CRM, events, sales enablement, website strategy, email, and partner campaigns. The role required both creative execution and operational structure.',
    feature: {
      title: 'Team of one for 3+ years',
      body:
        'Built foundational marketing systems for an early-stage startup, balancing creative execution with operational structure.',
    },
    proofPoints: [
      { value: '30k+', label: 'CRM contacts managed' },
      {
        value: '1k+',
        label: 'Deals supported across sales, pilot, and partnership pipelines',
      },
      {
        value: 'Tens of millions',
        label: 'In pipeline activity supported through marketing and sales enablement',
      },
    ],
    details: [
      {
        number: '01',
        title: 'Marketing systems from scratch',
        description:
          'Owned and supported foundational marketing and sales workflows across HubSpot, website updates, campaign assets, and cross-functional requests.',
        tags: ['HubSpot', 'Website updates', 'Campaign assets'],
      },
      {
        number: '02',
        title: 'Content and sales enablement',
        description:
          'Created messaging, outreach sequences, collateral, informational one-pagers, newsletters, event assets, and LinkedIn content that helped support sales conversations and brand visibility.',
        tags: ['Messaging', 'Collateral', 'Newsletters'],
      },
      {
        number: '03',
        title: 'Events and partner marketing',
        description:
          'Supported event strategy, lead follow-up, webinars, partner campaigns, in-person conference exhibiting, and speaking opportunities tied to pipeline growth.',
        tags: ['Webinars', 'Partner campaigns', 'Lead follow-up'],
      },
    ],
  },

  agb: {
    id: 'agb',
    eyebrow: 'Community Growth',
    heading: 'Building a Boston community from zero to 500+ members in just a few months.',
    intro:
      'Asian Girlies of Boston is a community project I founded to help Asian women in Boston meet, connect, and discover local experiences together. I built the early brand presence, event promotion system, community channels, and partnership positioning across Instagram, Telegram, Partiful, and web.',
    link: {
      label: "Visit AGB's site here",
      href: 'https://asiangirliesofboston.com/',
    },
    tags: ['Community', 'Events', 'Partnerships', 'Social', 'Local'],
    details: [
      {
        number: '01',
        title: 'Community infrastructure',
        description:
          'Built the foundation across Instagram, Telegram, Partiful, and web so members could discover events, join conversations, and stay connected.',
      },
      {
        number: '02',
        title: 'Event-led growth',
        description:
          'Used in-person meetups, local experiences, and timely cultural events to turn digital interest into real community participation.',
      },
      {
        number: '03',
        title: 'Brand and partnership strategy',
        description:
          'Created a warm, recognizable voice and early partnership positioning for local businesses, venues, and community collaborations.',
      },
    ],
    proofPoints: [
      { value: '500+', label: 'members in first few months' },
      { label: 'Instagram, Telegram, Partiful, and web ecosystem' },
      { label: 'Event promotion and RSVP systems' },
      { label: 'Early local partnership opportunities' },
    ],
    images: [
      {
        src: '/assets/agb-event-1.jpg',
        alt: 'Asian Girlies of Boston event scene one',
        tone: 'olive',
      },
      {
        src: '/assets/agb-event-2.jpg',
        alt: 'Asian Girlies of Boston event scene two',
        tone: 'rose',
      },
      {
        src: '/assets/agb-event-3.jpg',
        alt: 'Asian Girlies of Boston event scene three',
        tone: 'peach',
      },
      {
        src: '/assets/agb-event-4.jpg',
        alt: 'Asian Girlies of Boston event scene four',
        tone: 'warm',
      },
    ],
  },

  emmaFeedsYourFeed: {
    id: 'emmafeedsyourfeed',
    eyebrow: 'Social Content Case Study',
    heading: 'A Boston food content project built for local discovery and social momentum.',
    intro:
      'I created @emmafeedsyourfeed to turn restaurant visits, neighborhood finds, and local food moments into social-first content people want to save, share, and revisit.',
    poster: '/assets/eff-scroll-poster.jpg',
    posterAlt: '@emmafeedsyourfeed Instagram feed preview',
    video: '/assets/eff-scroll-recording.mp4',
    storyBlocks: [
      {
        number: '01',
        title: 'Social-first Boston food content',
        description:
          'Local restaurant recommendations translated into short-form videos, carousel posts, and caption systems built for discovery.',
      },
      {
        number: '02',
        title: 'Hooks, overlays, and short-form structure',
        description:
          'Each piece starts with a clear hook, then uses framing, pacing, captions, and on-screen text to keep people watching.',
      },
      {
        number: '03',
        title: 'Local business collaborations',
        description:
          'Partnered with local restaurants and businesses to create shared social content through mutual reel collaborations and community-driven promotion.',
      },
      {
        number: '04',
        title: 'SEO-friendly, human-sounding captions',
        description:
          'Captions are written for both people and search, balancing Boston food keywords with a voice that still sounds natural.',
      },
      {
        number: '05',
        title: 'Creator strategy with brand discipline',
        description:
          'The project blends visual taste, repeatable content patterns, and audience insight while still feeling personal and useful.',
      },
    ],
  },

  skills: {
    eyebrow: 'Skills & Tools',
    heading: 'Creative instincts backed by practical tools and repeatable systems.',
    categories: [
      {
        title: 'Strategy & Growth',
        className: 'strategy',
        items: [
          'Content Strategy',
          'Brand Messaging',
          'Campaign Planning',
          'Audience Development',
          'Go-to-Market Support',
          'Demand Generation',
          'ABM',
          'GTM Strategy',
          'Brand Marketing',
          'SEO',
        ],
      },
      {
        title: 'Execution',
        className: 'execution',
        items: [
          'Social Media',
          'Email Marketing',
          'Event Marketing',
          'Community Building',
          'Sales Enablement',
          'Partner Marketing',
          'Content Creation',
          'Copywriting',
          'Project Management',
        ],
      },
      {
        title: 'Languages',
        className: 'languages',
        items: ['English', 'Italian'],
      },
      {
        title: 'CRM & RevOps',
        className: 'revops',
        items: [
          'HubSpot',
          'Apollo.io',
          'Clay',
          'Instantly',
          'La Growth Machine',
          'Workflow Design',
          'Data Hygiene',
          'Segmentation',
          'Pipeline Reporting',
          'Sales Automation',
        ],
      },
      {
        title: 'Creative & Technical',
        className: 'creative',
        items: [
          'Canva',
          'Figma',
          'Webflow',
          'Adobe Photoshop',
          'Adobe Lightroom',
          'Analytics & Reporting',
          'Marketing Operations',
        ],
      },
      {
        title: 'AI & Automation',
        className: 'ai',
        items: [
          'ChatGPT',
          'Codex',
          'Claude',
          'Gumloop',
          'Zapier',
          'Publer',
          'Data Enrichment',
        ],
      },
    ],
  },

  resume: {
    eyebrow: 'Resume',
    heading: 'Want the full experience overview?',
    paragraph:
      "Reach out for Emma's resume, portfolio samples, or a deeper conversation about brand, content, and growth roles.",
    button: {
      label: 'Request resume',
      href: 'mailto:emma.shechtman@gmail.com',
    },
  },

  contact: {
    eyebrow: 'Contact',
    heading: 'Curious what we could build together?',
    lead: "Let's make something sharp, useful, and actually worth remembering.",
    button: {
      label: 'Get in touch',
      href: 'mailto:emma.shechtman@gmail.com',
    },
    email: 'emma.shechtman@gmail.com',
    linkedIn: {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/emmashechtman',
    },
    location: 'Boston, MA / Remote',
  },

  memorial: {
    label: 'In Loving Memory',
    name: 'Maria Iavazzo DeLuca',
    dates: '23 August, 1923 to 24 December, 2018',
    image: {
      src: '/assets/photojournalism/marrakech-morocco/16.jpg',
      alt: 'Maria Iavazzo DeLuca memorial image',
      placeholderLabel: 'Memorial image placeholder',
      placeholderNote: '/assets/photojournalism/marrakech-morocco/16.jpg',
      tone: 'sand',
    },
  },

  photojournalismProjects: [
    {
      slug: 'napule',
      title: 'Napule',
      type: 'bilingual-layout-map',
      imageCount: 8,
      images: napuleImages,
      rows: napuleRows,
      finalStatement: napuleFinalStatement,
    },
    {
      slug: 'humans-and-lines',
      title: 'Humans & Lines',
      imageCount: 14,
      body: [
        'The choice is clear: we can either meet life with softness, smiling at the experiences we have endured, or we can become hardened by the past and fearful of what lies ahead. Each path leaves its own expression behind, carving different lines into the body over time.',
        'A smile creates creases at the corners of the mouth. A frown settles into the face. Stress gathers across the forehead. Years of carrying weight, both physical and emotional, can change the posture of the spine.',
        'I have always been drawn to photographing elderly people. There is something quiet and compelling about the way they move through the world. They rarely seem to be in a rush. They do not hurry; they simply continue, slowly and deliberately, through the rhythms of daily life.',
        'They notice the small, almost invisible details that younger generations often overlook. They carry years of knowledge, memory, and wisdom, offering those who come after them a line to follow.',
        'Their lives are shaped by the past, by moments that left powerful emotional traces: happiness, love, bliss, heartbreak, stress, and pain. These emotions do not disappear. They remain visible, etched into faces, bodies, and gestures as evidence of a life fully lived.',
      ],
      images: buildPhotoSet('humans-and-lines', 14),
      memorial: {
        image: '/assets/photojournalism/humans-and-lines/15.jpg',
        label: 'In Loving Memory',
        name: 'Maria Iavazzo DeLuca',
        dates: '23 August, 1923 to 24 December, 2018',
      },
    },
    {
      slug: 'marrakech-morocco',
      title: 'Marrakech, Morocco',
      imageCount: 16,
      body: [
        'A photojournalism project documenting moments, textures, and everyday scenes from Marrakech, Morocco.',
      ],
      images: buildPhotoSet('marrakech-morocco', 16),
    },
    {
      slug: 'scampia-castel-volturno',
      title: 'The Faces of Scampia & Castel Volturno',
      imageCount: 8,
      body: [
        'A common question many people are asked during adolescence is, “What do you want to be when you grow up?” The answers are often familiar: president, ballerina, firefighter, astronaut, doctor. For many children living in areas like Scampia and Castel Volturno, in the province of Napoli, these possibilities can feel distant, almost fictional. They become less like realistic futures and more like fragile constructions of hope, imagined against the weight of the circumstances they were born into.',
        'These children do not choose their families, their neighborhoods, or the systems that surround them. When a family is already connected, directly or indirectly, to the mafia, the possibility of separating oneself from that world becomes incredibly difficult. Before visiting, I did not know exactly what to expect. I had been to Napoli many times before and had seen poverty and violence there, though never in a way that felt entirely different from what exists in other major cities, such as New York.',
        'When we first arrived in Scampia, we visited (R)esistenza Anticamorra, where Ciro Corona spoke to us about local residents and their ongoing struggle against the Camorra. I saw many men whose faces carried a sense of hope, men who seemed to have turned their lives around and were working toward a different future.',
        'We also visited one of the three remaining vele of Scampia. While we were inside, a group of young boys suddenly entered with angry expressions and began shouting every English curse word they knew. As we left, one boy threw a brick at his friend, narrowly missing his head. They seemed to feel as though we had entered their home without permission. In some ways, perhaps we had.',
        'We continued our day in Scampia by visiting another anti-Camorra association, Gridas, which provides local residents with opportunities for community engagement and service. We ended the day at the ARCI Soccer Club, an organization that gives the youth of Scampia access to sports and structure, offering an alternative to violence and crime-related activity.',
        'When we arrived at the soccer fields, I noticed a kind of purity in many of the children’s faces. Their innocence seemed to brighten the space, filling the air with a rare sense of ease. Still, not every face carried the same openness. Some of the younger teenagers and parents appeared guarded, less kind, and less inviting.',
        'On the second day of the trip, we traveled to Castel Volturno, a city with a large Nigerian immigrant population. There, we learned about the history of the area, the presence of the Casalesi clan, and its relationship with the Nigerian mafia. We also learned how these criminal networks can intersect, particularly in relation to human trafficking and the exploitation of women.',
        'The reality of sex trafficking, especially involving Nigerian women, though not limited to them, was painfully visible in Castel Volturno. Many of the faces I saw there seemed marked by helplessness and gloom. The weight of the place was difficult to ignore, not only in the stories we heard, but in the expressions of the people living within them.',
      ],
      images: buildPhotoSet('scampia-castel-volturno', 8),
    },
  ],
}
