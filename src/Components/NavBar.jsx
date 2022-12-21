import React, { useState } from "react";

export default function NavBar() {
  const [toggle, setToggle] = useState(false);

  const isToggle = (e) => {
    if (!e) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };
  return (
    <>
      <div className="wrapper">
        <div className="nav-section">
          <div className="nav">
            <div className="logo">
              <a href="#home">
                <img src="https://meladigitalbazaar.s3.amazonaws.com/vendor_profile_pictures/16654755829447818.jpeg" />
              </a>
            </div>
            <div className="nav-item">
              <ul>
                <a href="#home">
                  <li>Home</li>
                </a>
                {/* <a href="#about">
                  <li>about</li>
                </a> */}
                <a href="#products">
                  <li>Product</li>
                </a>
                {/* <a href="#services">
                  <li>services</li>
                </a>

                <a href="#gallery">
                  <li>Gallery</li>
                </a>
                <a href="#blog">
                  <li>blog</li>
                </a> */}
                <a href="#contact">
                  <li>Contact</li>
                </a>
              </ul>
            </div>
            <div className="side-nav-btn" onClick={() => isToggle(toggle)}>
              <i className="fas fa-bars"></i>
            </div>
          </div>
        </div>
      </div>
      <div className={`side-nav ${toggle ? "active" : ""}`}>
        <div className="wrapper">
          <div className="side-nav-close">
            <button onClick={() => isToggle(toggle)}>
              <i className="fas fa-times"></i>
            </button>
          </div>
          {/* <button onClick={() => isToggle(toggle)}>close</button> */}

          <ul>
            <a href="#home">
              <li>home</li>
            </a>
            <a href="#products">
              <li>product</li>
            </a>
            {/* <a href="#about">
              <li>about</li>
            </a>
            <a href="#services">
              <li>services</li>
            </a>
            <a href="#gallery">
              <li>Gallery</li>
            </a>
            <a href="#blog">
              <li>blog</li>
            </a> */}
            <a href="#contact">
              <li>contact</li>
            </a>
          </ul>
        </div>
      </div>
    </>
  );
}
