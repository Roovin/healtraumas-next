import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function BannerSecond({ data }) {
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
    <section
      className={`introWithCta relative w-full min-h-[527px] flex flex-wrap items-center overflow-hidden after:opacity-[0.75] ${
        data.bgImage ? "bgBlueOverlay" : ""
      }`}
    >
      <div
        className="bg_img absolute top-0 left-0 w-full h-full  "
        style={{
          transform: `scale(${1.5 / (1 + scrollY * 0.0005)})`,
          transition: "transform 0.3s ease",
        }}
      >
        <Image
          src={data.bgImage}
          width={1960}
          height={500}
          className=" w-full h-full object-cover object-center "
          alt="bg-img"
        />
      </div>
      <div className="container">
        <div className="bannerContent relative text-center z-10 ">
          {data.mainTitle && (
            <h1 className=" text-white ">
              <span className=" text-[68px]">{data.mainTitle}</span>
            </h1>
          )}
        </div>
      </div>
    </section>
  );
}
