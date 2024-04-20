import React from "react";
import Button from "./button/Button";

export default function HeroBanner() {
  return (
    <section className=" hero_banner padding-large relative w-full before:content-[''] before:absolute before:top-0 before:right-0 before:w-full before:h-full before:bg-[url('/index_page/hero_banner_bgimg.jpeg')] before:bg-cover before:bg-no-repeat before:bg-right  ">
      <div className="container">
        <div className="banner_content w-[50%] md:w-full ">
          <h1 className=" text-[#f7f2ca] mb-5 ">
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
