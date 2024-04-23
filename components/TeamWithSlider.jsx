import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import IntroWithCta from './IntroWithCta'
import { operatingTeamDataIntro } from '../public/data/ourTeamPageData'

export default function TeamWithSlider({ data }) {
    console.log(data);
    return (
        <>
            <IntroWithCta data={operatingTeamDataIntro} className={'pb-0'} />
            <section className="teamWithSlider pt-0">
                <div className="container">
                    <div className="cardWrapper flex flex-wrap w-full">
                        {data?.team?.map((item, index) => {
                            console.log(item);
                            return (
                                <div key={index} className={`card relative group w-[calc(33.33%-30px)] mx-[15px]`}>
                                    <Link href={'/'} className='emptyLink'>.</Link>
                                    <div className="imgWrap">
                                        <Image src={item.imageUrl} alt={item.alt} width={300} height={400} className='w-full' />
                                    </div>
                                    <div className="contentWrap">
                                        <p>{item.position}</p>
                                        <h3>{item.authorName}</h3>
                                        <div className="btnWrap">
                                            <span>Read More</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}
