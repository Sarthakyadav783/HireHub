'use client'

import DashboardLayout from '@/components/DashboardLayout'
import {
  HomeIcon,
  UserGroupIcon,
  BriefcaseIcon,
  DocumentCheckIcon,
  ChartBarIcon,
  ClipboardDocumentListIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Dashboard', href: '/admin/dashboard', icon: HomeIcon, current: true },
  { name: 'Students', href: '/admin/students', icon: UserGroupIcon, current: false },
  { name: 'Jobs', href: '/admin/jobs', icon: BriefcaseIcon, current: false },
  { name: 'Applications', href: '/admin/applications', icon: DocumentCheckIcon, current: false },
  { name: 'Reports', href: '/admin/reports', icon: ClipboardDocumentListIcon, current: false },
  { name: 'Analytics', href: '/admin/analytics', icon: ChartBarIcon, current: false },
]

const userNavigation = [
  { name: 'Your profile', href: '/admin/profile' },
  { name: 'Settings', href: '/admin/settings' },
  { name: 'Sign out', href: '/login' },
]

const stats = [
  { name: 'Total Students', value: '1,234', change: '+12', changeType: 'positive' },
  { name: 'Active Jobs', value: '89', change: '+5', changeType: 'positive' },
  { name: 'Pending Approvals', value: '23', change: '-3', changeType: 'negative' },
  { name: 'Placement Rate', value: '78%', change: '+4%', changeType: 'positive' },
]

const departmentStats = [
  { name: 'Computer Science', placed: 45, total: 60, rate: '75%' },
  { name: 'Information Technology', placed: 38, total: 50, rate: '76%' },
  { name: 'Electronics', placed: 32, total: 45, rate: '71%' },
  { name: 'Mechanical', placed: 28, total: 40, rate: '70%' },
]

const pendingApprovals = [
  {
    id: 1,
    type: 'Job Posting',
    title: 'Software Engineer - Google',
    company: 'Google',
    submittedBy: 'Recruiter: Jane Smith',
    submittedDate: '2024-01-15',
    priority: 'high',
  },
  {
    id: 2,
    type: 'Student Profile',
    title: 'Profile Update - John Doe',
    company: 'Student',
    submittedBy: 'Student: John Doe',
    submittedDate: '2024-01-14',
    priority: 'medium',
  },
  {
    id: 3,
    type: 'Certificate Request',
    title: 'Internship Completion Certificate',
    company: 'Microsoft',
    submittedBy: 'Student: Alice Johnson',
    submittedDate: '2024-01-13',
    priority: 'low',
  },
]

const recentActivity = [
  {
    id: 1,
    action: 'New job posted',
    details: 'Software Developer at Amazon',
    time: '2 hours ago',
    type: 'job',
  },
  {
    id: 2,
    action: 'Student applied',
    details: 'Sarah Wilson applied to Google internship',
    time: '4 hours ago',
    type: 'application',
  },
  {
    id: 3,
    action: 'Interview scheduled',
    details: 'Mike Chen - Microsoft interview on Jan 20',
    time: '6 hours ago',
    type: 'interview',
  },
  {
    id: 4,
    action: 'Offer accepted',
    details: 'Lisa Park accepted offer from Facebook',
    time: '1 day ago',
    type: 'offer',
  },
]

