import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import {
  FaQrcode,
  FaSearch,
  FaTasks,
  FaRegQuestionCircle,
  FaGlobeAmericas,
  FaNetworkWired,
} from "react-icons/fa";

export default function Navbar({ isNavBarOpen, handleAccess, handleLogout }) {
  return (
    <>
      <div className={`${styles.navBar} ${isNavBarOpen ? styles.isOpen : ""}`}>
        <Link onClick={() => handleAccess(0, "QRCodeGenerator")}>
          <FaQrcode />
          QR Code Generator
        </Link>
        <Link onClick={() => handleAccess(1, "IPAddressFinder")}>
          <FaNetworkWired />
          IP Address Finder
        </Link>
        <Link onClick={() => handleAccess(2, "MovieSearchEngine")}>
          <FaSearch />
          Movie Search
        </Link>
        <Link onClick={() => handleAccess(3, "TodoApp")}>
          <FaTasks />
          Todo App
        </Link>
        <Link onClick={() => handleAccess(4, "QuizApp")}>
          <FaRegQuestionCircle />
          Quiz App
        </Link>
        <Link onClick={() => handleAccess(5, "LanguageTranslator")}>
          <FaGlobeAmericas />
          Translator
        </Link>
        <button
          onClick={handleLogout}
          style={{
            marginTop: "20px",
            color: "white",
            backgroundColor: "transparent",
            border: "none",
          }}
        >
          Logout
        </button>
      </div>
    </>
  );
}
