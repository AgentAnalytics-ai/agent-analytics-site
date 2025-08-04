'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, MapPin, Sparkles } from 'lucide-react'
import { CityData } from '@/types/location'

interface LocationHeroProps {
  city: CityData;
}

export default function LocationHero({ city }: LocationHeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-white dark:bg-gray-950">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-white to-white dark:from-blue-950/30 dark:via-gray-950 dark:to-gray-950" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_85%)] opacity-[0.02] dark:opacity-[0.05]" />

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-4xl text-center"
        >
          {/* Location Badge */}
          <motion.div 
            variants={itemVariants}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 dark:bg-blue-950/30"
          >
            <MapPin className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-900 dark:text-blue-300">
              Serving {city.name}, {city.state}
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            variants={itemVariants}
            className="mb-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl"
          >
            <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400">
              {city.heroTitle}
            </span>
          </motion.h1>

          {/* Supporting Text */}
          <motion.p 
            variants={itemVariants}
            className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-gray-600 dark:text-gray-300 sm:text-xl"
          >
            {city.heroSubtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/book"
              className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-lg transition-all duration-200 hover:from-emerald-700 hover:to-teal-700 hover:scale-105 active:scale-98 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:ring-offset-2 shadow-lg hover:shadow-xl hover:shadow-emerald-600/25"
            >
              <span className="relative z-10">Start Your AI Journey</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="#services"
              className="group inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg transition-all duration-200 hover:border-gray-400 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400/50 focus:ring-offset-2"
            >
              <Sparkles className="mr-2 w-5 h-5" />
              Explore Services
            </Link>
          </motion.div>

          {/* Location Info */}
          <motion.div 
            variants={itemVariants}
            className="mt-12 p-6 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-200 dark:border-gray-700"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{city.contactInfo.address}</span>
              </div>
              {city.contactInfo.phone && (
                <div className="flex items-center gap-2">
                  <span>📞</span>
                  <span>{city.contactInfo.phone}</span>
                </div>
              )}
              {city.contactInfo.email && (
                <div className="flex items-center gap-2">
                  <span>✉️</span>
                  <span>{city.contactInfo.email}</span>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 