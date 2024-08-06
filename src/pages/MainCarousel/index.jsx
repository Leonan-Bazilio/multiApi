
import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import {
  Route,
  Routes,
  Navigate,
  useNavigate,
  useLocation,
  Link,
} from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import {
  FaQrcode,
  FaSearch,
  FaTasks,
  FaRegQuestionCircle,
  FaGlobeAmericas,
  FaNetworkWired,
  FaBars,
  FaArrowLeft,
} from "react-icons/fa";
import QRCodeGenerator from "../../components/QRCodeGenerator";
import IPAddressFinder from "../../components/IPAddressFinder";
import MovieSearchEngine from "../../components/MovieSearch";
import TodoApp from "../../components/TodoApp";
import QuizApp from "../../components/QuizApp";
import LanguageTranslator from "../../components/LanguageTranslator";
import Login from "../../components/Login";

import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function MainCarousel() {
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);
  const [currentComponent, setCurrentComponent] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const navigate = useNavigate(); // Hook para navegação.

   
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

   
  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate("/qrcode-generator");
  };

   
  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate("/");
  };

  
  const toggleNavBar = () => {
    setIsNavBarOpen(!isNavBarOpen);
  };

   
  const handleAccess = (index, component) => {
    setCarouselIndex(index);
    setCurrentComponent(component);
  };

   
  const handleReturn = () => {
    setCurrentComponent(null);
  };

   
  const renderComponent = () => {
    switch (currentComponent) {
      case "QRCodeGenerator":
        return <QRCodeGenerator />;
      case "IPAddressFinder":
        return <IPAddressFinder />;
      case "MovieSearchEngine":
        return <MovieSearchEngine />;
      case "TodoApp":
        return <TodoApp />;
      case "QuizApp":
        return <QuizApp />;
      case "LanguageTranslator":
        return <LanguageTranslator />;
      default:
        return null;
    }
  };

  
  return (
    <div className={styles.appContainer}>
      <div className={styles.navBarToggle} onClick={toggleNavBar}>
        <FaBars size={24} color="#2C3E50" />
      </div>
      {!isAuthenticated ? (
        <div className={styles.mainContent}>
          <Login onLogin={handleLogin} />
        </div>
      ) : (
        <>
          <div
            className={`${styles.navBar} ${isNavBarOpen ? styles.isOpen : ""}`}
          >
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
          <div className={styles.mainContent}>
            {currentComponent ? (
              <>
                {renderComponent()}
                <div className={styles.returnButton} onClick={handleReturn}>
                  <FaArrowLeft /> Return
                </div>
              </>
            ) : (
              <div className={styles.carouselContainer}>
                <Carousel
                  className={styles.customCarousel}
                  showArrows={true}
                  showThumbs={false}
                  infiniteLoop={true}
                  autoPlay={true}
                  interval={5000}
                  selectedItem={carouselIndex}
                  onChange={(index) => setCarouselIndex(index)}
                >
                  <div className={styles.carouselItem}>
                    <h2>QR Code Generator</h2>
                    <button onClick={() => handleAccess(0, "QRCodeGenerator")}>
                      Acessar
                    </button>
                  </div>
                  <div className={styles.carouselItem}>
                    <h2>IP Address Finder</h2>
                    <button onClick={() => handleAccess(1, "IPAddressFinder")}>
                      Acessar
                    </button>
                  </div>
                  <div className={styles.carouselItem}>
                    <h2>Movie Search Engine</h2>
                    <button
                      onClick={() => handleAccess(2, "MovieSearchEngine")}
                    >
                      Acessar
                    </button>
                  </div>
                  <div className={styles.carouselItem}>
                    <h2>Todo App</h2>
                    <button onClick={() => handleAccess(3, "TodoApp")}>
                      Acessar
                    </button>
                  </div>
                  <div className={styles.carouselItem}>
                    <h2>Quiz App</h2>
                    <button onClick={() => handleAccess(4, "QuizApp")}>
                      Acessar
                    </button>
                  </div>
                  <div className={styles.carouselItem}>
                    <h2>Language Translator</h2>
                    <button
                      onClick={() => handleAccess(5, "LanguageTranslator")}
                    >
                      Acessar
                    </button>
                  </div>
                </Carousel>
              </div>
            )}
            <div className={styles.footer}>
              © 2024 Your Company | All rights reserved
            </div>
          </div>
        </>
      )}
    </div>
  );
}
