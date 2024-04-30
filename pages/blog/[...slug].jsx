import React, { useEffect, useState } from 'react'
import { useRouter } from "next/router"
import { blogData } from '../../public/data/blogData'
import Link from 'next/link';
import Image from 'next/image';

export default function BlogDetail() {
    
    const router = useRouter();
    const query = router.query
    const queryVal = query?.slug?.[0];
    var getValue = queryVal?.replace(/-/g, " ")
    const [isValue, setGetValue] = useState(getValue);
  
  return (
    <section className="blogDetail">
      {blogData?.cards.map((item, i) => {
            return (
              <div className="container" key={i}>
                {item.title === isValue ?
                  <div className='max-w-[1020px] mx-auto'>
                    <div className="intro text-center mb-[20px] ">
                      <p className='text-blue'>{item.date }</p>
                      <h2 className='text-blue h1'><span>{item.title}</span></h2>
                    </div>
                    <div className=''>
                      {
                        item?.blogDetail.map((val, i) => {
                          const qDt = val.quote
                          return (
                             qDt ? 
                              <p key={i} className='mb-[40px]'><q>{val.quote}</q></p>
                              :
                              val?.imgUrl ? 
                                <div className="imgWrapWithText flex mb-[20px] md:flex-wrap">
                                  <div className="imgWrap w-1/2 mr-[20px] md:w-full">
                                    <Image src={val?.imgUrl} alt='' width={200} height={200} className='w-full rounded-[8px]' />
                                  </div>
                                  <p key={i} className='mb-[40px] w-1/2 md:w-full' dangerouslySetInnerHTML={{ __html: val.detail }} />
                                </div> 
                                :
                                <p key={i} className='mb-[40px]' dangerouslySetInnerHTML={{ __html: val.detail }} />
                              
                          )
                        })
                      }
                    </div>
                    {item?.sources && (
                    <div className="sourcesWrap">
                      <div className="title">
                        <p>Sources: </p>
                      </div>
                      <div className="sourcesList">
                        <ul>
                          {
                            item?.sources.map((list, index) => {
                              return (
                                <li key={index} className='mb-[40px]'>
                                  <p dangerouslySetInnerHTML={{ __html: list.source }} />
                              </li>
                              )
                            })
                          }
                        </ul>
                      </div>
                    </div>
                    )}
                    {/* {
                      item?.filterList && (
                        <div className="filterList">
                          <ul className='flex'>
                            {
                              item?.filterList.map((val, i) => {
                                return(
                                  <li key={i} className='pr-[20px] last:pr-0'>
                                      <p>
                                        <Link href="" className='no-underline font-[600]'>{val.list}</Link>
                                      </p>
                                  </li>
                                )
                              })
                            }
                          </ul>
                        </div>
                      )
                    } */}
                  </div>
                  : ''}
                </div> 
            ) 
          })
        } 
    </section>
  )
}
