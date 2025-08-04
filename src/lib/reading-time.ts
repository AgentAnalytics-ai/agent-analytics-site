export function calculateReadingTime(content: string, wordsPerMinute: number = 200): string {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  
  if (minutes < 1) {
    return 'Less than 1 min read';
  } else if (minutes === 1) {
    return '1 min read';
  } else {
    return `${minutes} min read`;
  }
}

export function calculateReadingTimeFromWords(wordCount: number, wordsPerMinute: number = 200): string {
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  
  if (minutes < 1) {
    return 'Less than 1 min read';
  } else if (minutes === 1) {
    return '1 min read';
  } else {
    return `${minutes} min read`;
  }
} 