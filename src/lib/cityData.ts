import { CityData } from '@/types/location';

export const cities: CityData[] = [
  {
    id: 'oklahoma-city',
    name: 'Oklahoma City',
    slug: 'oklahoma-city',
    state: 'Oklahoma',
    coordinates: {
      lat: 35.4676,
      lng: -97.5164,
    },
    description: 'AI consulting services in Oklahoma City, helping local businesses leverage artificial intelligence for strategic growth and operational efficiency.',
    heroTitle: 'AI Consulting in Oklahoma City',
    heroSubtitle: 'Proudly based in OKC, Agent Analytics Studio helps local and national businesses unlock the power of artificial intelligence.',
    services: [
      {
        title: 'AI Strategy Development',
        description: 'Comprehensive AI roadmaps tailored to Oklahoma City\'s business landscape, from energy sector optimization to healthcare innovation.',
        icon: '🎯',
      },
      {
        title: 'Implementation & Integration',
        description: 'Seamless AI system deployment with local technical expertise and ongoing support for your digital transformation journey.',
        icon: '⚙️',
      },
      {
        title: 'Team Training & Enablement',
        description: 'Empower your Oklahoma workforce with AI literacy and hands-on training to maximize the value of your technology investments.',
        icon: '🎓',
      },
    ],
    testimonials: [
      {
        name: 'Sarah Johnson',
        company: 'Oklahoma Energy Solutions',
        role: 'CTO',
        content: 'Agent Analytics transformed our data operations. Their AI strategy helped us reduce costs by 30% while improving efficiency across all our Oklahoma facilities.',
        rating: 5,
      },
      {
        name: 'Michael Chen',
        company: 'OKC Healthcare Partners',
        role: 'Operations Director',
        content: 'The team at Agent Analytics understood our unique challenges in Oklahoma\'s healthcare market. Their AI implementation was seamless and delivered immediate results.',
        rating: 5,
      },
      {
        name: 'Lisa Rodriguez',
        company: 'Sooner Manufacturing Co.',
        role: 'CEO',
        content: 'Working with local AI experts made all the difference. Agent Analytics helped us modernize our manufacturing processes while keeping our Oklahoma roots strong.',
        rating: 5,
      },
    ],
    seo: {
      title: 'AI Consulting in Oklahoma City | Agent Analytics Studio',
      description: 'Based in Oklahoma City, Agent Analytics helps businesses navigate and implement AI strategies. Book your strategy session today.',
      keywords: ['AI consulting Oklahoma City', 'artificial intelligence Oklahoma', 'AI strategy OKC', 'machine learning consulting Oklahoma', 'digital transformation Oklahoma City'],
    },
    contactInfo: {
      phone: '+1 (405) 555-0123',
      email: 'okc@agentanalytics.com',
      address: '9905 S Pennsylvania Ave, STE A, Oklahoma City, OK 73159',
    },
    businessInfo: {
      companyName: 'Agent Analytics LLC',
      registeredAddress: '9905 S Pennsylvania Ave, STE A, Oklahoma City, OK 73159',
      registeredAgent: 'Northwest Registered Agent',
      locationType: 'Remote AI consulting studio',
      serviceArea: 'Local and national clients',
    },
  },
  // Future cities can be added here
  // {
  //   id: 'dallas',
  //   name: 'Dallas',
  //   slug: 'dallas',
  //   state: 'Texas',
  //   coordinates: {
  //     lat: 32.7767,
  //     lng: -96.7970,
  //   },
  //   // ... rest of the data
  // },
];

export function getCityBySlug(slug: string): CityData | undefined {
  return cities.find(city => city.slug === slug);
}

export function getAllCities(): CityData[] {
  return cities;
}

export function getCitySlugs(): string[] {
  return cities.map(city => city.slug);
} 