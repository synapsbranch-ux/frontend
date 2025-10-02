// src/data/pricingData.js

export const pricingPlansData = [
  {
    id: 'starter',
    name: 'Starter',
    price: { monthly: 0, annually: 0 },
    period: 'month',
    description: 'For individuals looking to explore the core features.',
    features: [
      'Up to 50 conversation branches',
      '1 intelligent workspace',
      'Basic knowledge graph',
      'Community support',
    ],
    ctaText: 'Start for Free',
    popular: false,
    subtitle: 'Best for getting started'
  },
  {
    id: 'pro',
    name: 'Pro',
    // Monthly: $35. Annually: $35 * 12 * 0.6 = $252 (which is $21/mo)
    price: { monthly: 35, annually: 21 },
    period: 'month',
    description: 'For professionals who want to maximize their productivity.',
    features: [
      'Unlimited conversation branches',
      'Up to 10 intelligent workspaces',
      'Advanced knowledge graph',
      'AI Research Agent (100 queries/mo)',
      'Priority email support',
    ],
    ctaText: 'Choose Pro',
    popular: true,
    subtitle: 'Most Popular'
  },
  {
    id: 'business',
    name: 'Business',
    // Monthly: $75. Annually: $75 * 12 * 0.6 = $540 (which is $45/mo)
    price: { monthly: 75, annually: 45 },
    period: 'month',
    description: 'For teams that collaborate on complex projects.',
    features: [
      'Everything in Pro, plus:',
      '<strong>14-day free trial</strong>',
      'Team collaboration features',
      'Advanced security features',
      'Dedicated support',
    ],
    ctaText: 'Start Your Trial',
    popular: false,
    subtitle: 'Best for teams'
  },
];