import React from "react";
import IntroWithCta from "../components/IntroWithCta";
import ColTwoContent from "@/components/ColTwoContent";
import { intro, colTwoContentData } from "../public/data/ourWorkPageData";

export default function ourWork() {
  return (
    <>
      <IntroWithCta data={intro} />
      <ColTwoContent data={colTwoContentData} />
    </>
  );
}
