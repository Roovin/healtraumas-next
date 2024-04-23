import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function ParallaxBlade() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section
        className={`parallaxBlade relative w-full bgBlueOverlay padding-large `}
      >
        <div
          className="bgImg fixed top-[300px] left-0 w-full h-full z-[-1] "
          style={{ transform: `translateY(-${scrollY * 0.6}px)` }}
        >
          <Image
            src="/parallaxImg/parallax_img1.jpeg"
            width={1920}
            height={500}
            className=" w-full h-full object-cover object-center "
            alt="bg-img"
          />
        </div>
        <div className="container">
          <div className="parallaxContent relative w-full text-center z-[2] ">
            <h2 className=" text-skyBlue ">Veterans Programs</h2>
          </div>
        </div>
      </section>
    </>
  );
}
