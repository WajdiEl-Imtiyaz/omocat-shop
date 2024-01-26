"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";

import Gamers1Full from "../../public/img/full-view/gamers_banners01-2_1680x.png";
import Gamers2Full from "../../public/img/full-view/gamers_banners01_1680x.png";
import Gamers3Full from "../../public/img/full-view/gamers_banners02_1680x.png";
import Gamers4Full from "../../public/img/full-view/gamers_banners03_1680x.png";
import Gamers5Full from "../../public/img/full-view/gamers_banners04_1680x.png";
import Gamers6Full from "../../public/img/full-view/gamers_banners05_1680x.png";
import Gamers7Full from "../../public/img/full-view/gamers_banners06_1680x.png";

import Image from "next/image";
const GamersCarousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="-z-10">
      <Slider {...settings}>
        <Image
          src={Gamers1Full}
          alt="omocat"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "100%",
            height: "650px",
            objectFit: "contain",
          }}
        />
        <Image
          src={Gamers2Full}
          alt="omocat"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "100%",
            height: "650px",
            objectFit: "contain",
          }}
        />
        <Image
          src={Gamers3Full}
          alt="omocat"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "100%",
            height: "650px",
            objectFit: "contain",
          }}
        />
        <Image
          src={Gamers4Full}
          alt="omocat"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "100%",
            height: "650px",
            objectFit: "contain",
          }}
        />
        <Image
          src={Gamers5Full}
          alt="omocat"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "100%",
            height: "650px",
            objectFit: "contain",
          }}
        />
        <Image
          src={Gamers6Full}
          alt="omocat"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "100%",
            height: "650px",
            objectFit: "contain",
          }}
        />
        <Image
          src={Gamers7Full}
          alt="omocat"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "100%",
            height: "650px",
            objectFit: "contain",
          }}
        />
      </Slider>
    </div>
  );
};

export default GamersCarousel;
