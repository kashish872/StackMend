// components/questions/QuestionCard.tsx
import { FiMessageSquare, FiArrowUp, FiClock, FiCheckCircle } from 'react-icons/fi';
import Link from 'next/link';

interface Question {
  id: number;
  title: string;
  votes: number;
  answers: number;
  views: number;
  tags: string[];
  author: { name: string; avatar: string };
  timestamp: string;
  isSolved: boolean;
}

export default function QuestionCard({ question }: { question: Question }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition overflow-hidden">
      <div className="p-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Stats */}
          <div className="flex-shrink-0 flex md:flex-col items-center gap-4 text-center">
            <div className={`flex items-center gap-1 ${question.isSolved ? 'text-green-600' : 'text-gray-500'}`}>
              <FiArrowUp size={18} />
              <span className="font-medium">{question.votes}</span>
            </div>
            <div className={`flex items-center gap-1 ${question.answers > 0 ? 'text-blue-600' : 'text-gray-500'}`}>
              <FiMessageSquare size={18} />
              <span className="font-medium">{question.answers}</span>
            </div>
            {question.isSolved && (
              <FiCheckCircle className="text-green-500" size={20} />
            )}
          </div>

          {/* Content */}
          <div className="flex-grow">
            <Link href={`/questions/${question.id}`}>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white hover:text-blue-600 transition mb-2">
                {question.title}
              </h3>
            </Link>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {question.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded"
                >
                  {tag}
                </span>
              ))}
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
              </div>
              <div className="flex items-center gap-2">
                <FiClock size={14} />
                <span>{question.timestamp}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}