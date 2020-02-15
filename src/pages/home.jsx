import React from "react";
import "../pages/home.scss";
import { Container } from "react-bootstrap";
import { Animated } from "react-animated-css";

const Home = () => {
  return (
    <Container className="home">
      <div className="home-hero">
        <img
          src={require("../assets/dennis.png")}
          alt="Dennis"
          className="home-hero-img"
        />
      </div>
      <Animated isVisible={true} className="animated bounce delay-4s">
        <div className="message ">
          <p>
            “Formal education will make you a living; self-education will make
            you a fortune.”
          </p>
        </div>
      </Animated>
    </Container>
  );
};

export default Home;
