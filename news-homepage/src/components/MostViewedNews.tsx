import React from 'react'

type Props = {
    newsNumber: string;
    header: string;
    brief: string;
}

export default function MostViewedNews(props: Props) {
  return (
    <div className='flex flex-col gap-2'>
        <span className='text-3xl text-neutral-grayishBlue font-bold'>{props.newsNumber}</span>
        <span className='text-ls text-neutral-veryDarkBlue font-black'>{props.header}</span>
        <span className='text-sm text-neutral-darkGrayishBlue font-semibold'>{props.brief}</span>
    </div>
  )
}