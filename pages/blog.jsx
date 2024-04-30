import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Button from '@/components/button/Button'
import BlogCards from '@/components/BlogCards'
import {blogData} from '../public/data/blogData'

export default function index() {
  return (
    <>
        <BlogCards data={blogData} />
        
    </>
  )
}
