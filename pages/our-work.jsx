import React from "react";
import IntroWithCta from "../components/IntroWithCta";
import ColTwoContent from "../components/ColTwoContent";
import ParallaxBlade from "../components/ParallaxBlade";
import ContentWithVideo from "../components/ContentWithVideo";
import ContentWithImage from "../components/ContentWithImage";
import FooterCta from "../components/FooterCta";
import {
  intro,
  colTwoContentData,
  intro2,
  parallaxBlade,
  parallaxBlade2,
  intro3,
  contentwithVideo,
  contentwithimage2,
  contentwithimage3,
} from "../public/data/ourWorkPageData";

export default function ourWork() {
  return (
    <>
      <IntroWithCta data={intro} />
      <ColTwoContent data={colTwoContentData} />
      <ParallaxBlade data={parallaxBlade} />
      <IntroWithCta data={intro2} />
      <ContentWithVideo />
      <ParallaxBlade data={parallaxBlade2} />
      <IntroWithCta data={intro3} />
      <ContentWithVideo data={contentwithVideo} />
      <ContentWithImage data={contentwithimage2} />
      <ContentWithImage data={contentwithimage3} />
      <FooterCta />
    </>
  );
}
