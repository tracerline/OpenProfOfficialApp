
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import {routes} from "./config/routes";
import Login from "./components/Login";
import Home from './components/Home';
import Chess from './components/Chess';


const AppRouter = () => (
     <BrowserRouter>
          <Switch onUpdate={() => window.scrollTo(0, 0)}>
               <Route exact path={routes.login} render={(props)=> <Login {...props} />} />
               <Route exact path={routes.home} render={(props)=> <Home {...props} />} />
               <Route exact path={routes.chest} render={(props)=> <Chess {...props} />} />
               <Redirect from='*' to={routes.login} />
          </Switch>
     </BrowserRouter>
    
);

export default AppRouter;
