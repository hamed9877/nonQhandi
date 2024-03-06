import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { MdOutlineQrCodeScanner } from "react-icons/md";
import QrReader from "react-qr-reader";
import styled from "styled-components";
import { Color } from "../../styles/global/Color";
import { Button } from "../buttons/Button";

const QRCodeReader = () => {
  const [result, setResult] = useState("No result");
  const router = useRouter();
  const handleScan = (data) => {
    if (data) {
      setResult(data);
      router.push("/");
    }
    if (result !== "No result") {
      router.push("/landing/detail");
    }
  };

  const handleError = (err) => {
    console.error(err);
  };
  // const [isScan, setIsScan] = useState(false);

  const isScan = useSearchParams().get("scan") === "true";
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <ScanWrapper>
        {isScan ? (
          <StyledQrc
            facingMode="environment"
            delay={300}
            onError={handleError}
            onScan={handleScan}
          />
        ) : (
          <MdOutlineQrCodeScanner />
        )}
        <p>{result != "No result"}</p>
        <Button
          // onClick={() => setIsScan(!isScan)}
          onClick={() =>
            isScan ? router.push("/expert/scan") : router.push("?scan=true")
          }
          bg={Color.secondary}
          style={{ width: "100%" }}
          radius=".5rem"
          padding=".75rem 0"
        >
          {isScan ? "توقف اسکن" : "شروع اسکن"}
        </Button>
      </ScanWrapper>
    </div>
  );
};

export default QRCodeReader;
const Title = styled.h2`
  align-self: self-start;
`;

const ScanWrapper = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  align-items: center;
  justify-content: center;
  font-size: 25rem;
  color: ${Color.gray50};

  @media screen and (max-width: 640px) {
    font-size: 20rem;
  }
`;
const StyledQrc = styled(QrReader)`
  width: 25rem;

  @media screen and (max-width: 640px) {
    width: 20rem;
  }
`;
