import React from 'react'
import Link from 'next/link'

export default function Faq({data}) {
  return (
    <section className="pat">
        <div className="container">
            <div className="intro text-center mb-[40px]">
                <h2 className='text-blue h1'>{data?.title}</h2>
            </div>
            {
                data?.patData.map((item, i) => {
                    return (
                        <div key={i} className="item mb-[40px]">
                           <div className="titleWrap">
                            <h6 className='text-blue leading-[0.5]' ><span className='inline-block pr-[10px] mb-[20px] relative'>{i+1}.</span>{item?.title}</h6>
                            <p className='pl-[20px]'>{item?.description}</p>
                           </div>
                        </div>
                    )
                })
            }
            <div className="linksWrap">
                <ul>
                    {
                        data?.links?.map((item, i) => {
                            return (
                                <li key={i} className='mb-[29px]'>
                                    <Link href={item?.url} className='underline'><span className='inline-block pr-[10px]'>{i + 1}</span>{item?.url}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    </section>
  )
}

