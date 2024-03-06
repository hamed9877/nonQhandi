import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("../landing/MapTest"), {
  ssr: false, // Disable server-side rendering
  // loading: () => <p>A map is loading</p>,
});
const MapTest = () => {
  return (
    <>
      <Map />
    </>
  );
};
export default MapTest;
