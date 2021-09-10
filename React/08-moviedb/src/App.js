import {Route, Switch} from "react-router-dom"
import SingleMovie from "./Pages/SingleMovie";
import Home from "./Pages/Home";
import Error from './Pages/Error'


function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/movies/:id">
        <SingleMovie/>
      </Route>
      <Route path="*">
        <Error/>
      </Route>
      
    </Switch>
  );
}

export default App;
