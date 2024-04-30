// import React, { useEffect, useState } from "react";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Style from "../styles/parallaxBlade.module.css";

const spacing = {
  parallax1Top: "-300px",
  parallax2Top: "200px",
};

export default function ParallaxBlade({ data }) {
  // const [isVisible1, setIsVisible1] = useState(true);
  // const [isVisible2, setIsVisible2] = useState(false);
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
  // const transformValue1 = {
  //   backgroundImage: `url('${imgUrl}')`,
  //   transform: `translateY(-${scrollY * 0.5}px)`,
  //   top: `0`,
  // };
  // const transformValue2 = {
  //   backgroundImage: `url('${imgUrl}')`,
  //   transform: `translateY(-${scrollY * 0.2}px)`,
  // };

  const [isVisible1, setIsVisible1] = useState(true);
  const [isVisible2, setIsVisible2] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const imgUrl = data.imgUrl;
  const transformValue1Ref = useRef(null);
  const transformValue2Ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
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
      {/* <div className="parallax-wrap max-h-[350px] min-h-[350px] relative overflow-hidden"> */}
      {/* { 
        <div
          className={`${
            data.colTwoTitle ? Style.colTwoTitle : Style.weParallaxImage
          } weParallaxImage relative `}
          // style={transformValue1}
          ref={transformValue1Ref}
          style={{
            backgroundImage: `url('${imgUrl}')`,
            transform: `translateY(-${scrollY * 0.4}px)`,
            top: `0`,
          }}
        ></div>
      } */}
      {
        data.parallax === 'parllaxOne' ? 
        <div
          className={`${
            data.colTwoTitle ? Style.colTwoTitle : Style.weParallaxImage
          } weParallaxImage relative !z-[-3] `}
          // style={transformValue2}
          ref={transformValue2Ref}
          style={{
            backgroundImage: `url('${imgUrl}')`,
            transform: `translateY(-${scrollY * 0.2}px)`,
            top: `100px`,
          }}
        ></div> :  <div
        className={`${
          data.colTwoTitle ? Style.colTwoTitle : Style.weParallaxImage
        } weParallaxImage relative !z-[-3] `}
        // style={transformValue2}
        ref={transformValue2Ref}
        style={{
          backgroundImage: `url('${imgUrl}')`,
          transform: `translateY(-${scrollY * 0.2}px)`,
          top: `350px`,
        }}
      ></div>
      }
      {/* </div> */}
      {/* <div className="parallaxContent absolute top-[50%] left-0 w-full text-center z-[2] translate-y-[-50%]"> */}
      <div className="container">
        <div className="parallaxContent relative w-full text-center z-[5]">
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

    // <>
    //   <div
    //     className={`${Style.parallax_wrapper} ${Style.ParallaxBlade} parallaxBlade parallax-image  min-h-[352px] flex items-center bgBlueOverlay`}
    //   >
    //     <div
    //       className={`${Style.background} ${Style.weParallaxImage} weParallaxImage bg-[url('https://upload.wikimedia.org/wikipedia/commons/d/da/Precincts_of_Watari-jinja_shrine_in_Spring_season_2.JPG')] `}
    //       style={{ transform: `translateY(${scrollY * 0.5}px)` }}
    //     ></div>

    //     {/* <div
    //     className={`${Style.background} bg-[url('https://images.pexels.com/photos/375152/summer-sun-blooming-season-375152.jpeg?cs=srgb&dl=beautiful-bloom-blossom-375152.jpg&fm=jpg')] `}
    //   >
    //     <h2 className={`${Style.title}`}>Summer</h2>
    //   </div> */}
    //   </div>
    //   <section className={`${Style.season_desc}`}>
    //     <div className={`${Style.desc_wrapper}`}>
    //       <h3 className={`${Style.season_title}`}>Spring</h3>
    //       <p className={`${Style.season_about}`}>
    //         Spring is one of the four conventional temperate seasons, following
    //         winter and preceding summer. There are various technical definitions
    //         of spring, but local usage of the term varies according to local
    //         climate, cultures and customs. When it is spring in the Northern
    //         Hemisphere, it is autumn in the Southern Hemisphere and vice versa.
    //         At the spring (or vernal) equinox, days and nights are approximately
    //         twelve hours long, with day length increasing and night length
    //         decreasing as the season progresses.
    //       </p>
    //     </div>
    //   </section>
    //   <div
    //     className={`${Style.parallax_wrapper} ${Style.ParallaxBlade} parallaxBlade parallax-image  min-h-[352px] flex items-center bgBlueOverlay`}
    //   >
    //     <div
    //       className={`${Style.background} bg-[url('/introWithCta/footer_cta_bgimg.jpeg')] `}
    //       style={{ transform: `translateY(${scrollY * 0.3}px)` }}
    //     ></div>
    //   </div>
    // </>
  );
}
