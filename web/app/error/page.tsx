'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { FiCopy, FiThumbsUp, FiMessageSquare, FiClock, FiCheckCircle } from 'react-icons/fi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark, prism } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { useTheme } from 'next-themes';

interface ErrorDetails {
  id: string;
  title: string;
  description: string;
  code: string;
  language: string;
  createdAt: string;
  aiGeneratedSolution: string;
  userSolutions: Array<{
    id: string;
    content: string;
    author: string;
    upvotes: number;
  }>;
}

export default function ErrorDetailPage() {
  const params = useParams();
  const [error, setError] = useState<ErrorDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const { theme } = useTheme();

  useEffect(() => {
    const fetchErrorDetails = async () => {
      try {
        setIsLoading(true);
        // In a real app, fetch from your API/database
        // This is mock data for demonstration
        const mockData: ErrorDetails = {
          id: params.errorId as string,
          title: "TypeError: Cannot read property 'map' of undefined",
          description: "I'm trying to render a list of items in React, but keep getting this error when the data is loading.",
          code: "const UserList = ({ users }) => {\n  return (\n    <ul>\n      {users.map(user => (\n        <li key={user.id}>{user.name}</li>\n      ))}\n    </ul>\n  );\n};",
          language: "javascript",
          createdAt: new Date().toISOString(),
          aiGeneratedSolution: "This error occurs when trying to call .map() on users when it's undefined. To fix this:\n\n1. Add a null check before mapping:\njs\n{users && users.map(user => (\n  <li key={user.id}>{user.name}</li>\n))}\n\n\n2. Or provide a default empty array:\njs\nconst UserList = ({ users = [] }) => {\n  // ...\n};\n\n\nAlways ensure your data is loaded before rendering.",
          userSolutions: [
            {
              id: "1",
              content: "You can also use optional chaining: {users?.map(user => <li key={user.id}>{user.name}</li>)}",
              author: "react_dev22",
              upvotes: 15
            }
          ]
        };
        
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 500));
        setError(mockData);
      } catch (err) {
        console.error('Failed to fetch error:', err);
        setErrorMessage('Failed to load error details');
      } finally {
        setIsLoading(false);
      }
    };

    fetchErrorDetails();
  }, [params.errorId]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // In a real app, show a toast notification
  };

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
          <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded"></div>
        </div>
      </div>
    );
  }

  if (errorMessage) {
    return (
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
          {errorMessage}
        </div>
      </div>
    );
  }

  if (!error) {
    return (
      <div className="max-w-4xl mx-auto py-8 px-4">
        <p>Error not found</p>
      </div>
    );
  }

  return (
    
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-2">{error.title}</h1>
      <div className="text-sm text-gray-500 mb-6 flex items-center gap-2">
        <span>Posted in {error.language}</span>
        <span>•</span>
        <FiClock size={14} />
        <span>{new Date(error.createdAt).toLocaleDateString()}</span>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Error Description</h2>
        <p className="whitespace-pre-line bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          {error.description}
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Code</h2>
        <SyntaxHighlighter 
          language={error.language} 
          style={theme === 'dark' ? atomDark : prism}
          customStyle={{
            borderRadius: '0.5rem',
            padding: '1.5rem',
            fontSize: '0.875rem',
            lineHeight: '1.5',
            margin: '0',
            backgroundColor: theme === 'dark' ? '#1E1E1E' : '#F9FAFB'
          }}
          showLineNumbers
          wrapLines
        >
          {error.code}
        </SyntaxHighlighter>
        <button 
          onClick={() => copyToClipboard(error.code)}
          className="mt-2 text-sm text-blue-600 dark:text-blue-400 flex items-center gap-1 hover:underline"
        >
          <FiCopy size={14} /> Copy Code
        </button>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-2 flex items-center gap-2">
          <FiThumbsUp /> AI-Generated Solution
        </h2>
        <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
          <div className="whitespace-pre-line mb-4">{error.aiGeneratedSolution}</div>
          <button 
            onClick={() => copyToClipboard(error.aiGeneratedSolution)}
            className="text-sm text-blue-600 dark:text-blue-400 flex items-center gap-1 hover:underline"
          >
            <FiCopy size={14} /> Copy Solution
          </button>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-2 flex items-center gap-2">
          <FiMessageSquare /> Community Solutions
        </h2>
        {error.userSolutions.length > 0 ? (
          error.userSolutions.map((solution) => (
            <div key={solution.id} className="mb-4 p-4 border rounded-lg hover:shadow-sm transition-shadow">
              <div className="flex justify-between items-start mb-2">
                <span className="font-medium">{solution.author}</span>
                <span className="flex items-center gap-1 text-sm text-gray-500">
                  <FiThumbsUp size={14} /> {solution.upvotes}
                </span>
              </div>
              <div className="whitespace-pre-line">{solution.content}</div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 italic">No community solutions yet. Be the first to help!</p>
        )}
      </div>
    </div>
  );
}