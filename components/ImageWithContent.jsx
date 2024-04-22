import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ImageWithContent({ data }) {
  return (
    <section className="imageWithContent">
        <div className="container">
            <div className="row flex">
                {
                    data.map((item, i) => {
                        return(
                            <div key={i} className="colTwo w-1/2">
                                {item.imageUrl ? 
                                <div className="imgWrap">
                                    <Image src={item.imageUrl} alt={item.alt} width={514} height={342}/>
                                </div>
                                    :
                                <div className="content">
                                    <div className="item mission">
                                        <h2 className='h1 my-[20px] text-blue'>{item.title}</h2>
                                        <p className='text-blue'>{item.description}</p>
                                    </div>
                                    <div className="item vission mt-[40px]">
                                        <h2 className='h1 my-[20px] text-blue'>{item.title1}</h2>
                                        <p className='text-blue'>{item.description1}</p>
                                    </div>
                                </div>
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}
