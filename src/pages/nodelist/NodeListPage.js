import React, { Component } from "react";
import { connect } from "react-redux";
import PageWrapper from "../../components/pageWrapper/PageWrapper";
import Sidebar from "../../components/sidebar/Sidebar";
import PageContent from "../../components/pageContent/PageContent";
import NodeList from "../../components/nodeList/NodeList";
import SortBar from "../../components/sortBar/SortBar";
import nodes from "../../resources/data.json";
import axios from "axios";
import { Alert } from "react-bootstrap";
import { StringDecoder } from "string_decoder";

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

      let req = `https://find-pet-app.herokuapp.com/rest/announcement/all?latitudeLeft=${
        query[1]
      }&longitudeLeft=${query[3]}&latitudeRight=${
        query[0]
      }&longitudeRight=${query[2]}`

      let newColor = newProps.filters.petColor, newType = newProps.filters.petType, newStatus = newProps.filters.petStatus
      if (newColor != undefined && newColor != 'all')  req += `&color=${newColor}`;
      if (newType != undefined && newType != 'all')  req += `&type=${newType}`;
      if (newStatus != undefined && newStatus != 'all')  req += `&status=${newStatus}`;

      /* Wiem ze powinienem tutaj w paramsach zrobic, ale cos mi nie smigalo to zrobilem template stringa. */
      axios
        .get(
          req
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
        <Sidebar />
        <PageContent>
          <SortBar />
          <NodeList list={this.state.list} />
        </PageContent>
      </PageWrapper>
    );
  }
}

const mapStateToProps = store => ({
  coords: store.coordinates,
  filters: store.filters
});

export default connect(mapStateToProps)(NodeListPage);
