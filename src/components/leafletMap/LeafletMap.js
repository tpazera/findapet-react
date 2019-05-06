import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';
import './leafletMap.scss';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

class LeafletMap extends Component {
    state = {
        lat: 51.505,
        lng: -0.09,
        zoom: 13,
    }

    render() {
        const {
            list
        } = this.props;

        const isListNotEmpty = list && list.length > 0;

        let position = [this.state.lat, this.state.lng]
        
        return (
            <Map center={position} zoom={this.state.zoom} id="map">
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {isListNotEmpty && list.map((node) => (
                    <Marker key={node.id} position={[node.lat, node.lng]}>
                        <Link to="/o-nas">
                            <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Link>
                    </Marker>
                ))}
                
            </Map>
        )
    }
}

export default LeafletMap;