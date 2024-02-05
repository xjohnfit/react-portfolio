import React from "react";
import "./header.css";
import CTA from "./CTA";
import me from "../../assets/me.png";
import HeaderSocial from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="me">
          <h5>Hello, I'm</h5>
          <h1>John</h1>
          <h3 className="text-black">Fullstack Developer</h3>
          <img src={me} alt="Headshot" />
          <CTA />
        </div>


        <HeaderSocial />
      </div>
      
    </header>
  );
};

export default Header;
