import Link from 'next/link'
import React from 'react'

export default function Payment() {
  return (
    <section className="Payment">
        <div className="container">
            <div className="payForm">
                <iframe src="https://givebutter.com/elements/forms/I1by5k3m3PhqNo9Z/donate/EWJGOZ?GBA_GB.element.id=818&amp;GBA_GB.element.type=giving-form&amp;GBA_GB.element.url=https%3A%2F%2Fhealtraumas.org%2Fdonate" frameBorder="0" scrolling="no" seamless="" allowpaymentrequest="" name="givebutter" id="iFrameResizer0" style={{ width: '100%', height: '367px', maxWidth: '601px', scrollMarginTop: '20px', overflow: 'hidden', margin: '0 auto' }}></iframe>
            </div>
            <div className="contentWrap pt-[100px] md:pt-[50px]">
                <div className="intro py-[20px] bg-blue text-center">
                    <h2 className='h1 text-white'>Other Ways To Donate:</h2>
                </div>
                <div className="row pt-[50px] flex md:flex-wrap ">
                    <div className="colOne bg-skyBlue w-[calc(50%-30px)] mx-[15px] p-[20px] md:w-full md:mb-[20px] md:mx-0">
                        <h5 className='mb-[20px]'>Donate by ACH/Wire Transfer</h5>
                        <p >Please email <Link href="mailto:elisewilson@healtraumas.org">elisewilson@healtraumas.org</Link> for bank information. Please include your full name, home address, and email so that we may record your donation in compliance with regulations. </p>
                    </div>
                    <div className="colOne bg-skyBlue w-[calc(50%-30px)] mx-[15px] p-[20px] md:w-full md:mx-0">
                        <h5 className='mb-[20px]'>Donate by Check/Donor Advised Fund</h5>
                        <p>Please reach out to <Link href="mailto:elisewilson@healtraumas.org">elisewilson@healtraumas.org</Link> for the mailing address for checks. </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
