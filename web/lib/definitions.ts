export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  joinDate: string;
  bio?: string;
  location?: string;
  website?: string;
}

export interface Question {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt?: string;
  answerCount: number;
  viewCount: number;
  voteCount: number;
  tags?: string[];
  isAnswered?: boolean;
}

export interface ActivityItem {
  id: string;
  type: 'question' | 'answer' | 'comment' | 'achievement' | 'vote';
  description: string;
  date: string;
  timeAgo: string;
  link?: string;
}

export interface UserStats {
  questionsAsked: number;
  answersGiven: number;
  commentsPosted: number;
  reputation: number;
  savedItems: number;
  upvotesReceived: number;
  downvotesReceived: number;
  acceptedAnswers: number;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  dateEarned: string;
  rarity: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
}

export interface ContentRecommendation {
  id: string;
  title: string;
  description: string;
  type: 'question' | 'article' | 'tutorial' | 'discussion';
  source: string;
  url: string;
  relevanceScore: number;
}