export default function AdminDashboard() {
  const user = { name: 'Admin User', role: 'Admin' }

  return (
    <DashboardLayout
      navigation={navigation}
      userNavigation={userNavigation}
      user={user}
      title="Admin Dashboard"
    >
      <div className="space-y-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.name}
              className="relative overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:px-6 sm:py-6 dark:bg-gray-800"
            >
              <dt>
                <div className="absolute rounded-md bg-indigo-500 p-3">
                  <ChartBarIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <p className="ml-16 truncate text-sm font-medium text-gray-500 dark:text-gray-400">
                  {stat.name}
                </p>
              </dt>
              <dd className="ml-16 flex items-baseline">
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {stat.value}
                </p>
                <p
                  className={`ml-2 flex items-baseline text-sm font-semibold ${
                    stat.changeType === 'positive'
                      ? 'text-green-600'
                      : stat.changeType === 'negative'
                      ? 'text-red-600'
                      : 'text-gray-500'
                  }`}
                >
                  {stat.change}
                </p>
              </dd>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Pending Approvals */}
          <div className="bg-white shadow dark:bg-gray-800 sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                  Pending Approvals
                </h3>
                <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
                  {pendingApprovals.length} pending
                </span>
              </div>
              <div className="mt-5">
                <div className="flow-root">
                  <ul role="list" className="-my-5 divide-y divide-gray-200 dark:divide-gray-700">
                    {pendingApprovals.map((item) => (
                      <li key={item.id} className="py-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex-shrink-0">
                            <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                              item.priority === 'high' 
                                ? 'bg-red-100' 
                                : item.priority === 'medium' 
                                ? 'bg-yellow-100' 
                                : 'bg-gray-100'
                            }`}>
                              <ExclamationTriangleIcon className={`h-6 w-6 ${
                                item.priority === 'high' 
                                  ? 'text-red-600' 
                                  : item.priority === 'medium' 
                                  ? 'text-yellow-600' 
                                  : 'text-gray-600'
                              }`} />
                            </div>
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                              {item.title}
                            </p>
                            <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                              {item.submittedBy}
                            </p>
                            <p className="text-xs text-gray-400">
                              {item.submittedDate}
                            </p>
                          </div>
                          <div className="flex-shrink-0">
                            <button className="text-indigo-600 hover:text-indigo-500 text-sm font-medium">
                              Review
                            </button>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6">
                  <a
                    href="/admin/approvals"
                    className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:hover:bg-gray-600"
                  >
                    View all approvals
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Department Statistics */}
          <div className="bg-white shadow dark:bg-gray-800 sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                Department Statistics
              </h3>
              <div className="mt-5">
                <div className="flow-root">
                  <ul role="list" className="-my-5 divide-y divide-gray-200 dark:divide-gray-700">
                    {departmentStats.map((dept) => (
                      <li key={dept.name} className="py-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">
                              {dept.name}
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {dept.placed} of {dept.total} placed
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-medium text-gray-900 dark:text-white">
                              {dept.rate}
                            </p>
                            <div className="mt-1 w-20 bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                              <div 
                                className="bg-indigo-600 h-2 rounded-full" 
                                style={{ width: dept.rate }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6">
                  <a
                    href="/admin/analytics"
                    className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:hover:bg-gray-600"
                  >
                    View detailed analytics
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white shadow dark:bg-gray-800 sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
              Recent Activity
            </h3>
            <div className="mt-5">
              <div className="flow-root">
                <ul role="list" className="-my-5 divide-y divide-gray-200 dark:divide-gray-700">
                  {recentActivity.map((activity) => (
                    <li key={activity.id} className="py-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
                            activity.type === 'job' 
                              ? 'bg-blue-100' 
                              : activity.type === 'application' 
                              ? 'bg-green-100' 
                              : activity.type === 'interview' 
                              ? 'bg-yellow-100' 
                              : 'bg-purple-100'
                          }`}>
                            <span className={`text-xs font-medium ${
                              activity.type === 'job' 
                                ? 'text-blue-600' 
                                : activity.type === 'application' 
                                ? 'text-green-600' 
                                : activity.type === 'interview' 
                                ? 'text-yellow-600' 
                                : 'text-purple-600'
                            }`}>
                              {activity.type.charAt(0).toUpperCase()}
                            </span>
                          </div>
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            {activity.action}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {activity.details}
                          </p>
                        </div>
                        <div className="flex-shrink-0 text-sm text-gray-400">
                          {activity.time}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
