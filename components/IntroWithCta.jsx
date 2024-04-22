import React from "react";
import Button from "./button/Button";

export default function IntroWithCta({
  textskyblue,
  textcenterTitle,
  title,
  textblue,
  textcenterContent,
  paragraph,
  paragraph2,
  paragraph3,
  listItem,
  listTitle,
  listItem2,
  listTitle2,
  btnText,
  btnUrl,
}) {
  return (
    <section
      className={`introWith_cta padding-large relative w-full ${
        textskyblue === true ? "bg-skyBlue" : " "
      } `}
    >
      <div className="container">
        <div className="content relative w-full  max-w-[1050px] mx-auto ">
          <div
            className={`${
              textcenterTitle === true ? "text-center" : "text-left"
            }`}
          >
            {title && (
              <h2
                className={` ${
                  textblue === true ? "text-blue" : "text-black"
                }   mb-8 `}
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
            {paragraph && <p className=" text-black mb-4 ">{paragraph}</p>}
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
            {paragraph2 && <p className=" text-black mb-4 ">{paragraph2}</p>}
            {paragraph3 && <p className=" text-black mb-4 ">{paragraph3}</p>}
          </div>
          <div className="button_wrap flex justify-center items-center mt-8 ">
            <Button
              buttonText={btnText}
              buttonClass="default"
              url={{ btnUrl }}
            />
          </div>
          {/* <div className="button_wrap flex justify-center items-center mt-8 ">
            <Button buttonText="Donate" buttonClass="default" url={"/donate"} />
          </div> */}
        </div>
      </div>
    </section>
  );
}
