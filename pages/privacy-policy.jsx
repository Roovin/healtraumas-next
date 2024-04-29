import React from "react";
import BannerSecond from "../components/BannerSecond";
import TextContent from "../components/TextContent";
import { bannerSecond } from "../public/data/privacyPolicy";

export default function PrivacyPolicy() {
  return (
    <>
      <BannerSecond data={bannerSecond} />
      <TextContent />
    </>
  );
}
