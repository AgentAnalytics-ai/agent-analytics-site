'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home, Mail } from 'lucide-react'
import { Logo } from '@/components/ui/Logo'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 flex items-center justify-center relative overflow-hidden">
      {/* Subtle background logo watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <Logo variant="symbol" size="watermark" showLink={false} />
      </div>
      
      <div className="max-w-2xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <Logo variant="full" size="404" />
          </div>

          {/* Error Code */}
          <div className="text-8xl font-bold text-gray-200 dark:text-gray-800 mb-4">
            404
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Page Not Found
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            The page you&apos;re looking for doesn&apos;t exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Home className="mr-2 w-4 h-4" />
              Go Home
            </Link>
            
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:border-gray-400 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
            >
              <Mail className="mr-2 w-4 h-4" />
              Contact Us
            </Link>
          </div>

          {/* Additional Info */}
          <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-950/30 rounded-2xl border border-blue-200 dark:border-blue-800">
            <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">
              💡 Need Help?
            </h3>
            <p className="text-sm text-blue-700 dark:text-blue-400">
              If you&apos;re looking for AI consulting services, we&apos;re here to help. 
              Schedule a strategy call to discuss how we can solve your business challenges.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 