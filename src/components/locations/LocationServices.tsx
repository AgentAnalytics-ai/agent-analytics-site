'use client';

import { motion } from 'framer-motion';
import { CityData } from '@/types/location';

interface LocationServicesProps {
  city: CityData;
}

export default function LocationServices({ city }: LocationServicesProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl lg:text-5xl mb-6"
          >
            AI Services in {city.name}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300"
          >
            We bring world-class AI expertise to {city.name}, {city.state}. Our
            services are tailored to meet the unique challenges and
            opportunities of your local market.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {city.services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600"
            >
              {/* Service Icon */}
              <div className="mb-6 text-4xl">{service.icon}</div>

              {/* Service Title */}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {service.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-16 text-center"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Why Choose Local AI Expertise?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-600 dark:text-gray-300">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-3">
                  <span className="text-blue-600 dark:text-blue-400 text-xl">
                    🏢
                  </span>
                </div>
                <p className="text-center">
                  Local market understanding and business relationships
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-3">
                  <span className="text-green-600 dark:text-green-400 text-xl">
                    ⚡
                  </span>
                </div>
                <p className="text-center">
                  Faster response times and on-site support when needed
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-3">
                  <span className="text-purple-600 dark:text-purple-400 text-xl">
                    🤝
                  </span>
                </div>
                <p className="text-center">
                  Personalized service and long-term partnership focus
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
