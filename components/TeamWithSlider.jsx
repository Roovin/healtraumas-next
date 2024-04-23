import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import IntroWithCta from './IntroWithCta'
import { operatingTeamDataIntro } from '../public/data/ourTeamPageData'

export default function TeamWithSlider({data}) {
  return (
    <section className="teamWithSlider">
        <div className="container">
            <IntroWithCta data={operatingTeamDataIntro} />
        </div>
    </section>
  )
}
