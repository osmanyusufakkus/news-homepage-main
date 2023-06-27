import React from 'react'

type Props = {
    newsNumber: string;
    header: string;
    brief: string;
}

export default function MostViewedNews(props: Props) {
  return (
    <div className='flex flex-col gap-4'>
        <span className=''>{props.newsNumber}</span>
        <span className=''>{props.header}</span>
        <span className='text-sm text-gray-500 font-semibold'>{props.brief}</span>
    </div>
  )
}