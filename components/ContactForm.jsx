import React, { useState, useEffect } from 'react'
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
    const [state, handleSubmit] = useForm("xeqyvnlk");
    return (
        <section className="ContactForm">
            <div className="container">
                <div className="intro text-center">
                    <h2 className='text-blue'>Interested in working with us? Get in touch! </h2>
                </div>
                <form action="" className='mt-[40px] max-w-[1050px] mx-auto'>
                    <div className="formWrap flex w-[calc(100%+30px)] ml-[-15px] mb-[10px] md:mb-[5px] sm:flex-wrap sm:w-full sm:mx-0">
                        <div className="firstFieldName w-[calc(50%-30px)] mx-[15px] sm:w-full sm:mx-0">
                            <label htmlFor="firstName" className=" text-blue mb-[4px] inline-block">
                                First Name (required)
                            </label>
                            <input
                                id="firstName"
                                type="text"
                                name="firstName"
                                className="relative w-full py-[10px] wrap mb-4 px-4 md:py-[8px] laptop:p-5 lg:p-4 rounded-none bg-silverChalice border-silverCharlice border-[1px] bg-alabaster transition duration-300 ease-in-out focus:outline-solid focus:outline-blue focus:outline-[1px]"
                                required
                            />
                            <ValidationError
                                prefix="FirstName"
                                field="firstName"
                                errors={state.errors}
                            />
                        </div>
                        <div className="lastFieldName w-[calc(50%-30px)] mx-[15px] mb-[10px] sm:w-full sm:mx-0">
                            <label htmlFor="firstName" className=" text-blue mb-[4px] inline-block">
                                First Name (required)
                            </label>
                            <input
                                id="firstName"
                                type="text"
                                name="firstName"
                                className="relative w-full py-[10px] wrap mb-4 px-4 md:py-[8px] laptop:p-5 lg:p-4 rounded-none bg-silverChalice border-silverCharlice border-[1px] bg-alabaster transition duration-300 ease-in-out focus:outline-solid focus:outline-blue focus:outline-[1px]"
                                required
                            />
                            <ValidationError
                                prefix="FirstName"
                                field="firstName"
                                errors={state.errors}
                            />
                        </div>
                    </div>
                    <div className="formWrap flex mb-[10px] md:mb-[5px] ">
                        <div className="firstFieldName w-full">
                            <label htmlFor="email" className=" text-blue mb-[4px] inline-block">
                                Email (required)
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                className="relative w-full py-[10px] wrap mb-4 px-4 md:py-[8px] laptop:p-5 lg:p-4 rounded-none bg-silverChalice border-silverCharlice border-[1px] bg-alabaster transition duration-300 ease-in-out focus:outline-solid focus:outline-blue focus:outline-[1px]"
                                required
                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />
                        </div>
                    </div>
                    <div className="formWrap flex mb-[10px] md:mb-[5px]">
                        <div className="firstFieldName w-full">
                            <label htmlFor="subject" className=" text-blue mb-[4px] inline-block">
                                Subject (required)
                            </label>
                            <input
                                id="subject"
                                type="subject"
                                name="subject"
                                className="relative w-full py-[10px] wrap mb-4 px-4 md:p-[8px] laptop:p-5laptop:p-5 lg:p-4 rounded-none bg-silverChalice border-silverCharlice border-[1px] bg-alabaster transition duration-300 ease-in-out focus:outline-solid focus:outline-blue focus:outline-[1px]"
                                required
                            />
                            <ValidationError
                                prefix="Subject"
                                field="subject"
                                errors={state.errors}
                            />
                        </div>
                    </div>
                    <div className="formWrap flex mb-[10px] md:mb-[5px]">
                        <div className="firstFieldName w-full">
                            <label htmlFor="message" className=" text-blue mb-[4px] inline-block">
                                Message (required)
                            </label>
                            <textarea
                                id="message"
                                type="text"
                                name="message"
                                className="relative w-full py-[10px] wrap mb-4 px-4 md:p-[8px] laptop:p-5 lg:p-4 rounded-none bg-silverChalice border-silverCharlice border-[1px] bg-alabaster transition duration-300 ease-in-out focus:outline-solid focus:outline-blue focus:outline-[1px]"
                                required
                            />
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                            />
                        </div>
                    </div>
                    <div className="formWrap  text-center w-full">
                        <button type="submit" className="default btn-blue h-full md:max-w-[150px] text-center" disabled={state.submitting}>
                            Submit
                            </button>
                    </div>
                </form>
            </div>
        </section>
    )
}
