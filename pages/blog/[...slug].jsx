import React, { useEffect, useState } from 'react'
import { useRouter } from "next/router"
import { blogData } from '../../public/data/blogData'

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
                                  <p>{ list.source }</p>
                              </li>
                              )
                            })
                          }
                        </ul>
                      </div>
                    </div>
                    )}
                  </div>
                  : ''}
                </div> 
            ) 
          })
        } 
    </section>
  )
}
