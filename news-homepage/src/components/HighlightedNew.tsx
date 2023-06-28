import React from 'react'

type Props = {}

export default function HighlightedNew({}: Props) {
  return (
    <div className='col-span-12 md:col-span-8 w-100'>
        <div>
            <img className='object-contain hidden mb:block' src='/image-web-3-desktop.jpg'/>
            <img className='object-contain block mb:hidden' src='/image-web-3-mobile.jpg'/>
        </div>
        <div className='grid grid-cols-2 gap-4 p-4'>
            <span className='text-[55px] font-bold col-span-2 mb:col-span-1 leading-[55px]'>The Bright Future of Web 3.0?</span>
            <div className='flex flex-col gap-8 col-span-2 mb:col-span-1'>
                <span className='text-neutral-darkGrayishBlue '>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</span>     
                <button className="bg-primary-softRed text-white font-normal text-sm tracking-[4px] py-3 px-4 w-[160px]">READ MORE</button>
            </div>
        </div>
    </div> 
  )
}