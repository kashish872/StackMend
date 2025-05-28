'use client'

import { useEffect, useState } from 'react'

export default function DarkModeToggle() {
  const [mounted, setMounted] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  // Ensure component is mounted before accessing window
  useEffect(() => {
    setMounted(true)

    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    const isDark = savedTheme === 'dark' || (!savedTheme && prefersDark)
    setDarkMode(isDark)
    document.documentElement.classList.toggle('dark', isDark)
  }, [])

  const toggleDarkMode = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    document.documentElement.classList.toggle('dark', newMode)
    localStorage.setItem('theme', newMode ? 'dark' : 'light')
  }

  if (!mounted) return null // avoid hydration mismatch

  return (
    <div className="ml-4 flex items-center space-x-2">
      <span className="text-sm">{darkMode ? 'Dark' : 'Light'}</span>
      <label className="relative inline-block w-12 h-6 cursor-pointer">
        <input
          type="checkbox"
          checked={darkMode}
          onChange={toggleDarkMode}
          className="sr-only"
        />
        <div className="w-full h-full rounded-full bg-gray-300 dark:bg-gray-600 transition-colors duration-300"></div>
        <div
          className={`absolute top-0 left-0 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center ${
            darkMode ? 'translate-x-6' : ''
          }`}
        >
          {darkMode ? '🌙' : '☀️'}
        </div>
      </label>
    </div>
  )
}
