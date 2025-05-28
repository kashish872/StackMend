// app/questions/page.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from "next/image";
import avatar1 from "@/components/assets/avatar1.png";
import img from "@/components/assets/teamMember1.png";

import { 
  FiSearch, FiMessageSquare, FiArrowUp, FiCheckCircle, 
  FiClock, FiFilter, FiTrendingUp, FiStar, FiRefreshCw 
} from 'react-icons/fi';

type Question = {
  id: string;
  title: string;
  votes: number;
  answers: number;
  views: number;
  tags: string[];
  author: { name: string; avatar: any; reputation: number };
  asked: string;
  solved: boolean;
  trending: boolean;
  bounty?: number;
};

const mockQuestions: Question[] = [
  {
    id: '1',
    title: 'How to resolve "useEffect missing dependencies" warning in React 18?',
    votes: 42,
    answers: 8,
    views: 1024,
    tags: ['react', 'javascript', 'hooks'],
    author: { name: 'reactExpert', avatar: img , reputation: 5243 },
    asked: '2 hours ago',
    solved: true,
    trending: true
  },
  {
    id: '2',
    title: 'Next.js API route returns 404 in production on Vercel',
    votes: 28,
    answers: 5,
    views: 876,
    tags: ['nextjs', 'vercel', 'api'],
    author: { name: 'nextDev', avatar: img, reputation: 3421 },
    asked: '5 hours ago',
    solved: false,
    trending: true,
    bounty: 50
  },
  {
    id: '3',
    title: 'TypeScript: Proper typing for complex Redux reducers',
    votes: 35,
    answers: 4,
    views: 921,
    tags: ['typescript', 'redux', 'react'],
    author: { name: 'tsMaster', avatar: img, reputation: 7892 },
    asked: '1 day ago',
    solved: true,
    trending:true,
  },
  {
    id: '4',
    title: 'Tailwind CSS dark mode not working with Next.js 14',
    votes: 19,
    answers: 3,
    views: 543,
    tags: ['tailwindcss', 'nextjs', 'darkmode'],
    author: { name: 'cssWizard', avatar: img, reputation: 2156 },
    asked: '3 days ago',
    solved: false,
    trending:true,
  },
  {
    id: '5',
    title: 'Optimizing MongoDB queries for large datasets in Node.js',
    votes: 31,
    answers: 7,
    views: 1243,
    tags: ['mongodb', 'nodejs', 'performance'],
    author: { name: 'dbGuru', avatar: img, reputation: 6543 },
    asked: '1 week ago',
    solved: true,
    trending: true
  },
  {
    id: '6',
    title: 'Optimizing MongoDB queries for large datasets in Node.js',
    votes: 31,
    answers: 7,
    views: 1243,
    tags: ['mongodb', 'nodejs', 'performance'],
    author: { name: 'dbGuru', avatar: img, reputation: 6543 },
    asked: '1 week ago',
    solved: true,
    trending: true
  },
  {
    id: '7',
    title: 'Optimizing MongoDB queries for large datasets in Node.js',
    votes: 31,
    answers: 7,
    views: 1243,
    tags: ['mongodb', 'nodejs', 'performance'],
    author: { name: 'dbGuru', avatar: img, reputation: 6543 },
    asked: '1 week ago',
    solved: true,
    trending: true
  },
  {
    id: '8',
    title: 'Optimizing MongoDB queries for large datasets in Node.js',
    votes: 31,
    answers: 7,
    views: 1243,
    tags: ['mongodb', 'nodejs', 'performance'],
    author: { name: 'dbGuru', avatar: img, reputation: 6543 },
    asked: '1 week ago',
    solved: true,
    trending: true
  },
  {
    id: '9',
    title: 'Optimizing MongoDB queries for large datasets in Node.js',
    votes: 31,
    answers: 7,
    views: 1243,
    tags: ['mongodb', 'nodejs', 'performance'],
    author: { name: 'dbGuru', avatar: img, reputation: 6543 },
    asked: '1 week ago',
    solved: true,
    trending: true
  },
  {
    id: '10',
    title: 'Optimizing MongoDB queries for large datasets in Node.js',
    votes: 31,
    answers: 7,
    views: 1243,
    tags: ['mongodb', 'nodejs', 'performance'],
    author: { name: 'dbGuru', avatar: img, reputation: 6543 },
    asked: '1 week ago',
    solved: true,
    trending: true
  },
  {
    id: '11',
    title: 'Optimizing MongoDB queries for large datasets in Node.js',
    votes: 31,
    answers: 7,
    views: 1243,
    tags: ['mongodb', 'nodejs', 'performance'],
    author: { name: 'dbGuru', avatar: img, reputation: 6543 },
    asked: '1 week ago',
    solved: true,
    trending: true
  },
  {
    id: '12',
    title: 'Optimizing MongoDB queries for large datasets in Node.js',
    votes: 31,
    answers: 7,
    views: 1243,
    tags: ['mongodb', 'nodejs', 'performance'],
    author: { name: 'dbGuru', avatar: img, reputation: 6543 },
    asked: '1 week ago',
    solved: true,
    trending: true
  },
  {
    id: '13',
    title: 'Optimizing MongoDB queries for large datasets in Node.js',
    votes: 31,
    answers: 7,
    views: 1243,
    tags: ['mongodb', 'nodejs', 'performance'],
    author: { name: 'dbGuru', avatar: img, reputation: 6543 },
    asked: '1 week ago',
    solved: true,
    trending: true
  }
];

