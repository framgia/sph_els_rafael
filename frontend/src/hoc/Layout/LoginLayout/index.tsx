import { FC, Suspense } from 'react'
import { Redirect, Route, Switch } from "react-router-dom";
import { routable } from '../../../routes/LoginRoutes';

const loginLayout: FC = () => {
  return (
    <main>
      <Switch>
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
          <Redirect to="/login" />
        </Suspense>
      </Switch>
    </main>
  )
}

export default loginLayout

