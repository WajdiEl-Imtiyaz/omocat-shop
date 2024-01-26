"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";
import Link from "next/link";

import Omori1Full from "../../public/img/full-view/omori_figure_banner_1_2048x.png";
import Omori2Fulll from "../../public/img/full-view/omori_figure_banner_2_2048x.png";
import Omori3Fulll from "../../public/img/full-view/OMORI_acrylic_banner_3_4a25771f-b9a9-4fa8-a673-5c9187c191fa_2048x.png";

import Image from "next/image";

const OmoriCarousel = () => {
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
    <Link href="/collections/omori">
      <Slider {...settings}>
        <Image
          src={Omori1Full}
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
          src={Omori2Fulll}
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
          src={Omori3Fulll}
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
    </Link>
  );
};

export default OmoriCarousel;
