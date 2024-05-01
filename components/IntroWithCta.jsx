import React from "react";
import Button from "./button/Button";
import Image from "next/image";

export default function IntroWithCta({ data, className }) {
  return (
    <section
      className={`introWithCta relative w-full ${
        data?.bgImage ? "bgBlueOverlay" : ""
      } ${className} ${data?.bgskyblue}`}
    >
      {data?.bgImage && (
        <div className="bg_img absolute top-0 left-0 w-full h-full ">
          <Image
            src={data?.bgImage}
            width={1960}
            height={500}
            className=" w-full h-full object-cover object-center "
            alt="bg-img"
          />
        </div>
      )}
      <div className="container">
        <div className="content relative w-full  max-w-[1050px] mx-auto z-[2] ">
          <div className={`text-center`}>
            {data?.title && (
              <h2
                className={` ${
                  data?.bgImage ? "text-white" : ""
                } text-blue mb-8 `}
              >
                {data?.title}
              </h2>
            )}
            {data?.titleSpan && (
              <h2
                className={` ${
                  data?.bgImage ? "text-white" : ""
                } text-blue mb-8 `}
              >
                <span className="text-[51px]">{data?.titleSpan}</span>
              </h2>
            )}
          </div>
          <div className={`${data?.points ? "text-left" : "text-center"} `}>
            {data?.paragraph && (
              <p
                className=" text-black mb-4 "
                dangerouslySetInnerHTML={{ __html: data?.paragraph }}
              />
            )}
            {data?.paragraph2 && <p className="mb-4">{data?.paragraph2}</p>}
            {data?.points && (
              <ul className=" list-none ">
                {data?.points.map((point, i) => (
                  <li className=" text-black mb-4 " key={i}>
                    <p>
                      {point?.listTitle && (
                        <b className=" font-bold ">{point?.listTitle}</b>
                      )}
                      {point?.listItem}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {data?.btnText && (
            <div className="button_wrap flex justify-center items-center mt-8 ">
              <Button
                buttonText={data?.btnText}
                buttonClass="default"
                url={data?.btnUrl}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
