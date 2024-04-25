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
    transform: `translateY(-${scrollY * 0.2}px)`,
  };

  return (
    <section
      className={`${Style.ParallaxBlade} parallaxBlade parallax-image p-0 bgBlueOverlay`}
    >
      <div className="parallax-wrap max-h-[350px] min-h-[350px] relative overflow-hidden">
        <div
          className={`${data.colTwoTitle ? Style.colTwoTitle : Style.weParallaxImage} weParallaxImage `}
          style={transformValue}
        ></div>
      </div>
        <div className="parallaxContent absolute top-[50%] left-0 w-full text-center z-[2] translate-y-[-50%]">
          <div className="container">
          {
            data?.title ?  
            <h2 className=" text-skyBlue ">{data.title}</h2>                       
            : data.colTwoTitle ? 
            <div className="row flex md:flex-wrap">
              <div className="item w-1/2 md:w-full md:mb-[20px]">
                <div className="titleWrap">
                  <h2 className="h1 text-white">{data.colTwoTitle}</h2>
                </div>
              </div>
              <div className="item w-1/2 md:w-full">
                <div className="titleWrap text-left">
                  <p className="text-white" dangerouslySetInnerHTML={{__html: data.description }} />
                </div>
              </div>
            </div> : ''
          }
        </div>
      </div>
    </section>
  );
}
