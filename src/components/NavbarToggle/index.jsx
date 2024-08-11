import { FaBars, FaArrowLeft } from "react-icons/fa";
import styles from "./styles.module.css";

export default function NavBarToggle({ toggleNavBar }) {
  return (
    <>
      <div className={styles.navBarToggle} onClick={toggleNavBar}>
        <FaBars size={24} color="#2C3E50" />
      </div>
    </>
  );
}
