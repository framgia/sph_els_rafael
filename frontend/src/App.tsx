import {FC} from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Layout from './hoc/Layout/Layout';



const App:FC = () =>{

  let routes:any = "";
    routes = (
      <>
      <Route path={["/"]} component={Layout} />
      </>
    )


  return(
    <div>
      <Router>
        {routes}
      </Router>
    </div>
  )
}

export default App;
