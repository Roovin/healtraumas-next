import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function ContentWithVideo({ data }) {
  const [videoDimensions, setVideoDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      const videoContainerWidth =
        document.querySelector(".videoWrapper").offsetWidth;
      const videoHeight = (videoContainerWidth / 16) * 9;
      setVideoDimensions({
        width: videoContainerWidth,
        height: videoHeight,
      });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="contentWithVideo bg-skyBlue ">
      <div className="container">
        <div className="contentWrap relative w-[calc(100%+40px)] ml-[-20px] flex flex-wrap md:w-full md:ml-0 ">
          <div className="content w-[calc(50%-40px)] mx-[20px] md:w-full md:mx-auto  ">
            {data.title && <h4 className="text-blue mb-8 ">{data.title}</h4>}
            {data.paragraph && (
              <p
                className=" mb-4"
                dangerouslySetInnerHTML={{ __html: data.paragraph }}
              />
            )}
            {data.paragraph2 && (
              <p
                className=" mb-4"
                dangerouslySetInnerHTML={{ __html: data.paragraph2 }}
              />
            )}
            {data.listItem1 && (
              <ul className=" relative w-full list-disc pl-10 ">
                <li className=" text-[18px] leading-[1.7] font-light mb-2 tabletlarge:text-[16px] lg:text-[16px] ">
                  {data.listItem1}
                </li>
                {data.listItem2 && (
                  <li className=" text-[18px] leading-[1.7] font-light mb-2 tabletlarge:text-[16px] lg:text-[16px] ">
                    {data.listItem2}
                  </li>
                )}
                {data.listItem3 && (
                  <li className=" text-[18px] leading-[1.7] font-light mb-2 tabletlarge:text-[16px] lg:text-[16px] ">
                    {data.listItem3}
                  </li>
                )}
              </ul>
            )}
          </div>
          <div className="videoWrapper w-[calc(50%-40px)] mx-[20px] md:w-full md:mx-auto md:mt-5 ">
            {data && data.imgurl ? 
              <div className="imageWrap w-full h-auto">
                <Image
                  src={data.imgurl}
                  width={600}
                  height={600}
                  alt="img"
                  className=" w-full h-auto object-cover "
                />
              </div>
             : data && data.videoUrl ?
              <div
                className="video relative w-full"
                style={{
                  width: videoDimensions.width,
                  height: videoDimensions.height,
                }}
              >
                <iframe
                  // width="560"
                  // height="315"
                  src="https://www.youtube.com/embed/NUahT77rDik?si=rM_9cnbCgI2ExzvK"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen=""
                  className=" w-full h-full "
                ></iframe>
              </div> : <div className="logoWrapper relative w-full flex justify-end ">
              <div className="logo relative w-full max-w-[225px] h-full max-h-[96px] ">
                <Image
                  src="/contentWithVideo/logo_img1.png"
                  width={400}
                  height={400}
                  alt="logo"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div className="logo relative w-full max-w-[225px] h-full max-h-[222px] ml-10 ">
                <Image
                  src="/contentWithVideo/logo_img2.png"
                  width={400}
                  height={400}
                  alt="logo"
                  className=" w-full h-full object-cover "
                />
              </div>
            </div>
             }
          </div>
        </div>
        {/* <div className="contentWrap relative w-[calc(100%+40px)] ml-[-20px] flex flex-wrap mb-[100px] ">
          <div className="videoWrapper w-[calc(50%-40px)]  mx-[20px] ">
            <div className="logoWrapper relative w-full flex justify-end ">
              <div className="logo relative w-full max-w-[225px] h-full max-h-[96px] ">
                <Image
                  src="/contentWithVideo/logo_img1.png"
                  width={400}
                  height={400}
                  alt="logo"
                  className=" w-full h-full object-cover "
                />
              </div>
              <div className="logo relative w-full max-w-[225px] h-full max-h-[222px] ml-10 ">
                <Image
                  src="/contentWithVideo/logo_img2.png"
                  width={400}
                  height={400}
                  alt="logo"
                  className=" w-full h-full object-cover "
                />
              </div>
            </div>
          </div>
        </div>
        */}
      </div>
    </section>
  );
}
