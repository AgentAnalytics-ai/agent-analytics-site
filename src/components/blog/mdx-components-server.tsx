import React from 'react';
import {
  Quote as QuoteIcon,
  AlertTriangle,
  Info,
  CheckCircle,
  TrendingUp,
} from 'lucide-react';

// Quote Component - Lighter blue colors
export function Quote({
  children,
  author,
}: {
  children: React.ReactNode;
  author?: string;
}) {
  return (
    <blockquote className="relative my-4 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-300 rounded-r-lg overflow-hidden">
      <QuoteIcon className="absolute top-4 left-4 w-8 h-8 text-blue-400 opacity-30" />
      <div className="ml-8">
        <div className="text-lg text-gray-800 italic mb-2">{children}</div>
        {author && (
          <cite className="text-sm text-gray-600 font-medium">— {author}</cite>
        )}
      </div>
    </blockquote>
  );
}

// Callout Component - Lighter blue colors
interface CalloutProps {
  children: React.ReactNode;
  type?: 'info' | 'warning' | 'success' | 'insight';
  title?: string;
}

export function Callout({ children, type = 'info', title }: CalloutProps) {
  const variants = {
    info: {
      icon: Info,
      className: 'bg-blue-50 border-l-4 border-blue-300 text-blue-700',
      iconClassName: 'text-blue-400',
    },
    warning: {
      icon: AlertTriangle,
      className: 'bg-yellow-50 border-l-4 border-yellow-300 text-yellow-700',
      iconClassName: 'text-yellow-400',
    },
    success: {
      icon: CheckCircle,
      className: 'bg-green-50 border-l-4 border-green-300 text-green-700',
      iconClassName: 'text-green-400',
    },
    insight: {
      icon: TrendingUp,
      className: 'bg-purple-50 border-l-4 border-purple-300 text-purple-700',
      iconClassName: 'text-purple-400',
    },
  };

  const variant = variants[type];
  const Icon = variant.icon;

  return (
    <div
      className={`my-4 p-4 rounded-r-lg overflow-hidden ${variant.className}`}
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
    </div>
  );
}

// MetricCard Component - Lighter colors
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
    <div className="my-4 p-6 bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-lg overflow-hidden">
      <div className="text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-4xl font-bold text-gray-900">{number}</span>
          {trend && (
            <span
              className={`text-sm font-medium ${trend === 'up' ? 'text-green-500' : 'text-red-500'}`}
            >
              {trend === 'up' ? '↗' : '↘'}
            </span>
          )}
        </div>
        <p className="text-lg font-medium text-gray-700 mb-1">{label}</p>
        {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
      </div>
    </div>
  );
}

// InsightBox Component - Lighter blue colors
export function InsightBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-4 p-6 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg shadow-lg overflow-hidden">
      <div className="flex items-start gap-3">
        <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0" />
        <div>
          <div className="text-lg font-medium leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
}

// ComparisonTable Component - Lighter colors
interface ComparisonTableProps {
  data: string[][];
  headers?: string[];
}

export function ComparisonTable({ data, headers }: ComparisonTableProps) {
  return (
    <div className="my-4 overflow-hidden border border-gray-200 rounded-lg">
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
    </div>
  );
}

// Timeline Component - Lighter blue colors
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
    <div className="my-4">
      <div className="space-y-4">
        {events.map((event, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="flex-shrink-0 w-24 text-sm font-medium text-gray-500">
              {event.date}
            </div>
            <div className="flex-shrink-0 w-4 h-4 bg-blue-400 rounded-full mt-1" />
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900 mb-1">
                {event.title}
              </h4>
              <p className="text-gray-600">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// CodeBlock Component - Lighter colors
export function CodeBlock({
  children,
  language,
}: {
  children: React.ReactNode;
  language?: string;
}) {
  return (
    <div className="my-4 overflow-hidden rounded-lg border border-gray-200">
      {language && (
        <div className="bg-gray-100 px-4 py-2 border-b border-gray-200">
          <span className="text-sm font-medium text-gray-700">{language}</span>
        </div>
      )}
      <pre className="p-4 bg-gray-50 overflow-x-auto">
        <code className="text-sm text-gray-800">{children}</code>
      </pre>
    </div>
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
