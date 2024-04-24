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
        <div
          className={`contentWrap ${
            data.imgurl ? (data.flexRowReverse ? "flex-row-reverse" : "") : ""
          } relative w-[calc(100%+40px)] ml-[-20px] flex flex-wrap md:w-full md:ml-0`}
        >
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
                <li className=" mb-2 ">
                  <p>{data.listItem1}</p>
                </li>
                {data.listItem2 && (
                  <li className=" mb-2 ">
                    <p>{data.listItem2}</p>
                  </li>
                )}
                {data.listItem3 && (
                  <li className=" mb-2 ">
                    <p>{data.listItem3}</p>
                  </li>
                )}
              </ul>
            )}
          </div>
          <div className="videoWrapper w-[calc(50%-40px)] mx-[20px] md:w-full md:mx-auto md:mt-5 ">
            {data && data.imgurl ? (
              <div className="imageWrap w-full h-auto">
                <Image
                  src={data.imgurl}
                  width={600}
                  height={600}
                  alt="img"
                  className=" w-full h-auto object-cover "
                />
              </div>
            ) : data && data.videoUrl ? (
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
                  src={data.videoUrl}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen=""
                  className=" w-full h-full "
                ></iframe>
              </div>
            ) : data && data.logoImage ? (
              <div className="logoWrapper relative w-full flex justify-end ">
                <div className="logo relative w-full max-w-[225px] h-full max-h-[96px] ">
                  <Image
                    src={data.logoImage}
                    width={400}
                    height={400}
                    alt="logo"
                    className=" w-full h-full object-cover "
                  />
                </div>
                {data.logoImage2 && (
                  <div className="logo relative w-full max-w-[225px] h-full max-h-[222px] ml-10 ">
                    <Image
                      src={data.logoImage2}
                      width={400}
                      height={400}
                      alt="logo"
                      className=" w-full h-full object-cover "
                    />
                  </div>
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
