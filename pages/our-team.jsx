import React from 'react'
import TeamWithSlider from '@/components/TeamWithSlider'
import {operatingTeamData, DirectorsTeamData, advisoryTeamData} from '../public/data/ourTeamPageData'

export default function OurTeam() {
  return (
    <>
        <TeamWithSlider data={operatingTeamData} />
        <TeamWithSlider data={DirectorsTeamData} />
        <TeamWithSlider data={advisoryTeamData} />
    </>
  )
}
