import useLocalStorage from "@/hooks/useLocal";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet/dist/leaflet.css";
import { useRouter } from "next/navigation";
import { useCallback, useMemo, useRef, useState } from "react";
import Dropzone from "react-dropzone";
import { useForm } from "react-hook-form";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import MemoDelete from "../../assets/icons/Delete";
import { Color } from "../../styles/global/Color";

import { Button } from "../buttons/Button";
import { Img } from "../divitions/Img";
import { Input } from "../inputs/Input";
import Accept from "../modal/Accept";
import ModalBox from "../modal/Modalbox";
import { P } from "../paragraphs/P";

const AddQrcCard = () => {
  const [imgFile, updateImg] = useState([]);
  // const generateAndSaveBarcode = () => {
  //   // Generate a random barcode value (replace this with your logic)
  //   const counter="counter"
  //   const barcodeValue = `ABC${counter}`;
  //   // Generate the barcode and display it
  //   // JsBarcode("#barcode-container", barcodeValue, {
  //   //   format: "CODE128",
  //   //   displayValue: false,
  //   // });

  // };
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [position, setPosition] = useState({
    lat: 35.8026003,
    lng: 51.4194146,
  });

  function DraggableMarker() {
    const [draggable, setDraggable] = useState(false);

    const markerRef = useRef(null);
    const eventHandlers = useMemo(
      () => ({
        async dragend() {
          const marker = markerRef.current;
          if (marker != null) {
            setPosition(marker.getLatLng());
            const { lat, lng } = position;
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&accept-language=fa`
            );
            const data = await response.json();
            const address = data.display_name;
            setValue("address", address); // This will log the address to the console
          }
        },
      }),
      []
    );
    const toggleDraggable = useCallback(() => {
      setDraggable((d) => !d);
    }, []);

    return (
      <Marker
        draggable={draggable}
        eventHandlers={eventHandlers}
        position={position}
        ref={markerRef}
      >
        <Popup minWidth={90}>
          <span onClick={toggleDraggable}>
            {draggable
              ? "Marker is draggable"
              : "Click here to make marker draggable"}
          </span>
        </Popup>
      </Marker>
    );
  }
  const DropFile = (acceptedFiles: any) => {
    updateImg(acceptedFiles);
    console.log(acceptedFiles);
  };
  const router = useRouter();
  const [modal, setModal] = useState(false);

  const [userData, setUserData] = useLocalStorage("data");
  return (
    <form
      style={{ width: "100%", height: "100%", padding: "0 1rem" }}
      onSubmit={handleSubmit((data) => {
        data = {
          ...data,
          id: uuidv4(),
          comments: [],
          location: position,
        };
        const newData = [...userData.qrc, data];

        if (data.title) {
          setUserData("data.qrc", newData);
          router.push("/");
        } else {
          return;
        }
      })}
    >
      <ModalBox scale={modal} onClick={() => setModal(!modal)}>
        <Accept />
      </ModalBox>

      <CreatCode>
        <FormWrapper dir="column">
          <InputCode {...register("title")} type="text" placeholder="عنوان" />
          <InputCode {...register("subject")} type="text" placeholder="موضوع" />
          <InputCode {...register("tag")} type="text" placeholder="تگ" />
          <InputCode {...register("organ")} type="text" placeholder="مرکز" />
          <Textarea {...register("address")} placeholder="آدرس" />
        </FormWrapper>
        <Contanter>
          <MapContainer
            style={{
              width: "100%",
              height: "100%",
            }}
            center={[35.8026003, 51.4194146]}
            zoom={15}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <DraggableMarker />
          </MapContainer>
        </Contanter>
      </CreatCode>

      <MainContent>
        <TextInput>
          <h3>توضیحات</h3>
          <RichText
            style={{ height: "100%", marginTop: 16 }}
            {...register("explain")}
          />
        </TextInput>
        <FilesWrapper>
          <Files>
            <FilesHead>
              <Dropzone onDrop={DropFile}>
                {({ getRootProps, getInputProps }) => (
                  <section>
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />
                      <ImgUpload>
                        <Img width="2rem" height="2rem" src="images/file.svg" />
                        <P
                          margin="0 .5rem 0 0"
                          fs="0.75rem"
                          color={Color.grayDark}
                        >
                          آپلود عکس
                        </P>
                      </ImgUpload>
                    </div>
                  </section>
                )}
              </Dropzone>
            </FilesHead>
            {imgFile.map((img) => (
              <FileCard>
                <Img width="2rem" height="2rem" src={img.path} />
                <ProgressWrapper>
                  <span>{img.name}</span>
                  <Button hoverColor="transparent" margin="0" padding="0">
                    <MemoDelete fill="red" />
                  </Button>
                  <Progress width="20%" />
                </ProgressWrapper>
              </FileCard>
            ))}
          </Files>
          <UploadFile>
            <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <Upload>
                      <Img src="images/folder.svg" />
                      <P fs="0.75rem">آپلود فایل</P>
                      <P fs="0.625rem" color={Color.grayDark}>
                        فایل های خود را درون کادر کشیده و رها کنید
                      </P>
                    </Upload>
                  </div>
                </section>
              )}
            </Dropzone>
          </UploadFile>
          <Button
            type="submit"
            bg={Color.Primary}
            width="100%"
            radius=".5rem"
            margin="1rem 0 0 0"
            // onClick={() => setModal(!modal)}
          >
            ذخیره
          </Button>
        </FilesWrapper>
      </MainContent>
    </form>
  );
};

export default AddQrcCard;

const Contanter = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 45%;
  height: 12rem;
`;
const CreatCode = styled.div`
  display: flex;

  /* background-color: ${Color.background}; */

  width: 100%;

  border-radius: 0.5rem;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  margin-left: 1rem;
`;

const InputCode = styled(Input)`
  /* flex: 0 0 48%%; */
  width: 49%;

  background-color: transparent;

  border: none;
  border: 1px solid ${Color.gray};

  border-radius: 0.25rem;

  margin: 0;

  height: 2.5rem;
  margin-bottom: 0.5rem;

  &::placeholder {
    color: ${Color.grayDark};
  }
`;

const MainContent = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;

  margin-top: 2rem;
`;

const TextInput = styled.div`
  flex: 0 0 68%;
`;

const RichText = styled.textarea`
  height: 100%;
  width: 100%;
  padding: 1rem;
  outline: none;
  border: none;
  box-shadow: 0 0 1px ${Color.gray50};
  border-radius: 0.5rem;
  border-top: none;

  &:before {
    content: "";
    width: 100%;
    height: 3rem;
    background-color: ${Color.secondary};
    display: block;
    border-radius: 0.5rem 0.5rem 0 0;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 45%;

  margin-top: 1rem;

  border-radius: 0.5rem;
  border: 1px solid ${Color.grayLight};

  padding: 0.5rem;

  resize: none;
  &:focus {
    outline: none;
  }
`;

const FilesWrapper = styled.div`
  display: flex;
  flex-direction: column;

  flex: 0 0 30%;
  height: fit-content;
  margin-top: 2.5rem;
`;
const Files = styled.div`
  border: 1px solid ${Color.grayLight};
  border-radius: 0.5rem;

  height: 300px;

  overflow-y: scroll;

  scrollbar-width: none;
`;

const FilesHead = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${Color.gray};

  /* border: 1px dashed ${Color.secondary}; */
  border-radius: 0.5rem 0.5rem 0 0;

  padding: 0.5rem;

  span {
    color: ${Color.grayDark};
    margin-right: 0.5rem;
  }
`;
const ImgUpload = styled(FilesHead)`
  padding: 0;
  border: none;
`;
const FileCard = styled.div`
  direction: ltr;
  display: flex;
  padding: 0.5rem;
  align-items: center;
`;

const ProgressWrapper = styled.div`
  margin-left: 0.5rem;
  width: 63%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  span {
    text-transform: uppercase;
    font-size: 0.625rem;
  }
`;

interface IProgress {
  width?: string;
}
const Progress = styled.div<IProgress>`
  width: 14rem;
  height: 0.875rem;

  background-color: ${Color.background};

  border-radius: 1rem;

  &:before {
    content: "";
    display: block;
    width: ${({ width }) => width || "0"};
    height: 0.875rem;
    background-color: ${Color.secondary};
    border-radius: 1rem;
  }
`;

const UploadFile = styled.div`
  width: 100%;
  height: 32%;

  border: 1px dashed ${Color.grayLight};
  border-radius: 0.5rem;

  margin-top: 1rem;
`;

const Upload = styled(FilesHead)`
  border: none;
  background-color: transparent;

  flex-direction: column;
  p {
    text-align: center;
    margin-top: 0.5rem;
  }
`;
