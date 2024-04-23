import React from "react";
import IntroWithCta from "../components/IntroWithCta";
import ColTwoContent from "../components/ColTwoContent";
import ParallaxBlade from "../components/ParallaxBlade";
import ContentWithVideo from "../components/ContentWithVideo";
import {
  intro,
  colTwoContentData,
  intro2,
} from "../public/data/ourWorkPageData";

export default function ourWork() {
  return (
    <>
      <IntroWithCta data={intro} />
      <ColTwoContent data={colTwoContentData} />
      <ParallaxBlade />
      <IntroWithCta data={intro2} />
      <ContentWithVideo />
    </>
  );
}
