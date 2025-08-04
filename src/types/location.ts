export interface CityData {
  id: string;
  name: string;
  slug: string;
  state: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  description: string;
  heroTitle: string;
  heroSubtitle: string;
  services: {
    title: string;
    description: string;
    icon: string;
  }[];
  testimonials: {
    name: string;
    company: string;
    role: string;
    content: string;
    rating: number;
  }[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  contactInfo: {
    phone?: string;
    email?: string;
    address?: string;
  };
  businessInfo?: {
    companyName: string;
    registeredAddress: string;
    registeredAgent: string;
    locationType: string;
    serviceArea: string;
  };
}

export interface LocationPageProps {
  city: CityData;
} 