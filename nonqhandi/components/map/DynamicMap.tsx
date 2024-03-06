import Leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import * as ReactLeaflet from "react-leaflet";

import { useEffect } from "react";

const { MapContainer } = ReactLeaflet;

const Map = ({ children, className, width, height, ...rest }) => {
  let mapClassName;

  if (className) {
    mapClassName = `${mapClassName} ${className}`;
  }

  useEffect(() => {
    (async function init() {
      Leaflet.Icon.Default.mergeOptions({
        iconRetinaUrl: "/assets/home/icons/pin.svg",
        iconUrl: "/assets/home/icons/pin.svg",
        shadowUrl: "",
        iconSize: [50, 50],
      });
    })();
  }, []);

  return (
    <MapContainer className={mapClassName} {...rest}>
      {children(ReactLeaflet, Leaflet)}
    </MapContainer>
  );
};

export default Map;
