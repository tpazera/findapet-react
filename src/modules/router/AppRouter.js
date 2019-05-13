import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NodeListPage from "./../../pages/nodelist/NodeListPage";
import NodePage from "./../../pages/node/NodePage";
import UserNodesPage from "./../../pages/usernodes/UserNodesPage";
import AddAnnounecement from "../../pages/announecements/AddAnnounecement";
import AboutPage from "./../../pages/about/AboutPage";
import ErrorPage from "./../../pages/error/ErrorPage";

const AppRouter = ({ children }) => (
  <BrowserRouter>
    <div>
      {children}
      <Switch>
        <Route path="/" exact component={NodeListPage} />
        <Route path="/n/:id(\d+)" component={NodePage} />
        <Route path="/twoje-zgloszenia" component={UserNodesPage} />
        <Route path="/dodaj-ogloszenie" component={AddAnnounecement} />
        <Route path="/o-nas" component={AboutPage} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
