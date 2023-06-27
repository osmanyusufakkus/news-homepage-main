import React from 'react'

type Props = {
  imagename: string;
}

export default function Images(props: Props) {
  return (
    <div>
      <img src={props.imagename} alt='' className='w-24 h-32'/>
    </div>
  )
}