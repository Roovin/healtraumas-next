import React from 'react'
import ImageWithContent from '@/components/ImageWithContent'
import ColTwoContent from '@/components/ColTwoContent'
import { missionData, colTwoContentData, colTwoContentTwoData } from '../public/data/ourMissionPageData'

export default function OurMission() {
  return (
    <>
        <ImageWithContent data={ missionData } />
        <ColTwoContent data={colTwoContentData} />
        <ColTwoContent data={colTwoContentTwoData} />
    </>
  )
}
