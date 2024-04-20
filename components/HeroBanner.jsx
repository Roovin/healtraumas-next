import React from "react";
import Image from "next/image";
import Button from "./button/Button";

export default function HeroBanner() {
  return (
    <section className=" hero_banner padding-large relative w-full bg-blue ">
      <div className="banner_bg_img absolute top-0 right-0 w-full h-full ">
        <Image
          width={2500}
          height={1200}
          src="/heroBanner/hero_banner_bgimg.jpeg"
          alt="bg-img"
          className=" w-full h-full object-cover object-right "
        />
      </div>
      <div className="container">
        <div className="banner_content w-[50%] md:w-full ">
          <h1 className=" text-lightYelow mb-5 ">
            We help Ukrainians heal from conflict-related trauma so they can
            live fulfilling and productive lives.
          </h1>
          <Button
            buttonText="Our Work"
            buttonClass="default"
            url={"/our-work"}
          />
        </div>
      </div>
    </section>
  );
}
