import React from 'react'
import TeamWithSlider from '@/components/TeamWithSlider'
import {operatingTeamData} from '../public/data/ourTeamPageData'

export default function ourTeam() {
  return (
    <>
        <TeamWithSlider data={operatingTeamData} />
    </>
  )
}
