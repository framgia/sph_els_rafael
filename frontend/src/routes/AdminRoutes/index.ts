import { RouteProps } from 'react-router';
import { lazy } from 'react';

const Quiz = lazy(() => import('@containers/AdminQuizzes/AdminQuizzes'));
const UserAdmin = lazy(() => import('@containers/UsersContainer/UserCon'));
const Logout = lazy(() => import('@containers/Auth/Logout'));
const Question = lazy(() => import("@containers/QuestionCon"));

export type Page<P = unknown> = RouteProps & {
  path: string;
} & P;

export const routable: Page[] = [
  {
    path: '/',
    component: Quiz,
    exact: true,
  },
  {
    path: '/quiz/:id/question',
    component: Question,
  },
  {
    path: '/users',
    component: UserAdmin,
    exact: true,
  },
  {
    path: '/logout',
    component: Logout,
    exact: true,
  },
]

