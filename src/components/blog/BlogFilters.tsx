'use client';

import React from 'react';
import Button from '@/components/ui/Button';
import { Grid, Filter } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';

interface BlogFiltersProps {
  categories: string[];
  currentCategory?: string;
  currentView?: string;
}

export function BlogFilters({
  categories,
  currentCategory,
  currentView,
}: BlogFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const updateSearchParams = (updates: Record<string, string | null>) => {
    const params = new URLSearchParams(searchParams.toString());

    Object.entries(updates).forEach(([key, value]) => {
      if (value === null) {
        params.delete(key);
      } else {
        params.set(key, value);
      }
    });

    router.push(`/blog?${params.toString()}`);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Filters:
          </span>
        </div>

        {/* Category Filter */}
        <select
          className="text-sm border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={currentCategory || ''}
          onChange={(e) => {
            updateSearchParams({
              category: e.target.value || null,
              page: null,
            });
          }}
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* View Toggle */}
      <div className="flex items-center gap-2">
        <Button
          variant={currentView === 'grid' ? 'primary' : 'secondary'}
          size="sm"
          onClick={() => updateSearchParams({ view: 'grid' })}
        >
          <Grid className="w-4 h-4" />
        </Button>
        <Button
          variant={currentView === 'list' ? 'primary' : 'secondary'}
          size="sm"
          onClick={() => updateSearchParams({ view: 'list' })}
        >
          <Filter className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
