import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import FormikExample from '../client/components/Formik/FormikExample';
import DashBoard from '../client/components/DashBoard';
const Router = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/formik" component={FormikExample} />
        <Route exact path="/" component={DashBoard} />
        <Route
          exact
          path="*"
          component={() => {
            return <div>404 Page</div>;
          }}
        />
      </Switch>
    </BrowserRouter>
  );
};
export default Router;
