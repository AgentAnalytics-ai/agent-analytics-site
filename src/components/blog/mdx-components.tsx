'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Quote as QuoteIcon,
  AlertTriangle,
  Info,
  CheckCircle,
  TrendingUp,
} from 'lucide-react';

// Quote Component
export function Quote({
  children,
  author,
}: {
  children: React.ReactNode;
  author?: string;
}) {
  return (
    <motion.blockquote
      className="relative my-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 rounded-r-lg"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <QuoteIcon className="absolute top-4 left-4 w-8 h-8 text-blue-500 opacity-20" />
      <div className="ml-8">
        <p className="text-lg text-gray-800 italic mb-2">{children}</p>
        {author && (
          <cite className="text-sm text-gray-600 font-medium">— {author}</cite>
        )}
      </div>
    </motion.blockquote>
  );
}

// Callout Component
interface CalloutProps {
  children: React.ReactNode;
  type?: 'info' | 'warning' | 'success' | 'insight';
  title?: string;
}

export function Callout({ children, type = 'info', title }: CalloutProps) {
  const variants = {
    info: {
      icon: Info,
      className: 'bg-blue-50 border-blue-200 text-blue-800',
      iconClassName: 'text-blue-500',
    },
    warning: {
      icon: AlertTriangle,
      className: 'bg-yellow-50 border-yellow-200 text-yellow-800',
      iconClassName: 'text-yellow-500',
    },
    success: {
      icon: CheckCircle,
      className: 'bg-green-50 border-green-200 text-green-800',
      iconClassName: 'text-green-500',
    },
    insight: {
      icon: TrendingUp,
      className: 'bg-purple-50 border-purple-200 text-purple-800',
      iconClassName: 'text-purple-500',
    },
  };

  const variant = variants[type];
  const Icon = variant.icon;

  return (
    <motion.div
      className={`my-6 p-4 border-l-4 rounded-r-lg ${variant.className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-start gap-3">
        <Icon
          className={`w-5 h-5 mt-0.5 flex-shrink-0 ${variant.iconClassName}`}
        />
        <div>
          {title && <h4 className="font-semibold mb-2">{title}</h4>}
          <div className="text-sm">{children}</div>
        </div>
      </div>
    </motion.div>
  );
}

// MetricCard Component
interface MetricCardProps {
  number: string;
  trend?: 'up' | 'down';
  label: string;
  subtitle?: string;
}

export function MetricCard({
  number,
  trend,
  label,
  subtitle,
}: MetricCardProps) {
  return (
    <motion.div
      className="my-6 p-6 bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-lg"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-4xl font-bold text-gray-900">{number}</span>
          {trend && (
            <span
              className={`text-sm font-medium ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}
            >
              {trend === 'up' ? '↗' : '↘'}
            </span>
          )}
        </div>
        <p className="text-lg font-medium text-gray-700 mb-1">{label}</p>
        {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
      </div>
    </motion.div>
  );
}

// InsightBox Component
export function InsightBox({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="my-8 p-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-start gap-3">
        <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0" />
        <div>
          <p className="text-lg font-medium leading-relaxed">{children}</p>
        </div>
      </div>
    </motion.div>
  );
}

// ComparisonTable Component
interface ComparisonTableProps {
  data: string[][];
  headers?: string[];
}

export function ComparisonTable({ data, headers }: ComparisonTableProps) {
  return (
    <motion.div
      className="my-8 overflow-hidden border border-gray-200 rounded-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            {headers?.map((header, index) => (
              <th
                key={index}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}

// Timeline Component
interface TimelineEvent {
  date: string;
  title: string;
  description: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

export function Timeline({ events }: TimelineProps) {
  return (
    <motion.div
      className="my-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="space-y-6">
        {events.map((event, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="flex-shrink-0 w-24 text-sm font-medium text-gray-500">
              {event.date}
            </div>
            <div className="flex-shrink-0 w-4 h-4 bg-blue-500 rounded-full mt-1" />
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900 mb-1">
                {event.title}
              </h4>
              <p className="text-gray-600">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// CodeBlock Component
export function CodeBlock({
  children,
  language,
}: {
  children: React.ReactNode;
  language?: string;
}) {
  return (
    <motion.div
      className="my-6 overflow-hidden rounded-lg border border-gray-200"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {language && (
        <div className="bg-gray-100 px-4 py-2 border-b border-gray-200">
          <span className="text-sm font-medium text-gray-700">{language}</span>
        </div>
      )}
      <pre className="p-4 bg-gray-50 overflow-x-auto">
        <code className="text-sm text-gray-800">{children}</code>
      </pre>
    </motion.div>
  );
}

// Export all components for MDX
export const mdxComponents = {
  Quote,
  Callout,
  MetricCard,
  InsightBox,
  ComparisonTable,
  Timeline,
  CodeBlock,
};
