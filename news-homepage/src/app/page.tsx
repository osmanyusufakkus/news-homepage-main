import Image from 'next/image'

export default function Home() {
  return (
    <main className="p-12">
      <div className='w-full h-20 bg-slate-400'></div>
      <div className='grid grid-cols-12 gap-4 my-4'>
        <div className='col-span-12 md:col-span-8 w-100 h-96 bg-slate-500'></div>
        <div className='col-span-12 md:col-span-4 w-100 h-96 bg-slate-500'></div>
      </div>
      <div className='grid grid-cols-12 gap-4' >
        <div className='col-span-12 md:col-span-4 w-100 h-36 bg-slate-500'></div>
        <div className='col-span-12 md:col-span-4 w-100 h-36 bg-slate-500'></div>
        <div className='col-span-12 md:col-span-4 w-100 h-36 bg-slate-500'></div>
      </div>
    </main>
  )
}
