import React from "react";
import { HomeImage } from "../Components/Home Components/HomeImage";
import { Secondcomponent } from "../Components/Home Components/Secondcomponent";
import { ThirdComponents } from "../Components/Home Components/ThirdComponents";
import { FourthComponent } from "../Components/Home Components/FourthComponent";
import { FifthComponent } from "../Components/Home Components/FifthComponent";

export const Home = () => {
  return (
    <>
      <HomeImage />
      <Secondcomponent />
      <ThirdComponents />
      <FourthComponent />
      <FifthComponent />
    </>
  );
};
