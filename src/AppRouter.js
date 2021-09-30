import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./container/home";


function AppRouter() {
  return (
    <div style={{}}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default AppRouter;
