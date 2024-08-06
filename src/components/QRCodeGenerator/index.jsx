import { useState } from "react";
import QRCode from "qrcode.react";
import styles from "./styles.module.css";
export default function QRCodeGenerator() {
  const [text, setText] = useState("");

  return (
    <div className={styles.container}>
      <h1>QR Code Generator</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {text && (
        <div className={styles.QRcontainer}>
          <QRCode value={text} size={256} />
        </div>
      )}
    </div>
  );
}
