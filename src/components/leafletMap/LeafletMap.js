import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import MarkerClusterGroup from "../markerClusterGroup/MarkerClusterGroup";
import "./leafletMap.scss";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import {
  addCoordinates,
  chooseCoordinates
} from "../../modules/store/actions/coordinate";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

const catMarker = L.icon({
  iconUrl: "/images/cat.svg",
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const dogMarker = L.icon({
  iconUrl: "/images/dog.svg",
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const defaultMarker = L.icon({
  iconUrl: "/images/marker.svg",
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const bunnyMarker = L.icon({
  iconUrl: "/images/bunny.svg",
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const parrotMarker = L.icon({
  iconUrl: "/images/parrot.svg",
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const mouseMarker = L.icon({
  iconUrl: "/images/mouse.svg",
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

class LeafletMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 13
    };
  }

  componentWillMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this.saveLocationInfo.bind(this)
      );
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.newcoords.lat2 && newProps.newcoords.lng2) {
      this.setState = {
        lat: newProps.newcoords.lat2,
        lng: newProps.newcoords.lng2,
        zoom: 13
      };
    }
  }

  saveLocationInfo = position => {
    const { longitude, latitude } = position.coords;
    this.setState({
      lng: longitude,
      lat: latitude,
      zoom: 13
    });
  };

  handleMoveend = ev => {
    //this.saveLocationInfo(ev.sourceTarget.getBounds());
    const { _northEast, _southWest } = ev.sourceTarget.getBounds();
    this.props.addCoordinates(_northEast, _southWest);
  };

  handleMapClick = ev => {
    var location = ev.latlng;
    this.props.chooseCoordinates(location.lat, location.lng);
  };

  refreshNotification(e) {
    var doubleClickEvent = document.createEvent("MouseEvents");
    doubleClickEvent.initEvent("dblclick", true, true);
    e.currentTarget.dispatchEvent(doubleClickEvent); // inside method
    // this.props.refreshNotification('refresh');
  }

  renderMarker = (icon, node) => (
    <Marker
      key={node.id}
      position={[node.latitude, node.longitude]}
      icon={icon}
    >
      <Popup>
        <p>{node.title}</p>
        <Link to={"/n/" + node.id}>KLIKNIJ</Link>
      </Popup>
    </Marker>
  );

  render() {
    const { list } = this.props;

    let dogs = list.filter(item => item.animalType === "Pies");

    let cats = list.filter(item => item.animalType === "Kot");

    let bunnies = list.filter(item => item.animalType === "Królik");

    let mouses = list.filter(item => item.animalType === "Mysz");

    let parrots = list.filter(item => item.animalType === "Papuga");

    let others = list.filter(
      item =>
        item.animalType !== "Pies" &&
        item.animalType !== "Kot" &&
        item.animalType !== "Mysz" &&
        item.animalType !== "Królik" &&
        item.animalType !== "Papuga"
    );

    const isListNotEmpty = list && list.length > 0;

    let position = [this.state.lat, this.state.lng];

    return (
      <>
        <Map
          onMoveend={this.handleMoveend}
          load={this.handleMoveend}
          onClick={this.handleMapClick}
          center={[this.state.lat, this.state.lng]}
          zoom={this.state.zoom}
          doubleClickZoom={false}
          id="map"
          maxZoom={25}
        >
          <TileLayer
            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MarkerClusterGroup>
            {/* {isListNotEmpty && list.map((node) => (
                        <Marker key={node.id} position={[node.lat, node.lng]}>
                                <Popup>
                                    <p>{node.title}</p>
                                    <Link to={"/n/" + node.id}>KLIKNIJ</Link>
                                </Popup>
                        </Marker>
                    ))} */}

            {others.map(node => this.renderMarker(defaultMarker, node))}
            {isListNotEmpty &&
              dogs.map(node => this.renderMarker(dogMarker, node))}
            {isListNotEmpty &&
              cats.map(node => this.renderMarker(catMarker, node))}
            {isListNotEmpty &&
              bunnies.map(node => this.renderMarker(bunnyMarker, node))}
            {isListNotEmpty &&
              mouses.map(node => this.renderMarker(mouseMarker, node))}
            {isListNotEmpty &&
              parrots.map(node => this.renderMarker(parrotMarker, node))}
          </MarkerClusterGroup>
        </Map>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addCoordinates: (latitude, longitude) =>
    dispatch(addCoordinates(latitude, longitude)),
  chooseCoordinates: (latitude, longitude) =>
    dispatch(chooseCoordinates(latitude, longitude))
});

const mapStateToProps = store => ({
  newcoords: store.coordinates
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeafletMap);
