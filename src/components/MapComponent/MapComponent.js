import { MapContainer, TileLayer, Marker } from "react-leaflet";

import L from "leaflet";
import { MAP_TAILER_BASE_URL } from "../../constants/apiConstants";

const markerIcon = new L.Icon({
    iconUrl: require("../../assets/png/marker.png"),
    iconSize: [34, 45]
});

const MapComponent = ({ center, zoom }) => {
    const maptailer = {
        maptailer: {
            url: `${MAP_TAILER_BASE_URL}?key=ITWgTcpHT8JDcS5MaBqC`,
            attribution: ""
        }
    };

    return (
        <MapContainer center={center} zoom={zoom}>
            <TileLayer url={maptailer.maptailer.url} attribution={maptailer.maptailer.attribution} />
            <Marker position={[center.lat, center.lng]} icon={markerIcon} />
        </MapContainer>
    );
};

export default MapComponent;
