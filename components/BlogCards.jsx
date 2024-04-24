import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from './button/Button'

export default function BlogCards({data}) {
  return (
    <section className="blogs">
    <div className="container">
        <div className="intro text-center mb-[20px]">
            <h2 className='text-blue'>{data.title}</h2>
        </div>
        <div className="cardWrapper">
            {
                data?.cards.map((item, i) => {
                    return (
                        <div key={i} className="card">
                            <Link href={item.btnUrl}>.</Link>
                            <div className="imgWrap">
                                <Image src={item.imgUrl} alt={item.alt} width={300} height={400} />
                            </div>
                            <div className="contentWrap">
                                <span>{item.date}</span>
                                <h2 className='h1'>{item.title}</h2>
                                <p>{item.description}</p>
                                <div className="btnWrap">
                                    <Button
                                        buttonText={'Read More'}
                                        buttonClass={''}
                                        url={''}
                                    />
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
</section>
  )
}
