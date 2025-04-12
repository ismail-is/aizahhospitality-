
import React, { useState, useCallback, useEffect } from 'react';
import { DateRangePicker } from 'react-date-range';
import { addDays, differenceInDays } from 'date-fns';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import StickyBox from 'react-sticky-box';
import { useSearchParams } from 'next/navigation';
import testimonialData from '@/data/Testimonial.json';
import { TentType } from '@/type/TentType';
import * as Icon from 'phosphor-react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface GuestType {
    adult: number;
    children: number;
    infant: number;
    pet: number;
}

const DemoBook = () => {
    const router = useRouter();
    
    const params = useSearchParams();
    let tentId = params.get('id');
     const [openDate, setOpenDate] = useState(false);
  const [openGuest, setOpenGuest] = useState(false);
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1), // Default to 1 night stay
      key: 'selection'
    }
  ]);

//   let tentId = props.tentId || '1'; // Safe fallback if tentId is null or undefined

  console.log("Selected Date Range:", state);

    const tentMain = testimonialData.find(tent => tent.id === tentId);
    const [guest, setGuest] = useState<GuestType>({
        adult: 1, // Default to 1 adult
        children: 0,
        infant: 0,
        pet: 0
    });

    // Calculate number of nights and total price
    const nights = differenceInDays(state[0].endDate, state[0].startDate);
    const nightlyRate = 2; // AED 200 per night
    const totalBeforeTaxes = nights * nightlyRate;

    const handleOpenDate = () => {
        setOpenDate(!openDate);
        setOpenGuest(false);
    };

    const handleOpenGuest = () => {
        setOpenGuest(!openGuest);
        setOpenDate(false);
    };

    const handleDateChange = (item: any) => {
        // Ensure minimum stay is 1 night
        if (differenceInDays(item.selection.endDate, item.selection.startDate) < 1) {
            item.selection.endDate = addDays(item.selection.startDate, 1);
        }
        setState([item.selection]);
    };

    const handleClickOutsideDatePopup: EventListener = useCallback((event) => {
        const targetElement = event.target as Element;
        if (openDate && !targetElement.closest('.form-date-picker')) {
            setOpenDate(false);
        }
    }, [openDate]);

    const handleClickOutsideGuestPopup: EventListener = useCallback((event) => {
        const targetElement = event.target as Element;
        if (openGuest && !targetElement.closest('.sub-menu-guest')) {
            setOpenGuest(false);
        }
    }, [openGuest]);

    useEffect(() => {
        document.addEventListener('click', handleClickOutsideDatePopup);
        document.addEventListener('click', handleClickOutsideGuestPopup);
        return () => {
            document.removeEventListener('click', handleClickOutsideDatePopup);
            document.removeEventListener('click', handleClickOutsideGuestPopup);
        };
    }, [handleClickOutsideDatePopup, handleClickOutsideGuestPopup]);

    const increaseGuest = (type: keyof GuestType) => {
        setGuest((prevGuest) => ({
            ...prevGuest,
            [type]: prevGuest[type] + 1
        }));
    };

    const decreaseGuest = (type: keyof GuestType) => {
        if (guest[type] > 0) {
            setGuest((prevGuest) => ({
                ...prevGuest,
                [type]: prevGuest[type] - 1
            }));
        }
    };


    const handleBookNow = () => {
        const startDate = state[0].startDate.toISOString();
        const endDate = state[0].endDate.toISOString();
        const guests = guest.adult ;
        const children = guest.children;
        const price = nightlyRate;
        const totalPrice = nights * nightlyRate;
      
        router.push(
          `/checkout?startDate=${startDate}&endDate=${endDate}&guests=${guests}&children=${children}&price=${price}&totalPrice=${totalPrice}`
        );
      };
      
      
    return (
        <div className="sidebar xl:w-1/3 lg:w-[40%] lg:pl-[45px] w-full">
            <StickyBox offsetTop={100} offsetBottom={20}>
                <div 
                    className="reservation bg-surface p-6 rounded-md" 
                    style={{
                        boxShadow: 'rgba(20, 20, 20, 0.32) 0px 6px 16px',
                        border: '1px solid rgb(221, 221, 221)',
                        borderRadius: '20px'
                    }}
                >
                    <div className="heading6 text-start">Add dates for prices</div>
                    <div className="date-sidebar-detail bg-white border mt-5" style={{borderRadius: '10px'}}>
                        <div className="relative cursor-pointer">
                            <div className="grid grid-cols-2 border-b border-separate" onClick={handleOpenDate}>
                                <div className="left pl-5 py-4 border-r border-separate">
                                    <div className="flex items-center gap-1">
                                        <Icon.CalendarBlank className='text-xl' />
                                        <div className="text-button" style={{fontSize: '12px', fontWeight: 'bolder'}}>Check In</div>
                                    </div>
                                    <div className="body2 mt-1" style={{ fontSize: '12px', fontWeight: 'bolder' }}>
  {state[0].startDate.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
  })}
</div>
                                </div>
                                <div className="left pr-5 py-4">
                                    <div className="flex items-center justify-end gap-1">
                                        <Icon.CalendarBlank className='text-xl' />
                                        <div className="text-button" style={{fontSize: '12px', fontWeight: 'bolder'}}>Check Out</div>
                                    </div>
                                    <div className="body2 mt-1 text-end" style={{ fontSize: '12px', fontWeight: 'bolder' }}>
  {state[0].endDate.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
  })}
