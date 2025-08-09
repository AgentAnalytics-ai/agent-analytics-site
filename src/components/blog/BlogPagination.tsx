'use client';

import React from 'react';
import Button from '@/components/ui/Button';
import { useRouter, useSearchParams } from 'next/navigation';

interface BlogPaginationProps {
  currentPage: number;
  totalPages: number;
}

export function BlogPagination({
  currentPage,
  totalPages,
}: BlogPaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const updatePage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', page.toString());
    router.push(`/blog?${params.toString()}`);
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center gap-2 mt-12">
      {currentPage > 1 && (
        <Button
          variant="secondary"
          size="sm"
          onClick={() => updatePage(currentPage - 1)}
        >
          Previous
        </Button>
      )}

      <span className="text-sm text-gray-600 dark:text-gray-400">
        Page {currentPage} of {totalPages}
      </span>

      {currentPage < totalPages && (
        <Button
          variant="secondary"
          size="sm"
          onClick={() => updatePage(currentPage + 1)}
        >
          Next
        </Button>
      )}
    </div>
  );
}
