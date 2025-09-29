'use client'

import DashboardLayout from '@/components/DashboardLayout'
import {
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Dashboard', href: '/student/dashboard', icon: HomeIcon, current: true },
  { name: 'Profile', href: '/student/profile', icon: UserIcon, current: false },
  { name: 'Jobs', href: '/student/jobs', icon: BriefcaseIcon, current: false },
  { name: 'Applications', href: '/student/applications', icon: DocumentTextIcon, current: false },
  { name: 'Certificates', href: '/student/certificates', icon: AcademicCapIcon, current: false },
  { name: 'Analytics', href: '/student/analytics', icon: ChartBarIcon, current: false },
]

const userNavigation = [
  { name: 'Your profile', href: '/student/profile' },
  { name: 'Settings', href: '/student/settings' },
  { name: 'Sign out', href: '/login' },
]

const stats = [
  { name: 'Total Applications', value: '12', change: '+2', changeType: 'positive' },
  { name: 'Interviews Scheduled', value: '3', change: '+1', changeType: 'positive' },
  { name: 'Offers Received', value: '1', change: '0', changeType: 'neutral' },
  { name: 'Profile Views', value: '45', change: '+12', changeType: 'positive' },
]

const recentJobs = [
  {
    id: 1,
    title: 'Software Developer Intern',
    company: 'Tech Corp',
    location: 'Remote',
    type: 'Internship',
    status: 'Applied',
    appliedDate: '2024-01-15',
  },
  {
    id: 2,
    title: 'Frontend Developer',
    company: 'StartupXYZ',
    location: 'San Francisco, CA',
    type: 'Full-time',
    status: 'Interview Scheduled',
    appliedDate: '2024-01-12',
  },
  {
    id: 3,
    title: 'Data Science Intern',
    company: 'DataFlow Inc',
    location: 'New York, NY',
    type: 'Internship',
    status: 'Under Review',
    appliedDate: '2024-01-10',
  },
]

const recommendedJobs = [
  {
    id: 1,
    title: 'React Developer',
    company: 'WebTech Solutions',
    location: 'Remote',
    type: 'Full-time',
    match: '95%',
    skills: ['React', 'JavaScript', 'Node.js'],
  },
  {
    id: 2,
    title: 'Python Developer Intern',
    company: 'AI Innovations',
    location: 'Austin, TX',
    type: 'Internship',
    match: '88%',
    skills: ['Python', 'Django', 'Machine Learning'],
  },
]

export default function StudentDashboard() {
  const user = { name: 'John Doe', role: 'Student' }

  return (
    <DashboardLayout
      navigation={navigation}
      userNavigation={userNavigation}
      user={user}
      title="Student Dashboard"
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
          {/* Recent Applications */}
          <div className="bg-white shadow dark:bg-gray-800 sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                Recent Applications
              </h3>
              <div className="mt-5">
                <div className="flow-root">
                  <ul role="list" className="-my-5 divide-y divide-gray-200 dark:divide-gray-700">
                    {recentJobs.map((job) => (
                      <li key={job.id} className="py-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex-shrink-0">
                            <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                              <BriefcaseIcon className="h-6 w-6 text-indigo-600" />
                            </div>
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                              {job.title}
                            </p>
                            <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                              {job.company} • {job.location}
                            </p>
                            <p className="text-xs text-gray-400">
                              Applied on {job.appliedDate}
                            </p>
                          </div>
                          <div className="flex-shrink-0">
                            <span
                              className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                                job.status === 'Applied'
                                  ? 'bg-yellow-100 text-yellow-800'
                                  : job.status === 'Interview Scheduled'
                                  ? 'bg-blue-100 text-blue-800'
                                  : 'bg-gray-100 text-gray-800'
                              }`}
                            >
                              {job.status}
                            </span>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6">
                  <a
                    href="/student/applications"
                    className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:hover:bg-gray-600"
                  >
                    View all applications
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Recommended Jobs */}
          <div className="bg-white shadow dark:bg-gray-800 sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                Recommended for You
              </h3>
              <div className="mt-5">
                <div className="flow-root">
                  <ul role="list" className="-my-5 divide-y divide-gray-200 dark:divide-gray-700">
                    {recommendedJobs.map((job) => (
                      <li key={job.id} className="py-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex-shrink-0">
                            <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                              <BriefcaseIcon className="h-6 w-6 text-green-600" />
                            </div>
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                              {job.title}
                            </p>
                            <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                              {job.company} • {job.location}
                            </p>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {job.skills.map((skill) => (
                                <span
                                  key={skill}
                                  className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-indigo-100 text-indigo-800"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="flex-shrink-0 text-right">
                            <p className="text-sm font-medium text-green-600">{job.match} match</p>
                            <button className="mt-1 text-xs text-indigo-600 hover:text-indigo-500">
                              Apply
                            </button>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6">
                  <a
                    href="/student/jobs"
                    className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:hover:bg-gray-600"
                  >
                    Browse all jobs
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
