import { useState, useContext } from "react";  
import styles from "./styles.module.css";
import { Carousel } from "react-responsive-carousel";
import { FaArrowLeft } from "react-icons/fa";
import QRCodeGenerator from "../../components/QRCodeGenerator";
import IPAddressFinder from "../../components/IPAddressFinder";
import MovieSearchEngine from "../../components/MovieSearch";
import TodoApp from "../../components/TodoApp";
import QuizApp from "../../components/QuizApp";
import LanguageTranslator from "../../components/LanguageTranslator";
import Login from "../../components/Login";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CarouselItem from "../../components/CarouselItem";
import NavBarToggle from "../../components/NavbarToggle";
import { AuthContext } from "../../context/AuthContext";

import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function MainCarousel() {
  const { authenticated, login, logout } = useContext(AuthContext);
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);
  const [currentComponent, setCurrentComponent] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

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
      <NavBarToggle
        toggleNavBar={toggleNavBar}
        className={styles.navbarteste}
      />
      {!authenticated ? (
        <div className={styles.mainContent}>
          <Login onLogin={login} /> 
        </div>
      ) : (
        <>
          <Navbar
            handleLogout={logout}
            isNavBarOpen={isNavBarOpen}
            handleAccess={handleAccess}
          />
          <div className={styles.mainContent}>
            {currentComponent ? (
              <div className={styles.cardWithButton}>
                {renderComponent()}
                <div className={styles.returnButton} onClick={handleReturn}>
                  <FaArrowLeft /> Return
                </div>
              </div>
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
                  <CarouselItem
                    title={"QR Code Generator"}
                    handleClick={() => handleAccess(0, "QRCodeGenerator")}
                  />
                  <CarouselItem
                    title={"IP Address Finder"}
                    handleClick={() => handleAccess(1, "IPAddressFinder")}
                  />
                  <CarouselItem
                    title={"Movie Search Engine"}
                    handleClick={() => handleAccess(2, "MovieSearchEngine")}
                  />
                  <CarouselItem
                    title={"Todo App"}
                    handleClick={() => handleAccess(3, "TodoApp")}
                  />
                  <CarouselItem
                    title={"Quiz App"}
                    handleClick={() => handleAccess(4, "QuizApp")}
                  />
                  <CarouselItem
                    title={"Language Translator"}
                    handleClick={() => handleAccess(5, "LanguageTranslator")}
                  />
                </Carousel>
              </div>
            )}
            <Footer />
          </div>
        </>
      )}
    </div>
  );
}
