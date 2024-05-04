import React from 'react'
import Image from 'next/image'

export default function ImageWithContent({ data }) {
  return (
    <section className="imageWithContent">
        <div className="container">
            <div className="row flex md:flex-wrap">
                {
                    data?.map((item, i) => {
                        return(
                            <div key={item?.id+i} className="colTwo w-1/2 mr-[20px] last:mr-0 md:w-full md:mb-[20px] md:last:mb-0 md:mr-0">
                                {item?.imageUrl ? 
                                <div className="imgWrap">
                                    <Image loading="eager" src={item?.imageUrl} alt={item?.alt} width={514} height={342} className='md:w-full' />
                                </div>
                                    :
                                <div className="content">
                                    <div className="item mission">
                                        <h2 className='h1 mb-[20px] text-blue lg:mb-[10px]'>{item?.title}</h2>
                                        <p className='text-blue'>{item?.description}</p>
                                    </div>
                                    <div className="item vission mt-[40px] lg:mt-[20px]">
                                        <h2 className='h1 mb-[20px] text-blue lg:mb-[10px]'>{item?.title1}</h2>
                                        <p className='text-blue'>{item?.description1}</p>
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
