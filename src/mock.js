// Mock data for SYNAPS landing page

export const mockPricingPlans = [
  {
    id: 'starter',
    name: 'Starter',
    price: 35,
    period: 'month',
    description: 'Perfect for individual users getting started with non-linear thinking.',
    features: [
      'Up to 5 workspaces',
      'Basic conversation branching',
      'Timeline visualization',
      'Core AI models access',
      'Community support'
    ],
    popular: false,
    ctaText: 'Start Free Trial'
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 75,
    period: 'month',
    description: 'For power users who need advanced features and higher limits.',
    features: [
      'Unlimited workspaces',
      'Advanced branching & merging',
      'Knowledge graph visualization',
      'All AI models including GPT-5',
      'Priority support',
      'Export & backup options'
    ],
    popular: true,
    ctaText: 'Start Free Trial'
  },
  {
    id: 'team',
    name: 'Team',
    price: 100,
    period: 'month',
    description: 'Built for teams that collaborate on complex research and projects.',
    features: [
      'Everything in Pro',
      'Team collaboration features',
      'Shared workspaces',
      'Admin dashboard',
      'Custom integrations',
      'Dedicated support'
    ],
    popular: false,
    ctaText: 'Contact Sales'
  }
];

export const mockTestimonials = [
  {
    id: 1,
    name: 'Dr. Sarah Chen',
    title: 'Research Scientist at MIT',
    content: 'SYNAPS has revolutionized how I approach complex research. The ability to branch conversations and visualize thought processes is game-changing.',
    rating: 5
  },
  {
    id: 2,
    name: 'Marcus Rodriguez',
    title: 'Senior Software Engineer',
    content: 'Finally, a tool that matches how I actually think about problems. The non-linear approach helps me explore solutions I would have missed.',
    rating: 5
  },
  {
    id: 3,
    name: 'Emma Thompson',
    title: 'Product Strategy Lead',
    content: 'The timeline visualization feature has transformed our strategic planning process. We can see how ideas evolve and connect.',
    rating: 5
  }
];

export const mockFeatures = [
  {
    id: 'model-switching',
    title: 'In-Chat Model Switching',
    description: 'Seamlessly switch between different AI models within the same conversation to get diverse perspectives and capabilities.',
    icon: 'MessageSquare'
  },
  {
    id: 'conversation-branching',
    title: 'Conversation Branching',
    description: 'Create multiple conversation paths from any point, exploring different ideas without losing your original train of thought.',
    icon: 'GitBranch'
  },
  {
    id: 'timeline-visualization',
    title: 'Timeline Visualization',
    description: 'Visualize your conversation history and thought processes in an intuitive timeline format with branching paths.',
    icon: 'Timeline'
  },
  {
    id: 'knowledge-graph',
    title: 'Knowledge Graph',
    description: 'Automatically build interconnected knowledge graphs from your conversations and research materials.',
    icon: 'Network'
  },
  {
    id: 'intelligent-workspaces',
    title: 'Intelligent Workspaces',
    description: 'Organize your projects in dedicated workspaces with context-aware AI that learns from your specific domain.',
    icon: 'Layers'
  },
  {
    id: 'ai-research-agent',
    title: 'AI Research Agent',
    description: 'Let our AI agent search across all your conversations, documents, and knowledge base to find relevant insights.',
    icon: 'Search'
  }
];

export const mockStats = {
  activeUsers: '10,000+',
  conversationsBranched: '250,000+',
  knowledgeGraphsCreated: '15,000+',
  averageProductivityIncrease: '40%'
};

// Mock functions for interactivity
export const handleSignup = (email, plan = 'starter') => {
  console.log(`Mock signup for ${email} with ${plan} plan`);
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        message: 'Account created successfully! Check your email for verification.',
        userId: 'mock-user-' + Date.now()
      });
    }, 1000);
  });
};

export const handleNewsletterSignup = (email) => {
  console.log(`Mock newsletter signup for ${email}`);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        message: 'Thank you for subscribing to our newsletter!'
      });
    }, 500);
  });
};

export const handleContactForm = (formData) => {
  console.log('Mock contact form submission:', formData);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        message: 'Your message has been sent! We\'ll get back to you soon.'
      });
    }, 800);
  });
};