import React from 'react'
import News from './News'

export default function NewsContainer() {
  return (
    <div className='col-span-12 md:col-span-4 w-100 h-96 bg-slate-950 p-4'>
      <span className='text-3xl text-primary-softOrange font-semibold mb-4'>New</span>
      <News title="Hydrogen vs Electric Cars" content='Will hydrogen-fueled cars ever catch up to EVs?'/>
      <News title="The Downsides of AI Artistry" content='What are the possible adverse effect of on-demand AI image generation?'/>
      <News title="Is VC Funding Drying Up?" content='Private funding by VC firms is down 50% YOY. We take a look at what that means.'/>
    </div>
  )
}
