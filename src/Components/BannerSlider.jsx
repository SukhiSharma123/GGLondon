import React from "react";
import { Carousel } from "react-bootstrap";
import { Banner_DATA } from "../Data/products";

const BannerSlider = () => {
  return (
    <div>
      <div className="container-fluid" id="home">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12">
            <Carousel>
              {Banner_DATA.map((data) => {
                return (
                  <Carousel.Item key={data.id}>
                    <img
                      className="d-block w-100"
                      src={data.image}
                      alt="First slide"
                      style={{ height: "400px" }}
                    />
                    <Carousel.Caption>
                      <h3>{data.name}</h3>
                      <p>{data.des}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;
