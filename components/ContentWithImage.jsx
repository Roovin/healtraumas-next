import React from "react";
import Image from "next/image";

export default function ContentWithImage({ data }) {
  return (
    <section className="contentWithImage bg-skyBlue ">
      <div className="container">
        <div className="contentWithImageWrap relative w-[calc(100%+40px)] ml-[-20px] flex flex-wrap  ">
          <div className="colTwo w-[calc(50%-40px)] mx-[20px] ">
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
          </div>
          <div className="colTwo w-[calc(50%-40px)]  mx-[20px] ">
            <div className="imageWrap w-full h-auto ">
              <Image src={data.imgurl} width={600} height={600} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
