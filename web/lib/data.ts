import { 
  UserProfile, 
  Question, 
  ActivityItem, 
  UserStats,
  Achievement,
  ContentRecommendation
} from '@/lib/definitions';

// Mock data functions with enhanced data
export async function getUserProfile(userId: string): Promise<UserProfile> {
  return {
    id: userId,
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    avatar: '/avatars/default.jpg',
    joinDate: '2023-01-15',
    bio: 'Senior Developer | Open Source Contributor | Tech Enthusiast',
    location: 'San Francisco, CA',
    website: 'https://alexjohnson.dev'
  };
}

export async function getUserQuestions(userId: string): Promise<Question[]> {
  return [
    {
      id: '1',
      title: 'How to implement authentication in Next.js with middleware?',
      content: 'Looking for best practices on implementing auth in Next.js 14 with App Router.',
      createdAt: '2023-05-10T14:30:00Z',
      updatedAt: '2023-05-12T09:15:00Z',
      answerCount: 3,
      viewCount: 1245,
      voteCount: 8,
      tags: ['nextjs', 'authentication', 'middleware'],
      isAnswered: true
    },
    {
      id: '2',
      title: 'Best state management solution for large React applications in 2024',
      content: 'With so many options available, what are the current best practices?',
      createdAt: '2023-06-22T09:15:00Z',
      answerCount: 5,
      viewCount: 2873,
      voteCount: 15,
      tags: ['react', 'state-management', 'frontend'],
    },
    {
      id: '3',
      title: 'TypeScript utility types for API response validation',
      content: 'How to properly type API responses that have dynamic structures?',
      createdAt: '2023-07-05T16:45:00Z',
      answerCount: 2,
      viewCount: 876,
      voteCount: 4,
      tags: ['typescript', 'api', 'validation'],
    },
    {
      id: '4',
      title: 'Optimizing database queries in a Node.js microservice architecture',
      content: 'Strategies for reducing latency in distributed systems with multiple databases.',
      createdAt: '2023-08-18T11:20:00Z',
      answerCount: 7,
      viewCount: 1532,
      voteCount: 12,
      tags: ['nodejs', 'database', 'microservices', 'performance'],
      isAnswered: true
    },
    {
      id: '5',
      title: 'Implementing real-time features with WebSockets and React',
      content: 'Looking for examples of robust WebSocket implementations with error handling.',
      createdAt: '2023-09-30T14:10:00Z',
      answerCount: 4,
      viewCount: 942,
      voteCount: 6,
      tags: ['react', 'websockets', 'real-time'],
    },
    {
      id: '5',
      title: 'Implementing real-time features with WebSockets and React',
      content: 'Looking for examples of robust WebSocket implementations with error handling.',
      createdAt: '2023-09-30T14:10:00Z',
      answerCount: 4,
      viewCount: 942,
      voteCount: 6,
      tags: ['react', 'websockets', 'real-time'],
    },
    {
      id: '5',
      title: 'Implementing real-time features with WebSockets and React',
      content: 'Looking for examples of robust WebSocket implementations with error handling.',
      createdAt: '2023-09-30T14:10:00Z',
      answerCount: 4,
      viewCount: 942,
      voteCount: 6,
      tags: ['react', 'websockets', 'real-time'],
    },
    {
      id: '5',
      title: 'Implementing real-time features with WebSockets and React',
      content: 'Looking for examples of robust WebSocket implementations with error handling.',
      createdAt: '2023-09-30T14:10:00Z',
      answerCount: 4,
      viewCount: 942,
      voteCount: 6,
      tags: ['react', 'websockets', 'real-time'],
    },
    {
      id: '5',
      title: 'Implementing real-time features with WebSockets and React',
      content: 'Looking for examples of robust WebSocket implementations with error handling.',
      createdAt: '2023-09-30T14:10:00Z',
      answerCount: 4,
      viewCount: 942,
      voteCount: 6,
      tags: ['react', 'websockets', 'real-time'],
    },
    {
      id: '5',
      title: 'Implementing real-time features with WebSockets and React',
      content: 'Looking for examples of robust WebSocket implementations with error handling.',
      createdAt: '2023-09-30T14:10:00Z',
      answerCount: 4,
      viewCount: 942,
      voteCount: 6,
      tags: ['react', 'websockets', 'real-time'],
    }
  ];
}

