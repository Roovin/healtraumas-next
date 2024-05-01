import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Style from "../styles/parallaxBlade.module.css";

const spacing = {
  parallax1Top: "-300px",
  parallax2Top: "200px",
};

export default function ParallaxBlade({ data }) {
  const [isVisible1, setIsVisible1] = useState(true);
  const [isVisible2, setIsVisible2] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const imgUrl = data.imgUrl;
  const transformValue1Ref = useRef(null);
  const transformValue2Ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      if (transformValue1Ref.current && transformValue2Ref.current) {
        const rect1 = transformValue1Ref.current.getBoundingClientRect();
        const rect2 = transformValue2Ref.current.getBoundingClientRect();

        setIsVisible1(rect1.top <= window.innerHeight && rect1.bottom >= 0);
        setIsVisible2(rect2.top <= window.innerHeight && rect2.bottom >= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section
      className={`${Style.ParallaxBlade} parallaxBlade parallax-image  min-h-[352px] flex items-center bgBlueOverlay laptop:min-h-[310px] lg:min-h-[280px] `}
    >
      {data?.parallax === "parllaxOne" ? (
        <div
          className={`${
            data?.colTwoTitle ? Style.colTwoTitle : Style.weParallaxImage
          } weParallaxImage relative !z-[-3] `}
          ref={transformValue2Ref}
          style={{
            backgroundImage: `url('${imgUrl}')`,
            transform: `translateY(-${scrollY * 0.4}px)`,
            top: `50px`,
          }}
        ></div>
      ) : (
        <div
          className={`${
            data?.colTwoTitle ? Style.colTwoTitle : Style.weParallaxImage
          } weParallaxImage relative !z-[-3] `}
          ref={transformValue2Ref}
          style={{
            backgroundImage: `url('${imgUrl}')`,
            transform: `translateY(-${scrollY * 0.2}px)`,
            top: `350px`,
          }}
        ></div>
      )}
      <div className="container">
        <div className="parallaxContent relative w-full text-center z-[5]">
          {data?.title ? (
            <h2 className=" text-skyBlue ">{data?.title}</h2>
          ) : data?.colTwoTitle ? (
            <div className="row flex md:flex-wrap">
              <div className="item w-1/2 md:w-full md:mb-[20px]">
                <div className="titleWrap">
                  <h2 className="h1 text-white">{data?.colTwoTitle}</h2>
                </div>
              </div>
              <div className="item w-1/2 md:w-full">
                <div className="titleWrap text-left">
                  <p
                    className="text-white"
                    dangerouslySetInnerHTML={{ __html: data?.description }}
                  />
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
}
