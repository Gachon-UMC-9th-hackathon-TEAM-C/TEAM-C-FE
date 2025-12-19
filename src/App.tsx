import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';
import './App.css'
import RootLayout from './layout/RootLayout;';
import NotFound from './pages/NotFound';
import ProtectedLayout from './layout/ProtectedLayout';
import LoginPage from './pages/LoginPage';
import Home from './pages/Home';
import Review from './pages/Review';
import Library from './pages/Library';
import Profile from './pages/Profile';
import LearningCompletedPage from './pages/LearningCompletedPage';
import CardLearningPage from './pages/CardLearningPage';

import OnboardingPage from './pages/OnboardingPage';
const publicRoutes: RouteObject[] = [
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        path: 'login',
        element: <LoginPage />,
      },
    ],
  },
];

const protectedRoutes: RouteObject[] = [
  {
    path: "/",
    element: <ProtectedLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "review",
        element: <Review />,
      },
      {
        path: "library",
        element: <Library />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "learningCompleted",
        element: <LearningCompletedPage/>
      },
      {
        path: "cardlearning",
        element: <CardLearningPage />,
      },
      {
        path:"Onboarding",
        element: <OnboardingPage />,
      },
    ],
  },
];

const router = createBrowserRouter([...publicRoutes, ...protectedRoutes]);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;