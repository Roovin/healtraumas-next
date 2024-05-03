import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./button/Button";

export default function BlogCards({ data }) {
  return (
    <section className="blogs">
      <div className="container">
        <div className="intro text-center mb-[20px]">
          <h2 className="text-blue">{data?.title}</h2>
        </div>
        <div className="cardWrapper flex lg:flex-wrap">
          {data?.cards.map((item, i) => {
            var title = item?.title;
            var titleWithUrl = title.split(" ").join("-");
            return (
              <div
                key={i}
                className="card group w-[calc(33.33%-30px)] mx-[15px] relative overflow-hidden border-[2px] border-black rounded-[8px] tablet:w-[calc(50%-20px)] tablet:mx-[10px] tablet:mb-[20px] phablet:w-[calc(50%-20px)] phablet:mx-[10px] sm:w-full sm:mx-0 md:mb-[20px] "
              >
                <Link
                  href={item?.btnUrl + titleWithUrl}
                  className="emptyLink"
                >
                  .
                </Link>
                <div className="imgWrap h-[275px] overflow-hidden ipad:h-[200px]">
                  <Image
                    src={item?.imgUrl}
                    alt={item?.alt}
                    width={300}
                    height={400}
                    className="w-full h-full scale-1 transition-all ease-in-out delay-300 group-hover:scale-[1.1]"
                    lazyBoundary=""
                  />
                </div>
                <div className="contentWrap relative p-[20px] h-[300px]">
                  <span className="text-blue">{item?.date}</span>
                  <h3 className="my-[10px] text-ellipsis line-clamp-2">
                    {item?.title}
                  </h3>
                  <p className="text-ellipsis line-clamp-3">
                    {item?.description}
                  </p>
                  <div className="btnWrap absolute bottom-[20px]">
                    <span className="">{item?.btn}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
