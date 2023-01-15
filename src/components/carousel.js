import React from "react";
import Slider from "react-slick";
import SlideBwd from "../assets/slideBwd.svg";
import SlideFwd from "../assets/SlideFwd.svg";

export default function carousel({ children, slidesToShow = 4 }) {
  var settings = {
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 4,
    initialSlide: 0,
    prevArrow: <NavButton Icon={SlideBwd} />,
    nextArrow: <NavButton Icon={SlideFwd} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return <Slider {...settings}>{children}</Slider>;
}

function NavButton({ Icon, style, onClick, className }) {
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <img src={Icon} alt="arrow_left" />
    </div>
  );
}
