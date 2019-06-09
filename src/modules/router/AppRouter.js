import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import NodeListPage from "./../../pages/nodelist/NodeListPage";
import NodePage from "./../../pages/node/NodePage";
import UserNodesPage from "./../../pages/usernodes/UserNodesPage";
import AddAnnounecement from "../../pages/announecements/AddAnnounecement";
import AboutPage from "./../../pages/about/AboutPage";
import ErrorPage from "./../../pages/error/ErrorPage";
import UserPage from "./../../pages/user/UserPage";
import FaqPage from "./../../pages/faq/FaqPage";
import configureStore from "../store/store";
import ReportedPage from "../../pages/reported/ReportedPage";

const store = configureStore();

const AppRouter = ({ children }) => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        {children}
        <Switch>
          <Route path="/" exact component={NodeListPage} />
          <Route path="/n/:id(\d+)" component={NodePage} />
          <Route path="/twoje-ogloszenia" component={UserNodesPage} />
          <Route path="/dodaj-ogloszenie" component={AddAnnounecement} />
          <Route path="/faq" component={FaqPage} />
          <Route path="/o-nas" component={AboutPage} />
          <Route path="/user/:id(\d+)" component={UserPage} />
          <Route path="/zgloszone" component={ReportedPage} />
          <Route component={ErrorPage} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
);

export default AppRouter;
