import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Benefit = () => {
    return (
        <>
            <div className="benefit-block lg:pt-20 md:pt-14 pt-10">
                <div className="container">
                    <div className="content-main lg:flex items-center">
                        <div className="left lg:w-1/2 lg:pr-[45px]">
                            {/* <div className="heading3">Luxury GlampHub Camping</div> */}
                            <div className="body2 text-variant1 mt-3">Every space we offer is a reflection of those experiences — where function meets warmth, and every detail is intentionally chosen to create a sense of ease and belonging. From crisp linens to cozy corners, the space isn’t just about where you stay — it’s about how you feel while you’re here.
                            </div>
                            <br/>
                            <div className="body2 text-variant1 mt-3">Whether you’re a business traveler, a family on vacation, or someone in search of a peaceful escape, Aizah Hospitality invites you to experience comfort with character. We’re here to make your stay effortless, elegant, and just a little unforgettable.
                            </div>
                            {/* <div className="list-benefit mt-5">
                                <ul>
                                    <li className='list-disc body2 ml-5'>Complimentary continental breakfast, locally-sourced.</li>
                                    <li className='list-disc body2 ml-5 mt-3'>Private tented balcony immersed in the woods.</li>
                                    <li className='list-disc body2 ml-5 mt-3'>Immediate access to Upper Buttermilk Falls hiking trails.</li>
                                    <li className='list-disc body2 ml-5 mt-3'>Bare Bones Living Lanterns in each tent.</li>
                                </ul>
                            </div> */}
                            {/* <Link href={'/about'} className='button-main mt-5'>About Us</Link> */}
                        </div>
                        <div className="right lg:w-1/2 lg:pl-[45px] max-lg:mt-8">
                            <div className="bg-img rounded-xl overflow-hidden">
                                <Image
                                    src={'/images/allimg/demo/about.png'}
                                    width={2000}
                                    height={1200}
                                    alt='bg-img'
                                    priority={true}
                                    className='w-full'
                                    style={{borderRadius:'10%'}}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Benefit