export default function QuestionsPage() {
  const [activeTab, setActiveTab] = useState<'newest' | 'votes' | 'unanswered'>('newest');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredQuestions = mockQuestions
    .filter(q => q.title.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      if (activeTab === 'votes') return b.votes - a.votes;
      if (activeTab === 'unanswered') return a.answers - b.answers;
      return 0; // Newest is default order
    });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Community Questions</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Find solutions, share knowledge, and collaborate with developers worldwide
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Search and Filter Bar */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <FiSearch className="absolute left-3 top-3.5 text-gray-400" />
              <input
                type="text"
                placeholder="Search questions..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex items-center gap-2">
              <button 
                className={`px-4 py-2 rounded-lg flex items-center gap-2 ${activeTab === 'newest' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200' : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'}`}
                onClick={() => setActiveTab('newest')}
              >
                <FiRefreshCw size={16} />
                Newest
              </button>
              <button 
                className={`px-4 py-2 rounded-lg flex items-center gap-2 ${activeTab === 'votes' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200' : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'}`}
                onClick={() => setActiveTab('votes')}
              >
                <FiTrendingUp size={16} />
                Top Votes
              </button>
              <button 
                className={`px-4 py-2 rounded-lg flex items-center gap-2 ${activeTab === 'unanswered' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200' : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'}`}
                onClick={() => setActiveTab('unanswered')}
              >
                <FiMessageSquare size={16} />
                Unanswered
              </button>
            </div>
          </div>
        </div>

        {/* Questions Stats */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            {filteredQuestions.length} questions found
          </h2>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              <FiTrendingUp className="inline mr-1" />
              {mockQuestions.filter(q => q.trending).length} trending today
            </span>
          </div>
        </div>

        {/* Questions List */}
        <div className="space-y-4">
          {filteredQuestions.map((question, index) => (
            <motion.div
              key={question.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Stats */}
                  <div className="flex-shrink-0 flex md:flex-col items-center gap-4 text-center">
                    <div className={`flex items-center gap-1 ${question.solved ? 'text-green-600' : 'text-gray-500'}`}>
                      <FiArrowUp size={18} />
                      <span className="font-medium">{question.votes}</span>
                    </div>
                    <div className={`flex items-center gap-1 ${question.answers > 0 ? 'text-blue-600' : 'text-gray-500'}`}>
                      <FiMessageSquare size={18} />
                      <span className="font-medium">{question.answers}</span>
                    </div>
                    {question.solved && (
                      <FiCheckCircle className="text-green-500" size={20} />
                    )}
                    {question.bounty && (
                      <div className="bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 px-2 py-1 rounded text-sm">
                        +{question.bounty} pts
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white hover:text-blue-600 cursor-pointer mb-2">
                      {question.title}
                    </h3>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {question.tags.map(tag => (
                        <span 
                          key={tag} 
                          className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded"
                        >
                          {tag}
                        </span>
                      ))}
                      {question.trending && (
                        <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded flex items-center">
                          <FiTrendingUp size={12} className="mr-1" /> Trending
                        </span>
                      )}
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-2">
                        <img 
                          src={question.author.avatar} 
                          alt={question.author.name} 
                          className="w-6 h-6 rounded-full" 
                        />
                        <span>{question.author.name}</span>
                        <span className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded-full">
                          {question.author.reputation} pts
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <FiClock size={14} />
                          {question.asked}
                        </span>
                        <span>{question.views} views</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ask Question Button */}
        <div className="fixed bottom-8 right-8">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 transition">
            <FiMessageSquare size={18} />
            Ask Question
          </button>
        </div>
      </main>
    </div>
  );
}