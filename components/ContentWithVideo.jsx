import React, { useState, useEffect } from "react";

export default function ContentWithVideo() {
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
        <div className="contentWrap relative w-[calc(100%+40px)] ml-[-20px] flex flex-wrap ">
          <div className="content w-[calc(50%-40px)] mx-[20px] ">
            <h4 className="text-blue mb-8 ">
              Conference on novel therapies for severe PTSD
            </h4>
            <p className=" mb-4">
              In 2023, Heal Ukraine Trauma sponsored the first medical
              conference on psychedelic-assisted therapy (PAT) in Ukraine for
              the treatment of PTSD. This event was organized by the Ukrainian
              Psychedelic Research Association (UPRA) and hosted by the Forest
              Glade military rehabilitation hospital. International experts
              presented scientific and clinical data on the use of PAT, and
              veterans shared their personal experiences and insights. The
              conference was <span>viewed online by over 12,000 people.</span>
            </p>
            <p className=" mb-4">
              The conference opened the door to discussions about potential
              legalization of PAT in Ukraine.
            </p>
            <ul className=" relative w-full list-disc pl-10 ">
              <li className=" text-[18px] leading-[1.7] font-light mb-2 ">
                It built awareness of PAT as a breakthrough therapy to heal
                those impacted by trauma-related mental health conditions.
              </li>
              <li className=" text-[18px] leading-[1.7] font-light mb-2 ">
                It led to a government roundtable to discuss the pathway for
                approval of PAT in Ukraine.
              </li>
              <li className=" text-[18px] leading-[1.7] font-light mb-2 ">
                Working groups involving key stakeholders have been established
                to work through the requirements.
              </li>
            </ul>
          </div>
          <div className="videoWrapper w-[calc(50%-40px)]  mx-[20px] ">
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
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen=""
                className=" w-full h-full "
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
