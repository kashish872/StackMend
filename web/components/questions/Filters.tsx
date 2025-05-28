// components/questions/Filters.tsx
import { useState } from 'react';
import { FiFilter, FiChevronDown } from 'react-icons/fi';

export default function Filters() {
  const [activeFilter, setActiveFilter] = useState('newest');

  return (
    <div className="flex items-center gap-3">
      <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300">
        <FiFilter size={16} />
        <span>Filter</span>
        <FiChevronDown size={16} />
      </button>

      <div className="hidden md:flex border-l border-gray-200 dark:border-gray-600 pl-3 gap-1">
        {['newest', 'votes', 'unanswered'].map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-3 py-1 rounded-md text-sm ${activeFilter === filter ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}