</div>

                                </div>
                            </div>
                            {openDate && (
                                <DateRangePicker
                                    className={`form-date-picker box-shadow z-0 ${openDate ? 'open' : ''}` }
                                    onChange={handleDateChange}
                                    moveRangeOnFirstSelection={false}
                                    months={2}
                                    ranges={state}
                                    direction="horizontal"
                                    
                                    minDate={new Date()}
                                  
                                />
                            )}
                        </div>
                        <div className="guest px-5 py-4 relative cursor-pointer">
                            <div className="flex items-center justify-between" onClick={handleOpenGuest}>
                                <div>
                                    <div className="flex items-center gap-1">
                                        <Icon.Users className='text-xl' />
                                        <div className="text-button" style={{fontSize: '12px', fontWeight: 'bolder'}}>Guest</div>
                                    </div>
                                    <div className="body2 mt-1" style={{fontSize: '12px', fontWeight: 'bolder'}}>
                                        {guest.adult} adults - {guest.children} children
                                    </div>
                                </div>
                                <Icon.CaretDown className='text-2xl' />
                            </div>
                            {openGuest && (
                                <div className={`sub-menu-guest bg-white rounded-b-xl overflow-hidden p-5 absolute top-full -mt-px left-0 w-full box-shadow ${openGuest ? 'open' : ''}`}>
                                    <div className="item flex items-center justify-between pb-4 border-b border-outline">
                                        <div className="left">
                                            <p className="text-button" style={{fontSize: '12px', fontWeight: 'bolder'}}>Adults</p>
                                            <div className="caption1 text-variant1" style={{fontSize: '12px', fontWeight: 'bolder'}}>(12 Years+)</div>
                                        </div>
                                        <div className="right flex items-center gap-5">
                                            <div
                                                className={`minus w-8 h-8 flex items-center justify-center rounded-full border border-outline duration-300 ${guest.adult === 0 ? 'opacity-[0.4] cursor-default' : 'cursor-pointer hover:bg-black hover:text-white'}`}
                                                onClick={() => decreaseGuest('adult')}
                                            >
                                                <Icon.Minus weight='bold' />
                                            </div>
                                            <div className="text-title">{guest.adult}</div>
                                            <div
                                                className="plus w-8 h-8 flex items-center justify-center rounded-full border border-outline cursor-pointer duration-300 hover:bg-black hover:text-white"
                                                onClick={() => increaseGuest('adult')}
                                            >
                                                <Icon.Plus weight='bold' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item flex items-center justify-between pb-4 pt-4 border-b border-outline">
                                        <div className="left">
                                            <p className="text-button" style={{fontSize: '12px', fontWeight: 'bolder'}}>Children</p>
                                            <div className="caption1 text-variant1">(2-12 Years)</div>
                                        </div>
                                        <div className="right flex items-center gap-5">
                                            <div
                                                className={`minus w-8 h-8 flex items-center justify-center rounded-full border border-outline duration-300 ${guest.children === 0 ? 'opacity-[0.4] cursor-default' : 'cursor-pointer hover:bg-black hover:text-white'}`}
                                                onClick={() => decreaseGuest('children')}
                                            >
                                                <Icon.Minus weight='bold' />
                                            </div>
                                            <div className="text-title">{guest.children}</div>
                                            <div
                                                className="plus w-8 h-8 flex items-center justify-center rounded-full border border-outline cursor-pointer duration-300 hover:bg-black hover:text-white"
                                                onClick={() => increaseGuest('children')}
                                            >
                                                <Icon.Plus weight='bold' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item flex items-center justify-between pb-4 pt-4">
                                        <div className="left">
                                            <p className="text-button" style={{fontSize: '12px', fontWeight: 'bolder'}}>Pets</p>
                                        </div>
                                        <div className="right flex items-center gap-5">
                                            <div
                                                className={`minus w-8 h-8 flex items-center justify-center rounded-full border border-outline duration-300 ${guest.pet === 0 ? 'opacity-[0.4] cursor-default' : 'cursor-pointer hover:bg-black hover:text-white'}`}
                                                onClick={() => decreaseGuest('pet')}
                                            >
                                                <Icon.Minus weight='bold' />
                                            </div>
                                            <div className="text-title">{guest.pet}</div>
                                            <div
                                                className="plus w-8 h-8 flex items-center justify-center rounded-full border border-outline cursor-pointer duration-300 hover:bg-black hover:text-white"
                                                onClick={() => increaseGuest('pet')}
                                            >
                                                <Icon.Plus weight='bold' />
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="button-main w-full text-center"
                                        onClick={() => setOpenGuest(false)}
                                    >
                                        Done
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="price-block mt-5">
                        <div className="heading6 text-start">Price Details</div>
                        <div className="list mt-2">
                            <div className="flex items-center justify-between">
                                <div className="text-button" style={{fontSize: '12px', fontWeight: 'bolder'}}>AED {nightlyRate} x {nights} {nights === 1 ? 'Night' : 'Nights'}</div>
                                <div className="text-button" style={{fontSize: '12px', fontWeight: 'bolder'}}>AED {nightlyRate * nights}</div>
                            </div>
                        </div>
                        <div className="total-block mt-5 pt-5 border-t border-outline flex items-center justify-between">
                            <div className="heading6">Total  Price </div>
                            <div className="heading5">AED {totalBeforeTaxes}</div>
                        </div>
                        <div className="button-main w-full text-center mt-5">   <button onClick={handleBookNow}>Book Now</button></div>
                          <a
  href="https://wa.me/918197723683"
  target="_blank"
  rel="noopener noreferrer"
>
  <div className="button-main w-full text-center mt-5 bg-[#DDCE74] hover:bg-success  text-white ">
    Enquire on WhatsApp
  </div>
</a>
                    </div>
                </div>
            </StickyBox>
        </div>
    );
};

export default DemoBook;