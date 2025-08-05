'use client'

import { motion } from 'framer-motion'
import { MapPin, ExternalLink } from 'lucide-react'
import { CityData } from '@/types/location'

interface LocationMapProps {
  city: CityData;
}

export default function LocationMap({ city }: LocationMapProps) {
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

  // Generate Google Maps URL
  const googleMapsUrl = `https://www.google.com/maps?q=${city.coordinates.lat},${city.coordinates.lng}`

  return (
    <section className="py-20 bg-white dark:bg-gray-950">
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
            Find Us in {city.name}
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300"
          >
            We&apos;re proud to serve {city.name}, {city.state} and the surrounding areas. Connect with us to discuss your AI transformation journey.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Map Placeholder */}
          <motion.div variants={itemVariants} className="relative">
            <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
              {/* Map Placeholder - Replace with actual Google Maps embed */}
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 flex items-center justify-center relative">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                  <p className="text-gray-600 dark:text-gray-300 font-medium">
                    Interactive Map Coming Soon
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    {city.name}, {city.state}
                  </p>
                </div>
                
                {/* Overlay with coordinates */}
                <div className="absolute bottom-4 right-4 bg-white dark:bg-gray-800 px-3 py-2 rounded-lg shadow-md text-sm text-gray-600 dark:text-gray-300">
                  <div>Lat: {city.coordinates.lat.toFixed(4)}</div>
                  <div>Lng: {city.coordinates.lng.toFixed(4)}</div>
                </div>
              </div>
              
              {/* Map Controls */}
              <div className="p-6 bg-white dark:bg-gray-800">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {city.name}, {city.state}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {city.contactInfo.address}
                    </p>
                  </div>
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View on Maps
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Location Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Serving {city.name} & Beyond
              </h3>
              
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  We&apos;re committed to bringing world-class AI expertise to {city.name} and the surrounding {city.state} region. Our local presence means we understand your market, your challenges, and your opportunities.
                </p>
                
                <p>
                  Whether you&apos;re in downtown {city.name} or the surrounding areas, we&apos;re here to help transform your business with intelligent AI solutions.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Service Areas
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-300">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  {city.name} Metro Area
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Surrounding Counties
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Remote Consultation
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  On-site Implementation
                </div>
              </div>
            </div>

            {/* Future Google Maps Integration Note */}
            <div className="bg-blue-50 dark:bg-blue-950/30 rounded-2xl p-6 border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">
                🗺️ Interactive Map Integration
              </h4>
              <p className="text-sm text-blue-700 dark:text-blue-400">
                This placeholder will be replaced with an interactive Google Maps embed showing our exact location and service area in {city.name}.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 