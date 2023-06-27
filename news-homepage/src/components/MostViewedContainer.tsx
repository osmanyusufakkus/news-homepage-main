import React from 'react'
import MostViewedNews from './MostViewedNews'
import MostViewedNewItem from './MostViewedNewItem'

type Props = {}

export default function MostViewedContainer({}: Props) {
  return (
    <div className='grid grid-cols-12 gap-4' >
        <MostViewedNewItem imagename='/image-retro-pcs.jpg'
        newsNumber='01' header='Reviving Retro PCs' brief='What happens when old PCs are given modern upgrades?'/>
        <MostViewedNewItem imagename='/image-top-laptops.jpg'
        newsNumber='02' header='Top 10 Laptops of 2022' brief='Our best picks for various needs and budgets.'/>
        <MostViewedNewItem imagename='/image-gaming-growth.jpg'
        newsNumber='03' header='The Growth of Gaming' brief='How the pandemic has sparked fresh opportunities.'/>
    </div>
  )
}

