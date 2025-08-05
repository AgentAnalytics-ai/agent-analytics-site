'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Phone, Mail, MapPin, Calendar } from 'lucide-react'
import { CityData } from '@/types/location'

interface LocationContactProps {
  city: CityData;
}

export default function LocationContact({ city }: LocationContactProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-950">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl lg:text-5xl mb-6"
          >
            Ready to Transform Your {city.name} Business?
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300"
          >
            Let&apos;s discuss how AI can drive growth and efficiency for your organization. Our local expertise means we understand your market and can deliver solutions that work for {city.name} businesses.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Get in Touch
              </h3>
              
              <div className="space-y-6">
                {city.contactInfo.phone && (
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">Phone</div>
                      <div className="text-gray-600 dark:text-gray-300">{city.contactInfo.phone}</div>
                    </div>
                  </div>
                )}
                
                {city.contactInfo.email && (
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">Email</div>
                      <div className="text-gray-600 dark:text-gray-300">{city.contactInfo.email}</div>
                    </div>
                  </div>
                )}
                
                {city.contactInfo.address && (
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">Location</div>
                      <div className="text-gray-600 dark:text-gray-300">{city.contactInfo.address}</div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Why Choose Local AI Expertise?
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Local market understanding
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Faster response times
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  On-site support when needed
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Long-term partnership focus
                </li>
              </ul>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white shadow-xl">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8" />
              </div>
              
              <h3 className="text-2xl font-semibold mb-4">
                Schedule Your Free Consultation
              </h3>
              
              <p className="text-blue-100 mb-8 max-w-md mx-auto">
                Book a 30-minute strategy session to discuss your AI needs and discover how we can help your {city.name} business thrive.
              </p>
              
              <Link
                href="/book"
                className="group inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <span>Book Your Session</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <p className="text-sm text-blue-200 mt-4">
                No commitment required • 30-minute session • Local expertise
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 