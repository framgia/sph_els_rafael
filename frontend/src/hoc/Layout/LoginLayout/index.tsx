import { FC, Suspense } from 'react'
import { Route } from "react-router-dom";
import Wave from '@assets/Images/wave.svg';
import { routable } from '../../../routes/LoginRoutes';

const LoginLayout: FC = () => {

  return (
    <main>
      <img className="fixed hidden lg:block inset-0 h-full" src={Wave} />
      <div
        className="w-screen h-screen flex flex-col justify-center items-center lg:grid lg:grid-cols-2"
      >
        <Suspense fallback={<div>Loading...</div>}>
          {routable.map(
            (route, idx) =>
              route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              )
          )}
        </Suspense>
      </div>
    </main>
  )
}

export default LoginLayout

