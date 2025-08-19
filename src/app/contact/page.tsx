import { Metadata } from 'next';
import { ContactForm } from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Agent Analytics',
  description:
    "Get in touch with our team to discuss your AI implementation needs. We're here to help you transform your business with strategic AI solutions.",
  openGraph: {
    title: 'Contact Us | Agent Analytics',
    description:
      'Get in touch with our team to discuss your AI implementation needs.',
    type: 'website',
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
