import { useState } from "react";
import QRCode from "qrcode.react";

export default function QRCodeGenerator() {
  const [text, setText] = useState("");

  return (
    <div className="container">
      <h1>QR Code Generator</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {text && (
        <div className="QRcontainer">
          <QRCode value={text} size={256} />
        </div>
      )}
    </div>
  );
}
