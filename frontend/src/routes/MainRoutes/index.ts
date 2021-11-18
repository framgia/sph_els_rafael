import { RouteProps } from 'react-router';
import { lazy } from 'react';

const Quiz = lazy(() => import('@containers/AdminQuizzes/AdminQuizzes'));
const UserAdmin = lazy(() => import('@containers/UsersContainer/UserCon'));
const Question = lazy(() => import("@containers/QuestionCon"));

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
  },
]

