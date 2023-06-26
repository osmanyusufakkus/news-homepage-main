import React from 'react'
import News from './News'

export default function NewsContainer() {
  return (
    <div className='col-span-12 md:col-span-4 w-100 h-96 bg-slate-950 p-4'>
      <span className='text-3xl text-primary-softOrange font-semibold mb-4'>New</span>
      <News title="Hydrojen vs Electric Cars" content='Will hydrogen powered carsever catch up EVs?'/>
      <News title="Hydrojen vs Electric Cars" content='Will hydrogen powered carsever catch up EVs?'/>
      <News title="Hydrojen vs Electric Cars" content='Will hydrogen powered carsever catch up EVs?'/>
      <News title="Hydrojen vs Electric Cars" content='Will hydrogen powered carsever catch up EVs?'/>
    </div>
  )
}
