import React, { Component } from "react";
import { connect } from "react-redux";
import PageWrapper from "../../components/pageWrapper/PageWrapper";
import SidebarMenu from "../../components/sidebarMenu/SidebarMenu";
import PageContent from "../../components/pageContent/PageContent";
import NodeList from "../../components/nodeList/NodeList";
import SortBar from "../../components/sortBar/SortBar";
import nodes from "../../resources/data.json";
import axios from "axios";
import { Alert } from "react-bootstrap";

class NodeListPage extends Component {
  state = {
    list: ""
  };

  componentDidMount() {
    axios
      .get("https://find-pet-app.herokuapp.com/rest/announcement/all")
      .then(response => {
        console.log(response);
        const list = response.data;
        this.setState({ list });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  componentWillReceiveProps(newProps) {
    if (newProps.coords.northEast && newProps.coords.southWest) {
      const query = [
        newProps.coords.northEast.lat,
        newProps.coords.southWest.lat,
        newProps.coords.northEast.lng,
        newProps.coords.southWest.lng
      ];

      /* Wiem ze powinienem tutaj w paramsach zrobic, ale cos mi nie smigalo to zrobilem template stringa. */
      axios
        .get(
          `https://find-pet-app.herokuapp.com/rest/announcement/all?latitudeLeft=${
            query[1]
          }&longitudeLeft=${query[3]}&latitudeRight=${
            query[0]
          }&longitudeRight=${query[2]}`
        )
        .then(response => {
          console.log(response);
          const list = response.data;
          this.setState({ list });
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }

  render() {
    return (
      <PageWrapper>
        <SidebarMenu />
        <PageContent>
          <SortBar />
          <NodeList list={this.state.list} />
        </PageContent>
      </PageWrapper>
    );
  }
}

const mapStateToProps = store => ({
  coords: store.coordinates
});

export default connect(mapStateToProps)(NodeListPage);
