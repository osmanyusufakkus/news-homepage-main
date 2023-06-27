import React from 'react'

type Props = {}

export default function HighlightedNew({}: Props) {
  return (
    <div className='col-span-12 md:col-span-8 w-100 h-[420px] bg-slate-500'>
        <div>
            <img className='object-contain' src='/image-web-3-desktop.jpg'/>
        </div>
            <div className='flex flex-row grid grid-cols-2 mb:col-span-2'>
                <span className=''>The Bright Future of Web 3.0?</span>
                <span>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</span>
            </div>
    </div>
    
  )
}