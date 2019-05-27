import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import MarkerClusterGroup from "../markerClusterGroup/MarkerClusterGroup";
import "./leafletMap.scss";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { addCoordinates } from "../../modules/store/actions/coordinate";

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

  saveLocationInfo(position) {
    const { longitude, latitude } = position.coords;
    this.setState({
      lng: longitude,
      lat: latitude,
      zoom: 13
    });

    // console.log(`longitude: ${this.state.lng} | latitude: ${this.state.lat}`);
  }

  handleMoveend = ev => {
    //this.saveLocationInfo(ev.sourceTarget.getBounds());
    const { _northEast, _southWest } = ev.sourceTarget.getBounds();
    this.props.addCoordinates(_northEast, _southWest);
  };

  render() {
    const { list } = this.props;

    let dogs = list.filter(item => item.animalType === "pies");

    let cats = list.filter(item => item.animalType === "kot");

    let bunnies = list.filter(item => item.animalType === "królik");

    let mouses = list.filter(item => item.animalType === "mysz");

    let parrots = list.filter(item => item.animalType === "papuga");

    let others = list.filter(
      item =>
        item.animalType !== "pies" &&
        item.animalType !== "kot" &&
        item.animalType !== "mysz" &&
        item.animalType !== "królik" &&
        item.animalType !== "papuga"
    );

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this.saveLocationInfo.bind(this)
      );
    }

    const isListNotEmpty = list && list.length > 0;

    let position = [this.state.lat, this.state.lng];

    return (
      <>
        <Map
          onMoveend={this.handleMoveend}
          center={position}
          zoom={this.state.zoom}
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
            {isListNotEmpty &&
              others.map(node => (
                <Marker
                  key={node.id}
                  position={[node.latitude, node.longitude]}
                  icon={defaultMarker}
                >
                  <Popup>
                    <p>{node.title}</p>
                    <Link to={"/n/" + node.id}>KLIKNIJ</Link>
                  </Popup>
                </Marker>
              ))}
            {isListNotEmpty &&
              dogs.map(node => (
                <Marker
                  key={node.id}
                  position={[node.latitude, node.longitude]}
                  icon={dogMarker}
                >
                  <Popup>
                    <p>{node.title}</p>
                    <Link to={"/n/" + node.id}>KLIKNIJ</Link>
                  </Popup>
                </Marker>
              ))}
            {isListNotEmpty &&
              cats.map(node => (
                <Marker
                  key={node.id}
                  position={[node.latitude, node.longitude]}
                  icon={catMarker}
                >
                  <Popup>
                    <p>{node.title}</p>
                    <Link to={"/n/" + node.id}>KLIKNIJ</Link>
                  </Popup>
                </Marker>
              ))}
            {isListNotEmpty &&
              bunnies.map(node => (
                <Marker
                  key={node.id}
                  position={[node.latitude, node.longitude]}
                  icon={bunnyMarker}
                >
                  <Popup>
                    <p>{node.title}</p>
                    <Link to={"/n/" + node.id}>KLIKNIJ</Link>
                  </Popup>
                </Marker>
              ))}
            {isListNotEmpty &&
              mouses.map(node => (
                <Marker
                  key={node.id}
                  position={[node.latitude, node.longitude]}
                  icon={mouseMarker}
                >
                  <Popup>
                    <p>{node.title}</p>
                    <Link to={"/n/" + node.id}>KLIKNIJ</Link>
                  </Popup>
                </Marker>
              ))}
            {isListNotEmpty &&
              parrots.map(node => (
                <Marker
                  key={node.id}
                  position={[node.latitude, node.longitude]}
                  icon={parrotMarker}
                >
                  <Popup>
                    <p>{node.title}</p>
                    <Link to={"/n/" + node.id}>KLIKNIJ</Link>
                  </Popup>
                </Marker>
              ))}
          </MarkerClusterGroup>
        </Map>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addCoordinates: (latitude, longitude) =>
    dispatch(addCoordinates(latitude, longitude))
});

export default connect(
  null,
  mapDispatchToProps
)(LeafletMap);
