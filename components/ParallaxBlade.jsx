import React, { useEffect, useState } from "react";
import Image from "next/image";
import Style from "../styles/parallaxBlade.module.css";

export default function ParallaxBlade({ data }) {
  const [scrollY, setScrollY] = useState(0);
  const imgUrl = data.imgUrl;

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const transformValue = {
    backgroundImage: `url('${imgUrl}')`,
    transform: `translateY(-${scrollY * 0.6}px)`,
  };

  return (
    <section
      class={`${Style.ParallaxBlade} parallaxBlade parallax-image p-0 bgBlueOverlay`}
    >
      <div class="parallax-wrap max-h-[350px] min-h-[350px] relative overflow-hidden">
        <div
          class={`${Style.weParallaxImage} weParallaxImage `}
          style={transformValue}
        ></div>
      </div>
      <div className="parallaxContent absolute top-[40%] left-0 w-full text-center z-[2] ">
        <h2 className=" text-skyBlue ">Veterans Programs</h2>
      </div>
    </section>
  );
}
