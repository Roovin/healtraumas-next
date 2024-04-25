import React from 'react'
import NewsCard from '@/components/NewsCard'
import {newsData} from '../public/data/newData'


export default function OurNews() {
  return (
    <>
      <NewsCard data={newsData} />
    </>
  )
}
