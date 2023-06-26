import React from 'react'

interface Props {
  title: string;
  content: string;
}

export default function News(props: Props) {

  return (
    <div className='flex flex-col gap-2 my-4'>
      <span className='text-xl text-white font-semibold'>{props.title}</span>
      <span className='text-sm text-gray-500 font-semibold'>{props.content}</span>
    </div>
  )
}
