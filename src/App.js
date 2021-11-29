// eslint-disable
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import Details from "./Pages/Details";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies/Movies";
import Tv from "./Pages/Tv";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/details/:moviesOrTv/:id">
          <Details />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/tv">
          <Tv />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
