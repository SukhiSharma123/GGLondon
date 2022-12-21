import React from "react";

export default function Banner() {
  return (
    <>
      <div className="banner-image">
        <div className="swiper mySwiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div
                className="image"
                style="
                  background-image: url(../assets/images/image-model/banner.png);
                "
              ></div>
            </div>

            <div className="swiper-slide">
              <div
                className="image"
                style="
                  background-image: url(../assets/images/image-model/banner-2.jpg);
                "
              ></div>
            </div>

            <div className="swiper-slide">
              <div
                className="image"
                style="
                  background-image: url(../assets/images/image-model/banner-3.jpg);
                "
              ></div>
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
        <div className="banner-content">
          <div className="content">
            <div className="sub-title">welcome</div>
            <div className="banner-title">stylistic</div>
            <div className="desc">a professional model agency</div>
          </div>
        </div>
      </div>
    </>
  );
}
