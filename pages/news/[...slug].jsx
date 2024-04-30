import React from 'react'
import { useRouter } from "next/router"
import { newsData } from '../../public/data/newData'
import Link from 'next/link';
import Image from 'next/image';

export default function NewsDetail() {
  const router = useRouter();
  const query = router.query
  const queryVal = query?.slug?.[0];
  var getValue = queryVal?.replace(/-/g, " ")
  // const [isValue, setGetValue] = useState(getValue);
  return (
    <section className="newsDetail">

      {
        newsData?.newsCard?.map((item, i) => {

          return (
            <div key={i} className="container">
              {item.title === getValue ?
                <div className='max-w-[1020px] mx-auto'>
                  <div className="intro text-center">
                    <h2 className='text-blue'>{item.title}</h2>
                  </div>
                  <div className="details mt-[20px]">
                    {item?.content.map((val, i) => {
                      return (
                        <p key={i} dangerouslySetInnerHTML={{ __html: val.description }} className='mb-[40px] md:mb-[20px]' />
                      )
                    })}
                  </div>
                </div> :
                ''
              }
            </div>
          )

        })
      }

    </section>
  )
}
