import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, ArrowLeft, Globe } from 'lucide-react'

export default function CityNotFound() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Icon */}
          <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-8">
            <MapPin className="w-10 h-10 text-blue-600 dark:text-blue-400" />
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Location Not Found
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            We're sorry, but we don't currently have a dedicated page for this location. 
            However, we still provide AI consulting services in your area!
          </p>

          {/* Current Locations */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Our Current Locations
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <div className="flex items-center gap-2 bg-white dark:bg-gray-700 px-4 py-2 rounded-lg shadow-sm">
                <Globe className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  Oklahoma City, OK
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              We're actively expanding to more cities. Contact us to discuss services in your area.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/locations"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              View All Locations
            </Link>
            
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:border-gray-400 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
            >
              Schedule Consultation
            </Link>
          </div>

          {/* Additional Info */}
          <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-950/30 rounded-2xl border border-blue-200 dark:border-blue-800">
            <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">
              💡 Remote Services Available
            </h3>
            <p className="text-sm text-blue-700 dark:text-blue-400">
              Even if we don't have a local office in your city, we provide comprehensive AI consulting services remotely. 
              Our team can work with you virtually and travel for on-site implementation when needed.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 