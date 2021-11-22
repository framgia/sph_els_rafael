import { RouteProps } from 'react-router';
import { lazy } from 'react';

const Quiz = lazy(() => import('@containers/AdminQuizzes/AdminQuizzes'));
const UserAdmin = lazy(() => import('@containers/UsersContainer/UserCon'));
const Question = lazy(() => import("@containers/QuestionCon"));
const Profile = lazy(() => import("@containers/Profile"));
const LearnWords = lazy(() => import("@containers/LearnWords"));
const StudentQuiz = lazy(() => import("@containers/Quizzes"));

export type Page<P = unknown> = RouteProps & {
  path: string;
  isAdmin: boolean;
} & P;

export const routable: Page[] = [
  {
    path: '/quizzes',
    component: Quiz,
    exact: true,
    isAdmin: true,
  },
  {
    path: '/quizzes/:id/question',
    component: Question,
    isAdmin: true,
  },
  {
    path: '/users',
    component: UserAdmin,
    exact: true,
    isAdmin: true,
  }, {
    path: '/profile/:id',
    component: Profile,
    isAdmin: false,
  }
  , {
    path: '/learnWords/:id',
    component: LearnWords,
    isAdmin: false,
  },
  {
    path: '/student/quizzes',
    component: StudentQuiz,
    isAdmin: false,
  }
]

