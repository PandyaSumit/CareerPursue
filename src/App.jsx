import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LandingPage } from './pages/landing'
import { AppLayout } from './Layout/app-layout'
import { Onboarding } from './pages/onboarding'
import { JobListing } from './pages/job-listing'
import { JobPage } from './pages/job'
import { PostJob } from './pages/post-job'
import { SavedJobs } from './pages/saved-job'
import { MyJobs } from './pages/my-job'
import { ThemeProvider } from './components/theme-provider'
import { ProtectedRoute } from './components/protected-route';

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "/onboarding",
          element: (
            <ProtectedRoute>
              <Onboarding />
            </ProtectedRoute>
          ),
        },
        {
          path: "/jobs",
          element: (
            <ProtectedRoute>
              <JobListing />
            </ProtectedRoute>
          ),
        },
        {
          path: "/post-jobs",
          element: (
            <ProtectedRoute>
              <PostJob />
            </ProtectedRoute>
          ),
        },
        {
          path: "/my-jobs",
          element: (
            <ProtectedRoute>
              <MyJobs />
            </ProtectedRoute>
          ),
        },
        {
          path: "/saved-jobs",
          element: (
            <ProtectedRoute>
              <SavedJobs />
            </ProtectedRoute>
          ),
        },
        {
          path: "/job/:id",
          element: (
            <ProtectedRoute>
              <JobPage />
            </ProtectedRoute>
          ),
        },
      ],
    },
  ]);
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
