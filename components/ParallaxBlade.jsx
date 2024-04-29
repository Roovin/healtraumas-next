// import React, { useEffect, useState } from "react";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Style from "../styles/parallaxBlade.module.css";

const spacing = {
  parallax1Top: "-300px",
  parallax2Top: "200px",
};

export default function ParallaxBlade({ data }) {
  // const [scrollY, setScrollY] = useState(0);
  // const imgUrl = data.imgUrl;

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollY(window.scrollY);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // const transformValue = {
  //   backgroundImage: `url('${imgUrl}')`,
  //   transform: `translateY(-${scrollY * 0.2}px)`,
  // };

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

  const transformValue1 = {
    backgroundImage: `url('${imgUrl}')`,
    transform: `translateY(-${scrollY * 0.2}px)`,
    top: spacing.parallax1Top,
  };

  const transformValue2 = {
    backgroundImage: `url('${imgUrl}')`,
    transform: `translateY(-${scrollY * 0.2}px)`,
    top: spacing.parallax2Top,
  };

  return (
    <section
      className={`${Style.ParallaxBlade} parallaxBlade parallax-image  min-h-[352px] flex items-center bgBlueOverlay`}
    >
      {/* <div className="parallax-wrap max-h-[350px] min-h-[350px] relative overflow-hidden"> */}
      <div
        className={`${
          data.colTwoTitle ? Style.colTwoTitle : Style.weParallaxImage
        } weParallaxImage `}
        // style={transformValue}
        style={transformValue1}
      ></div>
      <div
        className={`${
          data.colTwoTitle ? Style.colTwoTitle : Style.weParallaxImage
        } weParallaxImage `}
        // style={transformValue}
        style={transformValue2}
      ></div>
      {/* {transformValue1 && (
        <div
          className={`${Style.weParallaxImage} weParallaxImage`}
          style={transformValue1}
        ></div>
      )}
      {transformValue1 && (
        <div
          className={`${Style.weParallaxImage} weParallaxImage`}
          style={transformValue2}
        ></div>
      )} */}
      {/* </div> */}
      {/* <div className="parallaxContent absolute top-[50%] left-0 w-full text-center z-[2] translate-y-[-50%]"> */}
      <div className="parallaxContent relative w-full text-center z-[5]">
        <div className="container">
          {data?.title ? (
            <h2 className=" text-skyBlue ">{data.title}</h2>
          ) : data.colTwoTitle ? (
            <div className="row flex md:flex-wrap">
              <div className="item w-1/2 md:w-full md:mb-[20px]">
                <div className="titleWrap">
                  <h2 className="h1 text-white">{data.colTwoTitle}</h2>
                </div>
              </div>
              <div className="item w-1/2 md:w-full">
                <div className="titleWrap text-left">
                  <p
                    className="text-white"
                    dangerouslySetInnerHTML={{ __html: data.description }}
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
