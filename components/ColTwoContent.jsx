import React from 'react'
import Button from './button/Button'

export default function ColTwoContent({ data }) {
    // console.log(data);
    // console.log(data?.content);
    return (
        <section className={`colTwoContent ${data[0]?.sectionBg}`}>
            <div className="container">
                <div className="row flex sm:flex-wrap">
                    {data.map((item, i) => {
                        return (
                            <div key={i} className="item w-1/2 sm:w-full">
                                {item?.mainTitle ?
                                    <div className="title">
                                        <h2 className='h1 text-blue'>
                                            <span className='text-[51px]'>{item?.mainTitle}</span>
                                        </h2>
                                    </div> :
                                    <div className="contentWrapper">
                                        {item?.content ? item?.content.map((val, i) => {
                                            return (
                                                <div key={i} className="item mb-[20px] last:mb-0">
                                                    <h6 className='my-[20px] text-blue'>{val?.title}</h6>
                                                    <p>{val?.description}</p>
                                                </div>
                                            )
                                            }) :  <>
                                                <p>{item.description}</p>
                                                {item.descriptionTwo && (
                                                    <p>{item.descriptionTwo}</p>
                                                )}
                                                </>
                                        }  
                                       {item.btn && (
                                        <Button
                                            buttonText="Our Work"
                                            buttonClass="default"
                                            url={btnUrl}
                                        />
                                       )}
                                    </div>
                                }
                            </div>
                        )
                    })

                    }

                </div>
            </div>
        </section>
    )
}
