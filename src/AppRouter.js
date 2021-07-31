
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import {routes} from "./config/routes";
import Login from "./components/Login";


const AppRouter = () => (
     <BrowserRouter>
          <Switch onUpdate={() => window.scrollTo(0, 0)}>
               <Route exact path={routes.login} render={(props)=> <Login {...props} />} />
               <Route exact path={routes.home} render={(props)=> <Login {...props} />} />
               <Redirect from='*' to={routes.home} />
               
          </Switch>
     </BrowserRouter>
    
);

export default AppRouter;
