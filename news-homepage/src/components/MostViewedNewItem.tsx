import React from 'react'
import Images from './Image'
import MostViewedNews from './MostViewedNews'

type Props = {
    imagename: string;
    newsNumber: string;
    header: string;
    brief: string;
}

export default function MostViewedNewItem(props: Props) {
  return (
    <div className='flex flex-row col-span-12 md:col-span-4 w-100 h-36 gap-4'>
        <Images imagename={props.imagename}/>
        <MostViewedNews newsNumber={props.newsNumber} header={props.header} brief={props.brief}/>
    </div>
  )
}