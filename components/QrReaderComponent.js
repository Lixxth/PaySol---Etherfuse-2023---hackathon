import { useState, useRef } from "react";
import QrReader from "react-qr-scanner";

const QrReaderComponent = ({ onScan }) => {
  const [facingMode, setFacingMode] = useState("environment");
  const previewRef = useRef(null);


  const handleToggleCamera = () => {
    setFacingMode(prev => (prev === 'user' ? 'environment' : 'user'));
}
  return (
    <>
      <QrReader
        facingMode={facingMode}
        onError={console.error}
        onScan={onScan}
        style={{ width: "100%" }}
        previewStyle={{ width: "100%" }}
        ref={previewRef}
      />
      <button onClick={handleToggleCamera}>Cambiar Cámara</button>
    </>
  );
};

export default QrReaderComponent;
