"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import QrReader from "react-qr-reader";

const QRCodeReader = () => {
  const [result, setResult] = useState("No result");
  const router = useRouter();
  const handleScan = (data) => {
    if (data) {
      setResult(data);
    }
    if (result !== "No result") {
      router.push("/landing/detail");
    }
  };

  const handleError = (err) => {
    console.error(err);
  };
  const [isScan, setIsScan] = useState(false);

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
      <div>
        {isScan ? (
          <QrReader
            scanDelay={300}
            constraints={{ facingMode: "user" }}
            containerStyle={{ width: "25rem" }}
            onError={handleError}
            onScan={handleScan}
          />
        ) : (
          <div>icon</div>
        )}
        <p>{result != "No result"}</p>
        <button onClick={() => setIsScan(!isScan)} style={{ width: "100%" }}>
          {isScan ? "توقف اسکن" : "شروع اسکن"}
        </button>
      </div>
    </div>
  );
};

export default QRCodeReader;
