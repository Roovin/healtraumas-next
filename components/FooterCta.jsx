import React from "react";
import Button from "./button/Button";

export default function FooterCta() {
  return (
    <section className="FooterCta relative w-full bg-blue padding-large ">
      <div className="container">
        <div className="intro text-center w-full  max-w-[1050px] mx-auto z-[2] ">
          <h2 className=" text-yellow mb-4">
            Download our &ldquo;Mental Health in Ukraine&ldquo; report
          </h2>
          <p className="text-white">
            Sign up with your email address to download our report on mental
            health in Ukraine.
          </p>
        </div>
        <div className="formWrap relative w-full  max-w-[1050px] mx-auto mt-8 z-[2]  ">
          <form
            action="/"
            className=" relative w-[calc(100%+16px)] ml-[-8px] flex items-center justify-center lg:flex-wrap "
          >
            <div className=" relative w-full flex  items-center justify-center lg:flex-wrap ">
              <div className="wrap relative w-full max-w-[315px] mx-2 mb-4  before:content-[''] before:absolute before:top-[-4px] before:left-[-4px] before:w-[calc(100%+8px)] before:h-[calc(100%+8px)] before:bg-none before:border-solid before:border-[2px] before:border-white  ">
                <label htmlFor="firstName" className=" text-[0] hidden ">
                  .
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="First Name"
                  className=" relative w-full py-[22px] px-8 rounded-none bg-white border-none outline-none "
                />
              </div>
              <div className="wrap relative w-full max-w-[315px] mx-2 mb-4 before:content-[''] before:absolute before:top-[-4px] before:left-[-4px] before:w-[calc(100%+8px)] before:h-[calc(100%+8px)] before:bg-none before:border-solid before:border-[2px] before:border-white  ">
                <label htmlFor="lastName" className=" text-[0] hidden ">
                  .
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                  className=" relative w-full py-[22px] px-8 rounded-none bg-white border-none outline-none "
                />
              </div>
              <div className="wrap relative w-full max-w-[315px] mx-2 mb-4 before:content-[''] before:absolute before:top-[-4px] before:left-[-4px] before:w-[calc(100%+8px)] before:h-[calc(100%+8px)] before:bg-none before:border-solid before:border-[2px] before:border-white  ">
                <label htmlFor="emailAddress" className=" text-[0] hidden ">
                  .
                </label>
                <input
                  type="email"
                  id="emailAddress"
                  placeholder="Email Address"
                  className=" relative w-full py-[22px] px-8 rounded-none bg-white border-none outline-none "
                />
              </div>
            </div>
            <div className="btnWrap relative w-full max-w-[133px] mx-2 mb-4  lg:max-w-full lg:flex lg:justify-center lg:mt-8 lg:mb-0  ">
              <label htmlFor="submit" className=" text-[0] hidden ">
                .
              </label>
              <Button
                type="submit"
                value="Sign Up"
                buttonText="Sign Up"
                buttonClass="default"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
