import { useState } from "react";
import axios from "axios";
import styles from "./styles.module.css";
export default function IPAddressFinder() {
  const [ip, setIp] = useState("");
  const [ipData, setIpData] = useState(null);

  const findIP = async () => {
    try {
      const response = await axios.get(`https://ipinfo.io/${ip}/json`);
      setIpData(response.data);
    } catch (error) {
      console.error("Error fetching IP address data:", error);
    }
  };

  return (
    <div className={styles.container}>
      <h1>IP Address Finder</h1>
      <input
        type="text"
        value={ip}
        onChange={(e) => setIp(e.target.value)}
        placeholder="Enter IP address"
      />
      <button onClick={findIP}>Find IP</button>
      {ipData && (
        <div className={styles.resultsContainer}>
          <p>
            <strong>IP:</strong> {ipData.ip}
          </p>
          <p>
            <strong>Location:</strong> {ipData.city}, {ipData.region},{" "}
            {ipData.country}
          </p>
          <p>
            <strong>ISP:</strong> {ipData.org}
          </p>
        </div>
      )}
    </div>
  );
}
