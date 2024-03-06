"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import QrReader from "react-qr-reader";

const QRCodeReader = () => {
  const [result, setResult] = useState("No result");
  const router = useRouter();
  const isScan = useSearchParams().get("scan") === "true";

  const handleScan = (data: any) => {
    if (data) {
      setResult(data);
    }
    if (result !== "No result") {
      router.push("/landing/detail");
    }
  };

  const handleError = (err: any) => {
    console.error(err);
  };
  // const [isScan, setIsScan] = useState(false);

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
            delay={300}
            facingMode="environment"
            onError={handleError}
            onScan={handleScan}
          />
        ) : (
          <div>icon</div>
        )}
        <p>{result != "No result"}</p>
        <button
          // onClick={() => setIsScan(!isScan)}
          onClick={() =>
            isScan ? router.push("/expert/scan") : router.push("?scan=true")
          }
          style={{ width: "100%" }}
        >
          {isScan ? "توقف اسکن" : "شروع اسکن"}
        </button>
      </div>
    </div>
  );
};

export default QRCodeReader;
