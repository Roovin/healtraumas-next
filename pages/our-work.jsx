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
  parallaxBlade,
  intro2,
  contentwithVideo,
  contentwithVideo2,
  contentwithVideo3,
  parallaxBlade2,
  intro3,
  contentwithVideo4,
  contentwithVideo5,
  contentwithVideo6,
} from "../public/data/ourWorkPageData";

export default function OurWork() {
  return (
    <>
      <IntroWithCta data={intro} />
      <ColTwoContent data={colTwoContentData} />
      <ParallaxBlade data={parallaxBlade} />
      <IntroWithCta data={intro2} />
      <ContentWithVideo data={contentwithVideo} />
      <ContentWithVideo data={contentwithVideo2} />
      <ContentWithVideo data={contentwithVideo3} />
      <ParallaxBlade data={parallaxBlade2} />
      <IntroWithCta data={intro3} />
      <ContentWithVideo data={contentwithVideo4} />
      <ContentWithVideo data={contentwithVideo5} />
      <ContentWithVideo data={contentwithVideo6} />
      <FooterCta />
    </>
  );
}
