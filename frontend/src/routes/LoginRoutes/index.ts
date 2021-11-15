import { RouteProps } from 'react-router';
import { lazy } from 'react';

const Login = lazy(() => import('@containers/Auth'));
const Signup = lazy(() => import('@containers/Signup'));

export type Page<P = unknown> = RouteProps & {
  path: string;
} & P;

export const routable: Page[] = [
  {
    path: '/login',
    component: Login,
    exact: true,
  },
  {
    path: '/signup',
    component: Signup,
    exact: true,
  },
]

