'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FiCode, FiAlertTriangle } from 'react-icons/fi';

export default function ErrorSubmissionPage() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    code: '',
    language: 'javascript'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // 1. Make the API call
      const response = await fetch('/api/errors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      // 2. Handle response
      const contentType = response.headers.get('content-type');
      if (!contentType?.includes('application/json')) {
        throw new Error('Invalid response from server');
      }

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to process error');
      }

      if (!data.success || !data.errorId) {
        throw new Error('Invalid response format');
      }

      // 3. Redirect on success
      router.push(`/errors/${data.errorId}`);

    } catch (err) {
      console.error('Submission error:', err);
      setError(
        err instanceof Error ? 
        err.message : 
        'An unknown error occurred'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

 


  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">
        <FiAlertTriangle className="text-yellow-500" />
        Submit Error
      </h1>

      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-1">
            Error Title*
          </label>
          <input
            id="title"
            type="text"
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Briefly describe the error"
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
          />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium mb-1">
          Detailed Description*
        </label>
      <textarea
            id="description"
            required
            rows={4}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="What were you trying to do? What happened instead?"
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
          />
        </div>

        <div>
          <label htmlFor="language" className="block text-sm font-medium mb-1">
            Programming Language*
          </label>
          <select
            id="language"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            value={formData.language}
            onChange={(e) => setFormData({...formData, language: e.target.value})}
          >
            <option value="javascript">JavaScript</option>
            <option value="typescript">TypeScript</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
          </select>
        </div>

        <div>
          <label htmlFor="code" className="block text-sm font-medium mb-1 items-center gap-1">
            <FiCode /> Relevant Code*
          </label>
          <textarea
            id="code"
            required
            rows={8}
            className="w-full px-4 py-2 font-mono text-sm border rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Paste the code causing the error"
            value={formData.code}
            onChange={(e) => setFormData({...formData, code: e.target.value})}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center gap-2 disabled:opacity-50"
        >
          {isSubmitting ? 'Processing...' : 'Submit Error'}
        </button>
      </form>
    </div>
  );
}
