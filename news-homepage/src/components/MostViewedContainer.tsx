import React from 'react'
import MostViewedNews from './MostViewedNews'
import MostViewedNewItem from './MostViewedNewItem'

type Props = {}

export default function MostViewedContainer({}: Props) {
  return (
    <div className='grid grid-cols-12 gap-2' >
        <MostViewedNewItem imagename='/image-retro-pcs.jpg'
        newsNumber='01' header='Reviving Retro PCs' brief='What happens when old PCs are given modern upgrades?'/>
        <MostViewedNewItem imagename='/image-top-laptops.jpg'
        newsNumber='01' header='Reviving Retro PCs' brief='What happens when old PCs are given modern upgrades?'/>
        <MostViewedNewItem imagename='/image-gaming-growth.jpg'
        newsNumber='01' header='Reviving Retro PCs' brief='What happens when old PCs are given modern upgrades?'/>
        
    </div>
  )
}

