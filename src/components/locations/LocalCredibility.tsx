'use client'

import { motion } from 'framer-motion'
import { Building2, MapPin, Shield, Users, Globe } from 'lucide-react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface LocalCredibilityProps {
  city: {
    name: string;
    state: string;
    businessInfo?: {
      companyName: string;
      registeredAddress: string;
      registeredAgent: string;
      locationType: string;
      serviceArea: string;
    };
  };
}

export default function LocalCredibility({ city }: LocalCredibilityProps) {
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
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
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
            Local Credibility, Global Expertise
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300"
          >
            Proudly rooted in {city.name}, we bring world-class AI consulting to Oklahoma businesses while serving clients nationwide.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Oklahoma City Roots */}
          <motion.div variants={itemVariants}>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {city.name} Roots
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We&apos;re proud to call {city.name}, {city.state} our home. Our deep understanding of the local business landscape helps us deliver AI solutions that work for Oklahoma companies.
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <p><strong>Registered Address:</strong></p>
                <p>{city.businessInfo?.registeredAddress}</p>
              </div>
            </div>
          </motion.div>

          {/* Remote-First Approach */}
          <motion.div variants={itemVariants}>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                  <Globe className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Remote-First Studio
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                As a remote-first AI consulting studio, we leverage technology to deliver exceptional service without the overhead of a physical office. This allows us to focus resources on what matters most: your success.
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <p><strong>Service Model:</strong> {city.businessInfo?.locationType}</p>
              </div>
            </div>
          </motion.div>

          {/* Trust & Registration */}
          <motion.div variants={itemVariants}>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                  <Shield className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Trust & Transparency
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We&apos;re a properly registered business entity with full transparency about our operations. Our registered agent ensures we maintain compliance and trust with our clients.
              </p>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <p><strong>Registered Agent:</strong> {city.businessInfo?.registeredAgent}</p>
                <p><strong>Company:</strong> {city.businessInfo?.companyName}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Whether you&apos;re in {city.name} or anywhere in the country, we&apos;re here to help you navigate the AI landscape and implement solutions that drive real results.
            </p>
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg transition-all duration-200 hover:bg-gray-100 hover:scale-105 active:scale-98 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-blue-600 shadow-lg"
            >
              <span>Book Your Strategy Session</span>
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 