'use client'

import { auth } from '@/auth';
import { 
  getUserProfile, 
  getUserQuestions,
  getUserActivity,
  getUserStats,
  getUserAchievements,
  getRecommendedContent
} from '@/lib/data';

import { 
  UserProfile, 
  Question, 
  ActivityItem, 
  UserStats,
  Achievement,
  ContentRecommendation
} from '@/lib/definitions';

import Link from 'next/link';
import { 
  FiSettings, 
  FiMessageSquare, 
  FiBookmark, 
  FiAward,
  FiTrendingUp,
  FiClock,
  FiUser,
  FiHelpCircle
} from 'react-icons/fi';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

export default async function DashboardPage() {
  const session = await auth();
  
  if (!session?.user) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Dashboard</h1>
        <p className="text-gray-600">
          Please <Link href="/login" className="text-blue-600 hover:underline">sign in</Link> to view your dashboard.
        </p>
      </div>
    );
  }

  const [
    userProfile, 
    userQuestions,
    recentActivity,
    userStats,
    achievements,
    recommendations
  ] = await Promise.all([
    getUserProfile(session.user.id),
    getUserQuestions(session.user.id),
    getUserActivity(session.user.id),
    getUserStats(session.user.id),
    getUserAchievements(session.user.id),
    getRecommendedContent(session.user.id)
  ]);

  // Data for charts
  const activityData = [
    { name: 'Jan', questions: 3, answers: 5 },
    { name: 'Feb', questions: 2, answers: 7 },
    { name: 'Mar', questions: 5, answers: 4 },
    { name: 'Apr', questions: 4, answers: 6 },
    { name: 'May', questions: 6, answers: 8 },
    { name: 'Jun', questions: 3, answers: 5 },
  ];

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-gray-600 mt-1">
            Welcome back, <span className="font-medium text-gray-800">{userProfile.name}</span>!
            Here's what's happening with your account.
          </p>
        </div>
        <div className="mt-4 sm:mt-0">
          <Link
            href="/profile/edit"
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            <FiSettings className="mr-2" /> Account Settings
          </Link>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-blue-50 text-blue-600 mr-4">
              <FiMessageSquare size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Questions Asked</p>
              <p className="text-2xl font-semibold">{userStats.questionsAsked}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-green-50 text-green-600 mr-4">
              <FiTrendingUp size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Answers Provided</p>
              <p className="text-2xl font-semibold">{userStats.answersGiven}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-purple-50 text-purple-600 mr-4">
              <FiAward size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Reputation</p>
              <p className="text-2xl font-semibold">{userStats.reputation}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-amber-50 text-amber-600 mr-4">
              <FiBookmark size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Saved Items</p>
              <p className="text-2xl font-semibold">{userStats.savedItems}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Activity Chart */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-gray-800">Monthly Activity</h2>
              <select className="text-sm border border-gray-200 rounded-md px-3 py-1">
                <option>Last 6 Months</option>
                <option>Last Year</option>
                <option>All Time</option>
              </select>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={activityData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Bar dataKey="questions" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="answers" fill="#10B981" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Recent Questions */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-gray-800">Your Recent Questions</h2>
              <Link
                href="/questions/ask"
                className="flex items-center text-sm px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Ask Question
              </Link>
            </div>

            {userQuestions.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-500 mb-4">You haven't asked any questions yet.</p>
                <Link
                  href="/questions/ask"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Ask Your First Question
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {userQuestions.slice(0, 5).map((question) => (
                  <div key={question.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                    <Link href={`/questions/${question.id}`}>
                      <h3 className="text-md font-medium text-blue-600 hover:text-blue-800 mb-1">
                        {question.title}
                      </h3>
                    </Link>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {question.tags?.map(tag => (
                        <span key={tag} className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>
                        {question.answerCount} {question.answerCount === 1 ? 'answer' : 'answers'} • 
                        {question.viewCount} views
                      </span>
                      <span>
                        {new Date(question.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                ))}
                {userQuestions.length > 5 && (
                  <div className="pt-2">
                    <Link href="/questions/my-questions" className="text-blue-600 hover:underline text-sm">
                      View all your questions →
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Profile Summary */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mr-4 overflow-hidden">
                {userProfile.avatar ? (
                  <img 
                    src={userProfile.avatar} 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-2xl text-gray-500">
                    {userProfile.name.charAt(0).toUpperCase()}
                  </span>
                )}
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-800">{userProfile.name}</h2>
                <p className="text-gray-600 text-sm">{userProfile.email}</p>
                <p className="text-gray-500 text-xs mt-1">
                  Member since {new Date(userProfile.joinDate).toLocaleDateString()}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <Link 
                href="/profile" 
                className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
              >
                <FiUser className="mr-3 text-gray-400" /> View Profile
              </Link>
              <Link 
                href="/profile/edit" 
                className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
              >
                <FiSettings className="mr-3 text-gray-400" /> Edit Profile
              </Link>
              <Link 
                href="/help" 
                className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
              >
                <FiHelpCircle className="mr-3 text-gray-400" /> Help Center
              </Link>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-800 mb-6">Recent Activity</h2>
            <div className="space-y-4">
              {recentActivity.length === 0 ? (
                <p className="text-gray-500 text-sm">No recent activity to show.</p>
              ) : (
                recentActivity.slice(0, 5).map((activity) => (
                  <div key={activity.id} className="flex items-start">
                    <div className="p-2 bg-gray-100 rounded-lg mr-4">
                      {activity.type === 'question' && <FiMessageSquare className="text-gray-500" />}
                      {activity.type === 'answer' && <FiTrendingUp className="text-gray-500" />}
                      {activity.type === 'achievement' && <FiAward className="text-gray-500" />}
                    </div>
                    <div>
                      <p className="text-sm text-gray-800">{activity.description}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        <FiClock className="inline mr-1" />
                        {new Date(activity.date).toLocaleDateString()} • {activity.timeAgo}
                      </p>
                    </div>
                  </div>
                ))
              )}
              {recentActivity.length > 5 && (
                <div className="pt-2">
                  <Link href="/activity" className="text-blue-600 hover:underline text-sm">
                    View all activity →
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Achievements */}
          {achievements.length > 0 && (
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-lg font-semibold text-gray-800 mb-6">Your Achievements</h2>
              <div className="grid grid-cols-3 gap-4">
                {achievements.slice(0, 6).map((achievement) => (
                  <div key={achievement.id} className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center mb-2">
                      <FiAward size={20} />
                    </div>
                    <p className="text-xs text-center text-gray-700 font-medium">{achievement.name}</p>
                  </div>
                ))}
              </div>
              {achievements.length > 6 && (
                <div className="pt-4 text-center">
                  <Link href="/achievements" className="text-blue-600 hover:underline text-sm">
                    View all {achievements.length} achievements →
                  </Link>
                </div>
              )}
            </div>
          )}

          {/* Recommendations */}
          {recommendations.length > 0 && (
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Recommended For You</h2>
              <div className="space-y-3">
                {recommendations.map((rec) => (
                  <Link 
                    key={rec.id} 
                    href={rec.url}
                    className="block p-3 hover:bg-gray-50 rounded-md transition-colors"
                  >
                    <p className="text-sm font-medium text-gray-800">{rec.title}</p>
                    <p className="text-xs text-gray-500 mt-1">{rec.type} • {rec.source}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}