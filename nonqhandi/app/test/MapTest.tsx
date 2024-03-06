"use client";

// import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

import { useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import styled from "styled-components";
import { Routing } from "../../components/routing/routing";
import { tsp } from "../../function/tsp/tsp";

const MapTest = () => {
  const markerRef = useRef(new Array());
  const itemMap = [
    {
      num: [1, 1, 100],
      lat: 35.6797523,
      lan: 51.4205181,
      name: "کاخ گلستان تهران",
      bestComment: [
        "خیلی تجربه خوبی بود",
        "مکان بسیار زیبایی بود",
        "به دل من خیلی نشست",
      ],
    },
    {
      num: [1, 0, 90],
      lat: 35.817187,
      lan: 51.4192838,
      name: "مجموعه کاخ سعد آباد",
      bestComment: ["چقدر شلوغ بود", "خیلی ضعیف", "همه چیز گران بود"],
    },
    {
      num: [1, 0, 50],
      lat: 35.6868334,
      lan: 51.4120674,
      name: "موزه ایران باستان",
      bestComment: [
        "خیلی ترافیک بود",
        "چرا برخورد کارکنانش بد بود؟",
        "اضلا خوب نبود",
      ],
    },
    {
      num: [1, 1, 20],
      lat: 35.8239956,
      lan: 51.420102,
      name: "دربند",
      bestComment: [
        "هوای خیلی خوبی داشت",
        "رستوران زعفران خیلی زیبا بود",
        "بترین تجربه زندگی",
      ],
    },
    {
      num: [1, 0, 30],
      lat: 35.8026003,
      lan: 51.4194146,
      name: "باغ فردوس تهران",
      bestComment: [
        "جای پارک سخت گیر میاد",
        "بلیط گرانی داشت",
        "بدترین جایی که دیدم",
      ],
    },
  ];
  const [radio, setRadio] = useState("distance");
  const [value, setValue] = useState([]);
  const [selectRouting, setSelectRouting] = useState(null);
  console.log(selectRouting);
  return (
    <Contanter>
      <MapContainer
        style={{
          width: "100%",
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
              {it.name}
              <br />
              <p>
                {
                  it.bestComment[
                    Math.floor(Math.random() * it.bestComment.length)
                  ]
                }
              </p>
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
        <input
          onClick={() => setRadio("trafic")}
          type="radio"
          id="html"
          name="fav_language"
          value="HTML"
        />
         <label for="ترافیک">ترافیک</label>
        <input
          onClick={() => setRadio("comment")}
          type="radio"
          id="css"
          name="fav_language"
          value="CSS"
        />
         <label for="پیشنهادات">پیشنهادات</label>
         
        <input
          type="radio"
          id="javascript"
          name="fav_language"
          value="JavaScript"
        />
         <label for="مسافت">مسافت</label>
        <Button onClick={() => setValue(tsp(itemMap, radio))}>بزن بریم</Button>
        {value.length != 0 &&
          value.map((v, index) => {
            return (
              index != itemMap.length - 1 && (
                <div
                  style={{ display: "flex" }}
                  onClick={() => setSelectRouting(index)}
                >
                  <p>{itemMap[v].name}</p>
                  <p>---</p>
                  <p>{itemMap[value[index + 1]].name}</p>
                </div>
              )
            );
          })}
      </SelectSpace>
    </Contanter>
  );
};

export default MapTest;

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
  /* width: 30rem;
  background-color: red;
  height: 20rem; */
`;

const Button = styled.button`
  height: 2rem;
  width: 5rem;
`;
