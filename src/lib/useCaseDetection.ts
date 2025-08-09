export interface UseCaseCategory {
  category: string;
  confidence: number;
  suggestedServices: string[];
  nextSteps: string[];
  keywords: string[];
}

export function detectUseCase(service: string): UseCaseCategory {
  const challengeLower = service.toLowerCase();

  const patterns = {
    strategy: {
      keywords: [
        'strategy',
        'strategic',
        'planning',
        'roadmap',
        'vision',
        'direction',
      ],
      services: ['Strategic Consulting', 'Digital Transformation'],
      nextSteps: [
        'Schedule strategy workshop',
        'Review current state assessment',
      ],
    },
    leadGen: {
      keywords: [
        'lead',
        'generation',
        'sales',
        'marketing',
        'acquisition',
        'conversion',
      ],
      services: ['Performance Optimization', 'Digital Transformation'],
      nextSteps: ['Audit current marketing funnel', 'Analyze conversion data'],
    },
    data: {
      keywords: [
        'data',
        'analytics',
        'insights',
        'metrics',
        'kpi',
        'dashboard',
      ],
      services: ['Performance Optimization', 'Product Development'],
      nextSteps: ['Data audit and gap analysis', 'KPI framework design'],
    },
    product: {
      keywords: [
        'product',
        'development',
        'feature',
        'launch',
        'mvp',
        'prototype',
      ],
      services: ['Product Development', 'Organizational Development'],
      nextSteps: ['Product roadmap review', 'User research planning'],
    },
    org: {
      keywords: [
        'team',
        'organization',
        'culture',
        'process',
        'workflow',
        'efficiency',
      ],
      services: ['Organizational Development', 'Digital Transformation'],
      nextSteps: ['Organizational assessment', 'Process mapping workshop'],
    },
  };

  let bestMatch: UseCaseCategory = {
    category: 'general',
    confidence: 0,
    suggestedServices: ['Strategic Consulting'],
    nextSteps: ['Schedule consultation call'],
    keywords: [],
  };

  for (const [category, pattern] of Object.entries(patterns)) {
    const matches = pattern.keywords.filter((keyword) =>
      challengeLower.includes(keyword)
    ).length;

    const confidence = matches / pattern.keywords.length;

    if (confidence > bestMatch.confidence) {
      bestMatch = {
        category,
        confidence,
        suggestedServices: pattern.services,
        nextSteps: pattern.nextSteps,
        keywords: pattern.keywords,
      };
    }
  }

  return bestMatch;
}
