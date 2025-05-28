'use client'

import Link from 'next/link'
import SidebarDropdown from './SideBarDropdown'

export default function Sidebar({ isOpen }: { isOpen: boolean }) {
  return (
    <aside
      id="sidebar"
      className={`
        fixed left-0 top-0 h-full w-72 z-40
        transform transition-transform duration-300
        bg-white dark:bg-gray-900 text-gray-900 dark:text-white
        shadow-lg border-r border-gray-200 dark:border-gray-700
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}
    >
      <nav className="p-6 space-y-3 overflow-y-auto h-full">
        <Link
          href="/dashboard"
          className="group flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-700 transition-colors"
        >
          <span className="material-symbols-rounded text-xl bg-gray-100 dark:bg-gray-800 p-1 rounded-md group-hover:bg-indigo-200 dark:group-hover:bg-indigo-600 transition">
            dashboard
          </span>
          <span className="font-medium">Dashboard</span>
        </Link>

        <SidebarDropdown
          icon="calendar_today"
          title="Services"
          items={[
            { label: 'IT Consulting', href: '#' },
            { label: 'Cloud Solutions', href: '#' },
            { label: 'Mobile Apps', href: '#' },
          ]}
        />

        {/* Add more dropdowns or links here if needed */}

        <div className="mt-10 pt-4 border-t border-gray-300 dark:border-gray-700 space-y-2">
          <Link
            href="#"
            className="group flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-700 transition-colors"
          >
            <span className="material-symbols-rounded text-xl bg-gray-100 dark:bg-gray-800 p-1 rounded-md group-hover:bg-indigo-200 dark:group-hover:bg-indigo-600 transition">
              help
            </span>
            <span className="font-medium">Support</span>
          </Link>
          <Link
            href="#"
            className="group flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-red-100 dark:hover:bg-red-700 transition-colors"
          >
            <span className="material-symbols-rounded text-xl bg-gray-100 dark:bg-gray-800 p-1 rounded-md group-hover:bg-red-200 dark:group-hover:bg-red-600 transition">
              logout
            </span>
            <span className="font-medium text-red-600 dark:text-red-400">Sign Out</span>
          </Link>
        </div>
      </nav>
    </aside>
  )
}
