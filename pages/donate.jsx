import React from 'react'
import ParallaxBlade from '@/components/ParallaxBlade'
import {donateData} from '../public/data/donateData'
import Payment from '@/components/Payment'

export default function Donate() {
  return (
    <>
      <ParallaxBlade data={donateData} />
      <Payment />
    </>
  )
}
