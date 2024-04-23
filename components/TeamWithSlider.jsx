import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import IntroWithCta from './IntroWithCta'
import { operatingTeamDataIntro } from '../public/data/ourTeamPageData'

export default function TeamWithSlider({data}) {
  return (
    <>
    <IntroWithCta data={operatingTeamDataIntro} className={'pb-0'} />
    <section className="teamWithSlider pt-0">
        <div className="container">
            <div className="cardWrapper">
                <div className="card">
                    
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
