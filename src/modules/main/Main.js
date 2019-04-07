import * as serviceWorker from "./serviceWorker";
import ReactDOM from "react-dom";
import React from "react";
import "./main.scss";
import Wrapper from "../wrapper/Wrapper";
import AppRouter from "../router/AppRouter";
import Header from "../../components/header/Header";
import LeafletMap from "../../components/leafletMap/LeafletMap";

const Main = () => {
    return (
        <Wrapper>
            <AppRouter>
                <Header />
                <LeafletMap />
            </AppRouter>
        </Wrapper>
    );
}

export default Main;

ReactDOM.render(<Main />, document.getElementById("root"));


serviceWorker.unregister();
