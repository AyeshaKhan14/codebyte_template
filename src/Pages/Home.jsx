import React from "react";
import { HomeImage } from "../Components/Home Components/HomeImage";
import { Secondcomponent } from "../Components/Home Components/Secondcomponent";
import { ThirdComponents } from "../Components/Home Components/ThirdComponents";
import { FourthComponent } from "../Components/Home Components/FourthComponent";
import { FifthComponent } from "../Components/Home Components/FifthComponent";
import { LastComponent } from "../Components/Home Components/LastComponent";

export const Home = () => {
  return (
    <>
      <HomeImage />
      <Secondcomponent />
      <ThirdComponents />
      <FourthComponent />
      <FifthComponent />
      <LastComponent />
    </>
  );
};
