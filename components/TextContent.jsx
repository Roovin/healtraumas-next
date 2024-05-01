import React from "react";

export default function TextContent({ data }) {
  return (
    <section className="TextContent relative w-full bg-white ">
      <div className="container">
        {data?.datacontent.map((text, index) => (
          <div
            className="content relative w-full max-w-[1050px] mx-auto mb-14 "
            key={index}
          >
            {text?.title && (
              <h6 className=" font-bold text-blue mb-4 ">{text?.title}</h6>
            )}
            {text?.title2 && (
              <h6 className=" font-bold text-blue mb-4 ">{text?.title2}</h6>
            )}
            {text?.titleUppercase && (
              <h6 className=" font-bold text-blue uppercase mb-4 ">
                {text?.titleUppercase}
              </h6>
            )}
            {text?.paragraph && (
              <p
                className=" mb-4 "
                dangerouslySetInnerHTML={{ __html: text?.paragraph }}
              />
            )}
            {text?.paragraph2 && (
              <p
                className=" mb-4 "
                dangerouslySetInnerHTML={{ __html: text?.paragraph2 }}
              />
            )}
            {text?.listItems && (
              <ul className=" list-disc pl-[40px]">
                {text?.listItems.map((listItem, i) => (
                  <li key={i} className=" mb-4 ">
                    <p dangerouslySetInnerHTML={{ __html: listItem?.item }} />
                  </li>
                ))}
              </ul>
            )}
            {text?.paragraph3 && (
              <p
                className=" mb-4 "
                dangerouslySetInnerHTML={{ __html: text?.paragraph3 }}
              />
            )}
            {text?.listItems2 && (
              <ul className=" list-disc pl-[40px] ">
                {text?.listItems2.map((listItem, j) => (
                  <li key={j} className=" mb-4 ">
                    <p dangerouslySetInnerHTML={{ __html: listItem?.item }} />
                  </li>
                ))}
              </ul>
            )}
            {text?.paragraph4 && (
              <p
                className=" mb-4 "
                dangerouslySetInnerHTML={{ __html: text?.paragraph4 }}
              />
            )}
            {text?.listItems3 && (
              <ul className=" list-disc pl-[40px] ">
                {text?.listItems3.map((listItem, k) => (
                  <li key={k} className=" mb-4 ">
                    <p dangerouslySetInnerHTML={{ __html: listItem?.item }} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
