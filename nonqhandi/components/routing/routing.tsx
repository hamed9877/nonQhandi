import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import React, { useEffect } from "react";
import { useMap } from "react-leaflet";
export const Routing: React.FC<{
  color?: number;
  selectRouting?: number;
  route: {
    lat1: number;
    lan1: number;
    lat2: number;
    lan2: number;
  };
}> = ({ selectRouting, route }) => {
  const map = useMap();

  useEffect(() => {
    console.log("ical");

    if (!map) return;
    const colorList = ["#006600", "#33cc33", "#ffff66", "#ff9966", "#ff0066"];
    const routingControl = L.Routing.control({
      lineOptions: {
        styles: [{ color: colorList[4], opacity: 0.7, weight: 5 }],
      },
      waypoints: [
        L.latLng(route.lat1, route.lan1),
        L.latLng(route.lat2, route.lan2),
      ],
      routeWhileDragging: true,
    }).addTo(map);

    return () => map.removeControl(routingControl);
  }, [selectRouting]);

  return null;
};
