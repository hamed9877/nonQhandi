import dynamic from "next/dynamic";

const QRCodeReader = dynamic(() => import("./ScanCard"), {
  ssr: false, // Disable server-side rendering
});
const Scan = () => {
  return (
    <>
      <QRCodeReader />
    </>
  );
};
export default Scan;
