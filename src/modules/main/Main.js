import * as serviceWorker from "./serviceWorker";
import ReactDOM from "react-dom";
import React from "react";
import Wrapper from "../wrapper/Wrapper";
import AppRouter from "../router/AppRouter";
import Header from "../../components/header/Header";
import LeafletMap from "../../components/leafletMap/LeafletMap";
import MapSwitch from "../../components/mapSwitch/MapSwitch";
import nodes from "../../resources/data.json";

const Main = () => {
    return (
        <Wrapper>
            <AppRouter>
                <Header />
                <LeafletMap list={nodes.nodeList} />
                <MapSwitch />
            </AppRouter>
        </Wrapper>
    );
}

export default Main;

ReactDOM.render(<Main />, document.getElementById("root"));


serviceWorker.unregister();
