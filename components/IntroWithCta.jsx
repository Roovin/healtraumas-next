import React from "react";
import Button from "./button/Button";
import Image from "next/image";

export default function IntroWithCta({
  bgskyblue,
  bgImage,
  textcenterTitle,
  title,
  titleblue,
  titlewhite,
  textcenterContent,
  paragraph,
  listItem,
  listTitle,
  listItem2,
  listTitle2,
  btnText,
  btnUrl,
}) {
  return (
    <section
      className={`introWithCta padding-large relative w-full ${
        bgImage ? "bgBlueOverlay" : ""
      } ${bgskyblue === "bg-skyBlue" ? "bg-skyBlue" : ""}`}
    >
      {bgImage && (
        <div className="bg_img absolute top-0 left-0 w-full h-full ">
          <Image
            src={bgImage}
            width={2000}
            height={2000}
            className=" w-full h-full object-cover object-center "
            alt="bg-img"
          />
        </div>
      )}
      <div className="container">
        <div className="content relative w-full  max-w-[1050px] mx-auto z-[2] ">
          <div
            className={`${
              textcenterTitle === true ? "text-center" : "text-left"
            }`}
          >
            {title && (
              <h2
                className={` ${titleblue === true ? "text-blue" : ""} ${
                  titlewhite === true ? " text-white" : ""
                } text-black mb-8 `}
              >
                {title}
              </h2>
            )}
          </div>
          <div
            className={`${
              textcenterContent === true ? "text-center" : "text-left"
            }`}
          >
            {paragraph && (
              <p
                className=" text-black mb-4 "
                dangerouslySetInnerHTML={{ __html: paragraph }}
              />
            )}
            {/* <div dangerouslySetInnerHTML={paragraph} /> */}
            <ul className=" list-none ">
              {listItem && (
                <li className=" text-black mb-4 ">
                  <p>
                    {listTitle && <b className=" font-bold ">{listTitle}</b>}
                    {listItem}
                  </p>
                </li>
              )}
              {listItem2 && (
                <li className=" text-black mb-4 ">
                  <p>
                    {listTitle2 && <b className=" font-bold ">{listTitle2}</b>}
                    {listItem2}
                  </p>
                </li>
              )}
            </ul>
          </div>
          {btnText && (
            <div className="button_wrap flex justify-center items-center mt-8 ">
              <Button
                buttonText={btnText}
                buttonClass="default"
                url={{ btnUrl }}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
