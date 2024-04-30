import React from "react";
import BannerSecond from "../components/BannerSecond";
import { donateData, bannerSecond } from "../public/data/donateData";
import Payment from "@/components/Payment";

export default function Donate() {
  return (
    <>
      <BannerSecond data={bannerSecond} />
      <Payment />
    </>
  );
}
