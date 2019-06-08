import * as serviceWorker from "./serviceWorker";
import ReactDOM from "react-dom";
import React from "react";
import Wrapper from "../wrapper/Wrapper";
import AppRouter from "../router/AppRouter";
import Header from "../../components/header/Header";
import LeafletMap from "../../components/leafletMap/LeafletMap";
import MapSwitch from "../../components/mapSwitch/MapSwitch";
import axios from "axios";

class Main extends React.Component {
  state = {
    list: []
  };

  componentDidMount() {
    axios
      .get("https://find-pet-app.herokuapp.com/rest/announcement/all")
      .then(response => {
        const list = response.data;
        console.log(list);
        this.setState({ list });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <Wrapper>
        <AppRouter>
          <LeafletMap list={this.state.list} />
          {/* <MapSwitch /> */}
        </AppRouter>
      </Wrapper>
    );
  }
}

export default Main;

ReactDOM.render(<Main />, document.getElementById("root"));

serviceWorker.unregister();
