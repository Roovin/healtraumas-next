import React from "react";
import Button from "./button/Button";
import Image from "next/image";

export default function IntroWithCta({ data, className }) {
  return (
    <section
      className={`introWithCta relative w-full ${data.bgImage ? "bgBlueOverlay" : ""} ${className} ${data.bgskyblue}`}
    >
      {data.bgImage && (
        <div className="bg_img absolute top-0 left-0 w-full h-full ">
          <Image
            src={data.bgImage}
            width={1920}
            height={500}
            className=" w-full h-full object-cover object-center "
            alt="bg-img"
          />
        </div>
      )}
      <div className="container">
        <div className="content relative w-full  max-w-[1050px] mx-auto z-[2] ">
          <div
            className={`${data.textcenterTitle === true ? "text-center" : "text-left"
              }`}
          >
            {data.title && (
              <h2
                className={` ${data.bgImage  ? "text-white" : ""} text-blue mb-8 `}
              >
                {data.title}
              </h2>
            )}
          </div>
          <div
            className={`${data.textcenterContent === true ? "text-center" : "text-left"
              }`}
          >
            {data.paragraph && ( 
              <p
                className=" text-black mb-4 "
                dangerouslySetInnerHTML={{ __html: data.paragraph }}
              />
            )}
            {
              data.listItem && (
                <ul className=" list-none ">
                  {data.listItem && (
                    <li className=" text-black mb-4 ">
                      <p >
                        {data.listTitle && <b className=" font-bold ">{data.listTitle}</b>}
                        {data.listItem}
                      </p>
                    </li>
                  )}
                  {data.listItem2 && (
                    <li className=" text-black mb-4 ">
                      <p>
                        {data.listTitle2 && <b className=" font-bold ">{data.listTitle2}</b>}
                        {data.listItem2}
                      </p>
                    </li>
                  )}
                </ul> 
            )}
          </div>
          {data.btnText && (
            <div className="button_wrap flex justify-center items-center mt-8 ">
              <Button
                buttonText={data.btnText}
                buttonClass="default"
                url={data.btnUrl}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
