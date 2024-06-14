declare module "react-slick" {
  import * as React from "react";

  interface SliderProps {
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    autoplay?: boolean;
    autoplaySpeed?: number;
    arrows?: boolean;
    nextArrow?: React.ReactNode;
    prevArrow?: React.ReactNode;
    [key: string]: any;
  }

  class Slider extends React.Component<SliderProps, any> {}
  export default Slider;
}
