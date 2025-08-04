# Location-Based Presence System

## Overview

This system provides a scalable structure for Agent Analytics Studio's location-based landing pages, starting with Oklahoma City and designed to expand to other cities. The system includes SEO optimization, local content, and lead routing capabilities.

## 🏗️ Architecture

### Folder Structure
```
src/
├── app/
│   └── locations/
│       ├── page.tsx                    # "Where We Work" overview page
│       └── [city]/
│           └── page.tsx                # Dynamic city pages
├── components/
│   └── locations/
│       ├── LocationHero.tsx            # City-specific hero section
│       ├── LocationServices.tsx        # Services section
│       ├── LocationTestimonials.tsx    # Testimonials section
│       ├── LocationContact.tsx         # Contact CTA section
│       └── LocationMap.tsx             # Google Maps embed
├── lib/
│   └── cityData.ts                     # Location data and configuration
└── types/
    └── location.ts                     # TypeScript types for locations
```

### Key Features

1. **Dynamic Routing**: `/locations/[city]` pages automatically generated from city data
2. **SEO Optimization**: Meta tags, structured data, and local SEO for each city
3. **Scalable Content**: Easy addition of new cities through configuration
4. **Local Personalization**: City-specific content, testimonials, and contact information
5. **Responsive Design**: Mobile-first approach with modern UI components

## 🚀 Adding a New City

### Step 1: Update City Data

Add your new city to `src/lib/cityData.ts`:

```typescript
{
  id: 'dallas',
  name: 'Dallas',
  slug: 'dallas',
  state: 'Texas',
  coordinates: {
    lat: 32.7767,
    lng: -96.7970,
  },
  description: 'AI consulting services in Dallas, helping local businesses leverage artificial intelligence for strategic growth.',
  heroTitle: 'AI Consulting in Dallas',
  heroSubtitle: 'Transform your business with intelligent solutions designed for Dallas\'s unique market.',
  services: [
    {
      title: 'AI Strategy Development',
      description: 'Comprehensive AI roadmaps tailored to Dallas\'s business landscape.',
      icon: '🎯',
    },
    // Add more services...
  ],
  testimonials: [
    {
      name: 'John Smith',
      company: 'Dallas Tech Solutions',
      role: 'CEO',
      content: 'Agent Analytics transformed our operations...',
      rating: 5,
    },
    // Add more testimonials...
  ],
  seo: {
    title: 'AI Consulting in Dallas | Agent Analytics Studio',
    description: 'Expert AI consulting services in Dallas. Transform your business with intelligent solutions.',
    keywords: ['AI consulting Dallas', 'artificial intelligence Texas', 'AI strategy Dallas'],
  },
  contactInfo: {
    phone: '+1 (214) 555-0123',
    email: 'dallas@agentanalytics.com',
    address: 'Dallas, TX',
  },
}
```

### Step 2: Verify Routes

The dynamic routing will automatically create `/locations/dallas` once the city is added to the data file.

### Step 3: Test the Page

Visit `/locations/dallas` to ensure all components render correctly.

## 📊 SEO Features

### Meta Tags
- Dynamic title and description for each city
- Open Graph and Twitter Card support
- Canonical URLs
- Local business keywords

### Structured Data
Each city page includes JSON-LD structured data for:
- LocalBusiness schema
- Service offerings
- Customer reviews
- Geographic coordinates
- Contact information

### Local SEO Optimization
- City-specific content and keywords
- Local business information
- Geographic targeting
- Service area definitions

## 🗺️ Google Maps Integration

### Current Implementation
- Placeholder map component with coordinates display
- Link to Google Maps for each location
- Service area information

### Future Enhancement
Replace the placeholder in `LocationMap.tsx` with actual Google Maps embed:

```typescript
// Replace the placeholder div with:
<iframe
  src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${city.coordinates.lat},${city.coordinates.lng}`}
  width="100%"
  height="400"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
```

## 📞 Lead Routing System

### Current Implementation
- All CTAs route to `/book` (existing booking page)
- Contact information displayed for each location

### Future Enhancement: Location-Based Lead Routing

#### Option 1: Calendly Integration
```typescript
// Add to cityData.ts
{
  calendlyUrl: 'https://calendly.com/agent-analytics/dallas-consultation',
  consultantName: 'Sarah Johnson',
  consultantEmail: 'sarah@agentanalytics.com',
}
```

#### Option 2: Dynamic Booking Forms
```typescript
// Add location-specific form fields
{
  bookingForm: {
    location: 'Dallas',
    timezone: 'America/Chicago',
    consultantId: 'sarah-johnson',
  }
}
```

#### Option 3: CRM Integration
```typescript
// Route leads to specific consultants based on location
{
  crmRouting: {
    ownerId: 'consultant-dallas-001',
    territory: 'Dallas Metro',
    leadSource: 'Website - Dallas Location',
  }
}
```

## 🎨 Component Customization

### Styling
All components use Tailwind CSS with:
- Consistent design system
- Dark mode support
- Responsive breakpoints
- Smooth animations (Framer Motion)

### Content Customization
Each component accepts a `city` prop with all location-specific data:
- Hero content and CTAs
- Service descriptions
- Testimonial content
- Contact information

## 📈 Analytics & Tracking

### Recommended Tracking
1. **Page Views**: Track visits to each city page
2. **Lead Generation**: Monitor CTA clicks by location
3. **Conversion Rates**: Compare performance across cities
4. **Search Performance**: Monitor local SEO rankings

### Implementation
```typescript
// Add to each city page
useEffect(() => {
  // Track page view
  analytics.track('Location Page View', {
    city: city.name,
    state: city.state,
    page: `/locations/${city.slug}`
  });
}, [city]);
```

## 🔧 Maintenance

### Regular Tasks
1. **Content Updates**: Refresh testimonials and case studies
2. **SEO Monitoring**: Track local search rankings
3. **Performance**: Monitor page load times
4. **Analytics**: Review lead generation by location

### Content Guidelines
- Keep testimonials authentic and location-specific
- Update service descriptions for local relevance
- Maintain consistent contact information
- Regular SEO content updates

## 🚀 Future Enhancements

### Phase 2: Advanced Features
1. **Multi-language Support**: Spanish content for certain markets
2. **Local Events Integration**: Showcase local AI events and meetups
3. **Case Study Pages**: Detailed local success stories
4. **Consultant Profiles**: Individual consultant pages per location

### Phase 3: Automation
1. **Content Management System**: Admin interface for city updates
2. **Dynamic Lead Scoring**: Location-based lead qualification
3. **Automated Reporting**: Location performance dashboards
4. **A/B Testing**: Location-specific conversion optimization

## 📞 Support

For questions about the location system:
- Review this README
- Check the component documentation
- Test with the development environment
- Contact the development team

---

**Last Updated**: December 2024
**Version**: 1.0.0 