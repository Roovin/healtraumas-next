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
            data.imgurl
              ? data.flexRowReverse
                ? "flex-row-reverse lg:flex-row"
                : ""
              : ""
          } relative w-[calc(100%+40px)] ml-[-20px] flex flex-wrap lg:w-full lg:ml-0`}
        >
          <div className="content w-[calc(50%-40px)] mx-[20px] lg:w-full lg:mx-auto  ">
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
            {data.list && (
              <ul className=" relative w-full list-disc pl-10 ">
                {data?.list.map((item, i) => {
                  return (
                    <li key={i} className=" mb-2 ">
                      <p>{item.description}</p>
                    </li>
                  )
                }) }
              </ul>
            )}
          </div>
          <div className="videoWrapper w-[calc(50%-40px)] mx-[20px] lg:w-full lg:max-w-[600px] lg:mx-0 lg:mt-5 ">
            {data && data.imgurl ? (
              <div className="imageWrap w-full h-[500px] laptop:h-[400px] sm:h-[300px] ">
                <Image
                  src={data.imgurl}
                  width={600}
                  height={600}
                  alt="img"
                  className=" w-full h-full object-cover object-center "
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
