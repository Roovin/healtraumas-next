import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function NewsCard({data}) {
  return (
    <section className="ourNews">
    <div className="container">
      <div className="intro text-center mb-[20px]">
        <h2 className='text-blue'>{data.title}</h2>
      </div>
      <div className="cardWrapper flex flex-wrap">
        {data?.newsCard.map((item, i) => {
          var title = item?.title;
          var titleWithUrl = title.split(" ").join('-');
            return (
                <div key={i} className="card group w-[calc(33.33%-30px)] mx-[15px] mb-[30px] relative overflow-hidden border-[2px] border-black rounded-[8px] phablet:w-[calc(50%-20px)] phablet:mx-[10px] sm:w-full sm:mx-0 phablet:mb-[20px]">
                    <Link href={item.url + '/' + titleWithUrl} className='emptyLink'>.</Link>
                    <div className="imgWrap h-[200px] overflow-hidden ipad:h-[200px] tablet:h-[150px]">
                        <Image src={item.imageUrl} alt={item.alt} width={300} height={300} className='w-full h-full scale-1 transition-all ease-in-out delay-300 group-hover:scale-[1.1] object-cover' />
                    </div>
                    <div className="contentWrap relative p-[20px] h-[200px]">
                        <h4 className='text-ellipsis line-clamp-3 '>{item.title}</h4>
                        <div className="btnWrap absolute bottom-[20px]">
                        <span className=''>{item.btn}</span>
                        </div>
                    </div>
                 </div>
            )
        })}
      </div>
    </div>
  </section>
  )
}
