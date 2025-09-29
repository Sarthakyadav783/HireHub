# HireHub - Campus-Centric Internship & Placement Management Portal

A comprehensive Next.js application for managing campus internships and placements, built with modern web technologies and designed for students, recruiters, and administrators.

## 🎯 Project Overview

HireHub solves the chaos of campus placement management by providing a centralized platform where:
- **Students** maintain digital profiles, browse jobs, and track applications
- **Recruiters** post verified internships/placements and manage applicants
- **Admins** oversee the entire process with analytics and approvals

## 🛠️ Tech Stack

- **Frontend**: Next.js 15 (React) with App Router
- **Styling**: TailwindCSS + Headless UI components
- **Backend**: Supabase (PostgreSQL + Auth + Storage + Real-time)
- **Authentication**: Supabase Auth with role-based access control
- **File Storage**: Supabase Storage for documents and resumes
- **Charts**: Recharts for analytics dashboards
- **PDF Generation**: Planned for certificate generation

## 📁 Project Structure

```
hirehub/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.jsx          # Root layout
│   │   ├── page.jsx            # Home page (redirects to login)
│   │   ├── login/              # Authentication pages
│   │   ├── student/
│   │   │   └── dashboard/      # Student dashboard
│   │   ├── admin/
│   │   │   └── dashboard/      # Admin dashboard
│   │   └── recruiter/
│   │       └── dashboard/      # Recruiter dashboard
│   ├── components/             # Reusable UI components
│   │   └── DashboardLayout.jsx # Shared dashboard layout
│   └── lib/
│       └── utils.jsx           # Utility functions
├── public/                     # Static assets
└── package.json               # Dependencies
```

## 🎨 Current Features Implemented

### ✅ Dashboard System
- **Role-based dashboards** for Students, Admins, and Recruiters
- **Responsive design** with mobile-friendly sidebar navigation
- **Modern UI** using TailwindCSS and Headless UI components
- **Dark mode support** built into the design system

### ✅ Student Dashboard
- **Statistics Overview**: Applications, Interviews, Offers, Profile Views
- **Recent Applications**: Track application status and dates
- **Job Recommendations**: ML-powered job matching with percentage scores
- **Skills Display**: Tag-based skill representation
- **Navigation**: Profile, Jobs, Applications, Certificates, Analytics

### ✅ Admin Dashboard
- **System Statistics**: Total Students, Active Jobs, Pending Approvals, Placement Rate
- **Pending Approvals**: Job postings, student profiles, certificate requests
- **Department Analytics**: Placement rates by department with progress bars
- **Recent Activity Feed**: Real-time system activity tracking
- **Priority-based Approval System**: High/Medium/Low priority indicators

### ✅ Recruiter Dashboard
- **Recruitment Metrics**: Active Jobs, Applications, Interviews, Offers
- **Job Management**: Recent job postings with application counts and views
- **Top Applicants**: Candidate matching with skills and status tracking
- **Quick Actions**: Direct links to post new jobs and manage applicants
- **Activity Timeline**: Track recruitment pipeline activities

### ✅ Authentication Flow
- **Role-based login** system (Student/Admin/Recruiter selection)
- **Automatic redirection** to respective dashboards based on user role
- **Session management** and logout functionality

## 📊 Planned Database Schema

### Core Tables Designed:
1. **profiles** - User authentication and basic info
2. **students** - Student-specific data (CGPA, skills, placement status)
3. **recruiters** - Company information and verification status
4. **jobs** - Job postings with requirements and approval workflow
5. **applications** - Application tracking with status management
6. **documents** - File management for resumes, marksheets, certificates
7. **internships** - Internship completion tracking for certificate generation
8. **interviews** - Interview scheduling and feedback management
9. **resume_analytics** - AI-parsed resume data
10. **job_recommendations** - ML-based job matching scores

## 🚀 Planned Advanced Features

### 🤖 AI & ML Features
- **AI Resume Parser**: Extract skills, experience, and education from uploaded resumes
- **ML Job Recommendations**: Match students with relevant opportunities using similarity algorithms
- **Student Clustering**: Group students by skill gaps and placement probability
- **Predictive Analytics**: Identify students needing mentoring vs. placement-ready

### 📅 Integration Features
- **Google Calendar API**: Auto-schedule interviews with calendar integration
- **Document Verification**: Admin approval workflow for student documents
- **Certificate Generation**: Auto-generate internship completion certificates
- **Real-time Notifications**: Updates on application status, interview schedules

### 📈 Analytics Features
- **Department-wise Analytics**: Placement rates, mentor insights, trend analysis
- **Recruiter Analytics**: Application funnel, hiring success rates
- **Student Performance**: Skill gap analysis, interview feedback tracking
- **Admin Insights**: System usage, approval bottlenecks, success metrics

## 🔧 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd hirehub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   # Create .env.local file with Supabase credentials
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Access the application**
   - Open [http://localhost:3000](http://localhost:3000)
   - Test different dashboards:
     - Student: `/student/dashboard`
     - Admin: `/admin/dashboard` 
     - Recruiter: `/recruiter/dashboard`

## 🎯 Current Status

### ✅ Completed
- Project setup with Next.js 15 and TailwindCSS
- Three role-based dashboard layouts
- Responsive UI components with modern design
- Dashboard layout with navigation and user management
- Mock data integration for testing

### 🔄 In Progress
- Database schema finalization
- Supabase integration setup
- Authentication system implementation

### 📋 Next Steps
1. **Database Setup**: Create Supabase tables and relationships
2. **Authentication**: Implement role-based auth with Supabase
3. **Document Management**: Build file upload and verification system
4. **Core Features**: Job posting, application tracking, profile management
5. **Advanced Features**: AI resume parsing, ML recommendations, calendar integration


