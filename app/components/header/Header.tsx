import React from "react";
import Spline from "@splinetool/react-spline/next";
const Header = () => {
  return (
<div className="m-1 flex flex-col items-center justify-center min-h-screen relative bg-custom-gradient ">
  <div className="absolute top-0 left-20 right-0 bottom-0 z-10">
    <Spline scene="https://prod.spline.design/ecIuHhpQ4E2RUhp2/scene.splinecode" />
  </div>

  <h1 className="text-6xl font-bold  relative">
    Cleve Clayton
  </h1>
  <h3 className="text-sm relative">
    web designer <span>x</span> full stack developer <span>x</span> ux
    designer
  </h3>
</div>
  );
};

export default Header;
