"use client";

import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet/dist/leaflet.css";

import { Button } from "@/components/buttons/Button";
import { Color } from "@/styles/global/Color";
import { useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import styled from "styled-components";
import { Routing } from "../../components/routing/routing";
import { tsp } from "../../function/tsp/tsp";

const MapTest = ({ itemMap }) => {
  const markerRef = useRef(new Array());
  const [radio, setRadio] = useState("distance");
  const [value, setValue] = useState([]);
  const [selectRouting, setSelectRouting] = useState(null);

  return (
    <Contanter>
      <MapContainer
        style={{
          width: "100%",
          border: "0.1rem solid black",
          height: "100%",
        }}
        center={[35.6824, 51.4158]}
        zoom={15}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {selectRouting != null && (
          <Routing
            selectRouting={selectRouting}
            route={{
              lat1: itemMap[value[selectRouting]].lat,
              lan1: itemMap[value[selectRouting]].lan,
              lat2: itemMap[value[selectRouting + 1]].lat,
              lan2: itemMap[value[selectRouting + 1]].lan,
            }}
          />
        )}
        {itemMap.map((it, index) => (
          <Marker
            ref={(ref) => {
              markerRef.current[index] = ref;
            }}
            position={[it.lat, it.lan]}
          >
            <Popup>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <img
                  style={{
                    width: "3rem",
                    height: "3rem",
                    borderRadius: "0.5rem",
                    marginBottom: "1rem",
                  }}
                  src={it.image}
                  alt="notfound"
                />
                <p style={{ margin: "0.1rem" }}>{it.name}</p>
                <p style={{ margin: "0.1rem" }}>
                  {
                    it.bestComment[
                      Math.floor(Math.random() * it.bestComment.length)
                    ]
                  }
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
        {/* <CircleMarker
          ref={markerRef}
          center={[35.6824, 51.4158]}

          // position={[35.6824, 51.4158]}
        ></CircleMarker> */}
      </MapContainer>
      <SelectSpace>
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            onClick={() => setRadio("trafic")}
            type="radio"
            id="trafic"
            name="fav_language"
            value="trafic"
          />
           <Label for="ترافیک">ترافیک</Label>
          <input
            onClick={() => setRadio("comment")}
            type="radio"
            id="comment"
            name="fav_language"
            value="comment"
          />
           <Label for="پیشنهادات">پیشنهادات</Label>
           
          <input
            type="radio"
            id="distance"
            name="fav_language"
            value="distance"
          />
           <Label for="مسافت">مسافت</Label>
          <Button
            bg={Color.Primary}
            radius=".5rem"
            padding=".25rem 2rem"
            hoverColor={Color.secondary}
            fs="white"
            onClick={() => setValue(tsp(itemMap, radio))}
          >
            بزن بریم
          </Button>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {value.length != 0 &&
            value.map((v, index) => {
              return (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "0.3rem",
                  }}
                  onClick={() => setSelectRouting(index)}
                >
                  <ImageR src={itemMap[v].image} alt="NotFound" />
                  <Text>{itemMap[v].name}</Text>
                </div>
              );
            })}
        </div>
      </SelectSpace>
    </Contanter>
  );
};

export default MapTest;
const Label = styled.label`
  margin-left: 0.5rem;
`;
const Text = styled.p`
  font-size: 0.75rem;
`;
const ImageR = styled.img`
  width: 3rem;
  border-radius: 50%;
  margin: 0 0.5rem;
  height: 3rem;
`;
const SelectSpace = styled.div`
  direction: rtl;
  /* width: 30rem;
  background-color: red;
  height: 20rem; */
`;
const Contanter = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  @media screen and (max-width: 640px) {
    height: 20rem;
  }
  /* width: 30rem;
  background-color: red;
  height: 20rem; */
`;

// const Button = styled.button`
//   height: 2rem;
//   width: 5rem;
// `;
