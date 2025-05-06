import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import TextHeading from '../TextHeading/TextHeading'
import { useRouter } from 'next/navigation'

const LocationOne = () => {
    const router = useRouter()

    const handleClickContinents = (continents: string) => {
        router.push(`/camp/topmap-grid?continents=${continents}`)
    }

    return (
        <>
            <div className="location-block lg:pt-20 md:pt-14 pt-10">
                <div className="container">
                    <TextHeading title='Locations on Glamping Hub' subTitle='Discover the Most Popular Places to Visit' />
                    <div className="list-location grid lg:grid-cols-3 min-[370px]:grid-cols-2 md:gap-[30px] gap-y-7 gap-4 md:mt-10 mt-6">
                        <div
                            className="item hover-scale"
                            // onClick={() => handleClickContinents('Africa')}
                        >
                             <Link href='camp/tent-detail'>
                            <div className="bg-img w-full sm:rounded-[20px] rounded-xl overflow-hidden">
                                <Image
                                    src={'/images/allimg/rooms/2.png'}
                                    width={3000}
                                    height={2000}
                                    alt='1.png'
                                    priority={true}
                                    className='w-full'
                                />
                            </div>
                            <div className="name heading5 sm:mt-5 mt-3">Chic 1 BHK</div>
                            <div className="text-variant1 sm:mt-1">460 accommodations</div>
                            </Link>
                        </div>
                        <div
                            className="item hover-scale"
                            // onClick={() => handleClickContinents('Asia')}
                        >
                            <Link href='camp/dubai-mall'>
                            <div className="bg-img w-full sm:rounded-[20px] rounded-xl overflow-hidden">
                                <Image
                                    src={'/images/allimg/demo/3.png'}
                                    width={3000}
                                    height={2000}
                                    alt='2.png'
                                    priority={true}
                                    className='w-full'
                                />
                            </div>
                          
                            <div className="name heading5 sm:mt-5 mt-3">Dubai mall</div>
                            <div className="text-variant1 sm:mt-1">10+ accommodations</div>
                            </Link>
                        </div>
                        <div
                            className="item hover-scale"
                            // onClick={() => handleClickContinents('Europe')}
                        >
                             <Link href='camp/chic-studio'>
                            <div className="bg-img w-full sm:rounded-[20px] rounded-xl overflow-hidden">
                                <Image
                                    src={'/images/allimg/rooms/5.png'}
                                    width={3000}
                                    height={2000}
                                    alt='3.png'
                                    priority={true}
                                    className='w-full'
                                />
                            </div>
                            <div className="name heading5 sm:mt-5 mt-3">Chic studio</div>
                            <div className="text-variant1 sm:mt-1">460 accommodations</div>
                            </Link>
                        </div>
                        <div
                            className="item hover-scale"
                            onClick={() => handleClickContinents('North America')}
                        >
                            <div className="bg-img w-full sm:rounded-[20px] rounded-xl overflow-hidden">
                                <Image
                                    src={'/images/location/410x273.png'}
                                    width={3000}
                                    height={2000}
                                    alt='4.png'
                                    priority={true}
                                    className='w-full'
                                />
                            </div>
                            <div className="name heading5 sm:mt-5 mt-3">North America</div>
                            <div className="text-variant1 sm:mt-1">460 accommodations</div>
                        </div>
                        <div
                            className="item hover-scale"
                            onClick={() => handleClickContinents('Oceania')}
                        >
                            <div className="bg-img w-full sm:rounded-[20px] rounded-xl overflow-hidden">
                                <Image
                                    src={'/images/location/410x273.png'}
                                    width={3000}
                                    height={2000}
                                    alt='5.png'
                                    priority={true}
                                    className='w-full'
                                />
                            </div>
                            <div className="name heading5 sm:mt-5 mt-3">Oceania</div>
                            <div className="text-variant1 sm:mt-1">460 accommodations</div>
                        </div>
                        <div
                            className="item hover-scale"
                            onClick={() => handleClickContinents('South America')}
                        >
                            <div className="bg-img w-full sm:rounded-[20px] rounded-xl overflow-hidden">
                                <Image
                                    src={'/images/location/410x273.png'}
                                    width={3000}
                                    height={2000}
                                    alt='6.png'
                                    priority={true}
                                    className='w-full'
                                />
                            </div>
                            <div className="name heading5 sm:mt-5 mt-3">South America</div>
                            <div className="text-variant1 sm:mt-1">460 accommodations</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LocationOne