export async function getUserActivity(userId: string): Promise<ActivityItem[]> {
  return [
    {
      id: '1',
      type: 'answer',
      description: 'You answered a question about Next.js authentication',
      date: '2023-11-15T09:30:00Z',
      timeAgo: '2 days ago',
      link: '/questions/123/answer/456'
    },
    {
      id: '2',
      type: 'achievement',
      description: 'Earned the "Scholar" badge for your helpful answers',
      date: '2023-11-14T14:15:00Z',
      timeAgo: '3 days ago'
    },
    {
      id: '3',
      type: 'question',
      description: 'You asked "How to optimize database queries in microservices?"',
      date: '2023-11-12T16:45:00Z',
      timeAgo: '5 days ago',
      link: '/questions/789'
    },
    {
      id: '4',
      type: 'vote',
      description: 'Your answer received 5 upvotes',
      date: '2023-11-10T11:20:00Z',
      timeAgo: '1 week ago',
      link: '/questions/123/answer/456'
    },
    {
      id: '5',
      type: 'comment',
      description: 'You commented on a React state management discussion',
      date: '2023-11-08T10:05:00Z',
      timeAgo: '1 week ago',
      link: '/questions/456#comment-789'
    },
    {
      id: '6',
      type: 'answer',
      description: 'Your answer was marked as accepted',
      date: '2023-11-05T14:30:00Z',
      timeAgo: '2 weeks ago',
      link: '/questions/123/answer/456'
    }
  ];
}

export async function getUserStats(userId: string): Promise<UserStats> {
  return {
    questionsAsked: 14,
    answersGiven: 27,
    commentsPosted: 42,
    reputation: 845,
    savedItems: 18,
    upvotesReceived: 156,
    downvotesReceived: 11,
    acceptedAnswers: 8
  };
}

export async function getUserAchievements(userId: string): Promise<Achievement[]> {
  return [
    {
      id: '1',
      name: 'Curious',
      description: 'Asked your first question',
      icon: 'question',
      dateEarned: '2023-01-16',
      rarity: 'common'
    },
    {
      id: '2',
      name: 'Scholar',
      description: 'Provided 10 helpful answers',
      icon: 'book',
      dateEarned: '2023-03-05',
      rarity: 'uncommon'
    },
    {
      id: '3',
      name: 'Analyst',
      description: 'Asked a question with 1,000+ views',
      icon: 'trending-up',
      dateEarned: '2023-04-22',
      rarity: 'rare'
    },
    {
      id: '4',
      name: 'Teacher',
      description: 'Had an answer accepted as solution',
      icon: 'award',
      dateEarned: '2023-05-18',
      rarity: 'uncommon'
    },
    {
      id: '5',
      name: 'Expert',
      description: 'Earned 500+ reputation points',
      icon: 'star',
      dateEarned: '2023-07-30',
      rarity: 'rare'
    },
    {
      id: '6',
      name: 'Philanthropist',
      description: 'Received 100+ upvotes on answers',
      icon: 'thumbs-up',
      dateEarned: '2023-09-12',
      rarity: 'epic'
    }
  ];
}

export async function getRecommendedContent(userId: string): Promise<ContentRecommendation[]> {
  return [
    {
      id: '1',
      title: 'Advanced Next.js Authentication Patterns',
      description: 'Explore enterprise-grade auth solutions for Next.js applications',
      type: 'article',
      source: 'Next.js Blog',
      url: '/resources/nextjs-auth-patterns',
      relevanceScore: 0.92
    },
    {
      id: '2',
      title: 'State Management Showdown 2024',
      description: 'Comparison of modern state management libraries',
      type: 'discussion',
      source: 'Community Forum',
      url: '/discussions/state-management-2024',
      relevanceScore: 0.87
    },
    {
      id: '3',
      title: 'Microservices Database Optimization Workshop',
      description: 'Hands-on techniques for optimizing distributed databases',
      type: 'tutorial',
      source: 'Developer Academy',
      url: '/workshops/microservices-db',
      relevanceScore: 0.85
    }
  ];
}