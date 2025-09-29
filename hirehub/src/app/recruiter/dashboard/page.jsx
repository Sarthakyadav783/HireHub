'use client'

import DashboardLayout from '@/components/DashboardLayout'
import {
  HomeIcon,
  PlusIcon,
  BriefcaseIcon,
  UserGroupIcon,
  ChartBarIcon,
  DocumentTextIcon,
  EyeIcon,
} from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Dashboard', href: '/recruiter/dashboard', icon: HomeIcon, current: true },
  { name: 'Post Job', href: '/recruiter/post-job', icon: PlusIcon, current: false },
  { name: 'My Jobs', href: '/recruiter/jobs', icon: BriefcaseIcon, current: false },
  { name: 'Applicants', href: '/recruiter/applicants', icon: UserGroupIcon, current: false },
  { name: 'Analytics', href: '/recruiter/analytics', icon: ChartBarIcon, current: false },
  { name: 'Reports', href: '/recruiter/reports', icon: DocumentTextIcon, current: false },
]

const userNavigation = [
  { name: 'Your profile', href: '/recruiter/profile' },
  { name: 'Settings', href: '/recruiter/settings' },
  { name: 'Sign out', href: '/login' },
]

const stats = [
  { name: 'Active Jobs', value: '8', change: '+2', changeType: 'positive' },
  { name: 'Total Applications', value: '156', change: '+23', changeType: 'positive' },
  { name: 'Interviews Scheduled', value: '12', change: '+5', changeType: 'positive' },
  { name: 'Offers Made', value: '4', change: '+1', changeType: 'positive' },
]

const recentJobs = [
  {
    id: 1,
    title: 'Software Developer Intern',
    company: 'Tech Corp',
    location: 'Remote',
    type: 'Internship',
    applications: 24,
    views: 156,
    postedDate: '2024-01-10',
    status: 'Active',
  },
  {
    id: 2,
    title: 'Frontend Developer',
    company: 'StartupXYZ',
    location: 'San Francisco, CA',
    type: 'Full-time',
    applications: 18,
    views: 89,
    postedDate: '2024-01-08',
    status: 'Active',
  },
  {
    id: 3,
    title: 'Data Science Intern',
    company: 'DataFlow Inc',
    location: 'New York, NY',
    type: 'Internship',
    applications: 32,
    views: 201,
    postedDate: '2024-01-05',
    status: 'Closed',
  },
]

const topApplicants = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'Software Developer Intern',
    experience: '2 years',
    skills: ['React', 'Node.js', 'Python'],
    match: '95%',
    status: 'Shortlisted',
    appliedDate: '2024-01-14',
  },
  {
    id: 2,
    name: 'Mike Chen',
    position: 'Frontend Developer',
    experience: '3 years',
    skills: ['Vue.js', 'TypeScript', 'CSS'],
    match: '92%',
    status: 'Interview Scheduled',
    appliedDate: '2024-01-13',
  },
  {
    id: 3,
    name: 'Lisa Park',
    position: 'Data Science Intern',
    experience: '1 year',
    skills: ['Python', 'Machine Learning', 'SQL'],
    match: '88%',
    status: 'Under Review',
    appliedDate: '2024-01-12',
  },
]

const recentActivity = [
  {
    id: 1,
    action: 'New application received',
    details: 'John Doe applied for Software Developer Intern',
    time: '2 hours ago',
    type: 'application',
  },
  {
    id: 2,
    action: 'Interview completed',
    details: 'Sarah Johnson - Software Developer Intern',
    time: '4 hours ago',
    type: 'interview',
  },
  {
    id: 3,
    action: 'Job posted',
    details: 'Backend Developer position published',
    time: '1 day ago',
    type: 'job',
  },
  {
    id: 4,
    action: 'Offer sent',
    details: 'Mike Chen - Frontend Developer offer sent',
    time: '2 days ago',
    type: 'offer',
  },
]

export default function RecruiterDashboard() {
  const user = { name: 'Jane Smith', role: 'Recruiter' }

  return (
    <DashboardLayout
      navigation={navigation}
      userNavigation={userNavigation}
      user={user}
      title="Recruiter Dashboard"
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
          {/* Recent Jobs */}
          <div className="bg-white shadow dark:bg-gray-800 sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                  Recent Jobs
                </h3>
                <a
                  href="/recruiter/post-job"
                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
                >
                  <PlusIcon className="h-4 w-4 mr-1" />
                  Post New Job
                </a>
              </div>
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
                            <div className="flex items-center space-x-4 mt-1">
                              <span className="text-xs text-gray-400">
                                {job.applications} applications
                              </span>
                              <span className="text-xs text-gray-400">
                                {job.views} views
                              </span>
                              <span className="text-xs text-gray-400">
                                Posted {job.postedDate}
                              </span>
                            </div>
                          </div>
                          <div className="flex-shrink-0">
                            <span
                              className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                                job.status === 'Active'
                                  ? 'bg-green-100 text-green-800'
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
                    href="/recruiter/jobs"
                    className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:hover:bg-gray-600"
                  >
                    View all jobs
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Top Applicants */}
          <div className="bg-white shadow dark:bg-gray-800 sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                Top Applicants
              </h3>
              <div className="mt-5">
                <div className="flow-root">
                  <ul role="list" className="-my-5 divide-y divide-gray-200 dark:divide-gray-700">
                    {topApplicants.map((applicant) => (
                      <li key={applicant.id} className="py-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex-shrink-0">
                            <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                              <UserGroupIcon className="h-6 w-6 text-green-600" />
                            </div>
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                              {applicant.name}
                            </p>
                            <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                              {applicant.position} • {applicant.experience}
                            </p>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {applicant.skills.map((skill) => (
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
                            <p className="text-sm font-medium text-green-600">{applicant.match} match</p>
                            <span
                              className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                                applicant.status === 'Shortlisted'
                                  ? 'bg-blue-100 text-blue-800'
                                  : applicant.status === 'Interview Scheduled'
                                  ? 'bg-yellow-100 text-yellow-800'
                                  : 'bg-gray-100 text-gray-800'
                              }`}
                            >
                              {applicant.status}
                            </span>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6">
                  <a
                    href="/recruiter/applicants"
                    className="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:hover:bg-gray-600"
                  >
                    View all applicants
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
