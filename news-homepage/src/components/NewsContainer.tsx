import React from 'react'
import News from './News'

export default function NewsContainer() {
  return (
    <div className='col-span-12 mb:col-span-4 bg-slate-950 p-2 mb:p-6'>
      <span className='text-3xl text-primary-softOrange font-semibold my-4'>New</span>
      <News title="Hydrogen vs Electric Cars" content='Will hydrogen-fueled cars ever catch up to EVs?'/>
      <hr className='bg-gray-500 border-none h-[2px] my-6' />
      <News title="The Downsides of AI Artistry" content='What are the possible adverse effect of on-demand AI image generation?'/>
      <hr className='bg-gray-500 border-none h-[2px] my-6' />
      <News title="Is VC Funding Drying Up?" content='Private funding by VC firms is down 50% YOY. We take a look at what that means.'/>
    </div>
  )
}
