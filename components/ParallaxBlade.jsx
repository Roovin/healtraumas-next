import React, { useEffect, useState } from "react";
import Image from "next/image";
import Style from '../styles/parallaxBlade.module.css'

export default function ParallaxBlade({ data }) {

  const [scrollY, setScrollY] = useState(0);
  const imgUrl = data.imgUrl

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const transformValue = {
  //   backgroundImage: `url(`${imgUrl}`)`,
  //   transform: `translateY(-${scrollY * 0.63}px)`
  // }
  const transformValue = {
    backgroundImage: `url('${imgUrl}')`,
    transform: `translateY(-${scrollY * 0.1}px)`
  };

  return (
     // <section
    //   className={`parallaxBlade relative w-full bgBlueOverlay padding-large `}
    // >
    //   <div
    //     className="bgImg fixed top-[300px] left-0 w-full h-full z-[-1]"
    //     style={{ transform: `translateY(-${scrollY * 0.63}px)` }}
    //   >
    //     <Image
    //       src={data.imgUrl}
    //       width={1920}
    //       height={500}
    //       className=" w-full h-full object-cover object-center "
    //       alt="bg-img"
    //     />
    //   </div>
    //   <div className="container">
    //     <div className="parallaxContent relative w-full text-center z-[2] ">
    //       <h2 className=" text-skyBlue ">Veterans Programs</h2>
    //     </div>
    //   </div>
    // </section>
    <section class={`${Style.ParallaxBlade} parallaxBlade parallax-image p-0 bgBlueOverlay`}>
      <div class="parallax-wrap max-h-[200px] min-h-[200px] relative overflow-hidden">
          <div class={`${Style.weParallaxImage} weParallaxImage `} style={transformValue}></div>
      </div>
      <div className="parallaxContent absolute top-[40%] left-0 w-full text-center z-[2] ">
        <h2 className=" text-skyBlue ">Veterans Programs</h2>
      </div>
  </section>
  );
}
