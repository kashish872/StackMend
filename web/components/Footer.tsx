import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 dark:text-white mt-auto px-4 py-12 text-sm font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 transition-all duration-300">
        {/* About */}
        <div className="col-span-1 md:col-span-2">
          <h4 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-4">About StackMend</h4>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            StackMend is an AI-powered platform where developers collaborate to fix bugs, enhance code quality, and learn from real-world issues—faster than ever.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            {['Home', 'Questions', 'Dashboard', 'Help Center', 'About Us'].map((text, i) => (
              <li key={i}>
                <Link
                  href="/"
                  className="transition-transform duration-200 ease-out hover:text-indigo-600 hover:translate-x-1 inline-block"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Developer Tools */}
        <div>
          <h4 className="font-semibold mb-4">Developer Tools</h4>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            {['Debug Playground', 'Code Formatter', 'AI Suggestions', 'Bug Tier Board', 'StackMend API'].map((tool, i) => (
              <li key={i}>
                <Link
                  href="#"
                  className="transition-transform duration-200 ease-out hover:text-indigo-600 hover:translate-x-1 inline-block"
                >
                  {tool}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Bugs */}
        <div>
          <h4 className="font-semibold mb-4">Recently Fixed Bugs 🐞</h4>
          <ul className="space-y-2 text-xs text-gray-600 dark:text-gray-400">
            <li><code className="text-green-600 dark:text-green-400">NullPointerException</code> in Java</li>
            <li><code className="text-green-600 dark:text-green-400">TypeError</code> in JS – fixed with optional chaining</li>
            <li><code className="text-green-600 dark:text-green-400">Segmentation Fault</code> in C++</li>
            <li><code className="text-green-600 dark:text-green-400">AttributeError</code> in Python</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-semibold mb-4">Join Our Newsletter</h4>
          <form className="space-y-3">
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-all duration-200"
            >
              Subscribe
            </button>
          </form>
          <div className="mt-4 flex space-x-4 text-sm text-gray-600 dark:text-gray-400">
            {[
              { name: '🐦 Twitter', href: '#' },
              { name: '💼 LinkedIn', href: '#' },
              { name: '💬 Discord', href: '#' },
            ].map((social, i) => (
              <Link
                key={i}
                href={social.href}
                className="hover:text-indigo-500 transition-transform duration-200 hover:-translate-y-0.5"
              >
                {social.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Notice */}
      <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-6 text-center text-xs text-gray-500 dark:text-gray-400">
        © 2025 StackMend. Built with ❤️ for developers. |{' '}
        <Link href="#" className="hover:text-indigo-500 transition-colors duration-200">Privacy Policy</Link> ·{' '}
        <Link href="#" className="hover:text-indigo-500 transition-colors duration-200">Terms of Service</Link>
      </div>
    </footer>
  )
}
