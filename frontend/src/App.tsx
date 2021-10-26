import {FC,useEffect} from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Layout from './hoc/Layout/Layout';


// function App() {
//   return (
//     <div className="App">
//       <h1 className="text-red-500">yooo</h1>
//     </div>
//   );
// }

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
