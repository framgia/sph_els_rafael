import { RouteProps } from 'react-router';
import { lazy } from 'react';

const Quiz = lazy(() => import('@containers/AdminQuizzes/AdminQuizzes'));
const UserAdmin = lazy(() => import('@containers/UsersContainer/UserCon'));

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
    path: '/users',
    component: UserAdmin,
    exact: true,
  },
]

