'use client'
import React from 'react'

type Props = {}

export default function WebHeader({}: Props) {

  const [open, setOpen] = React.useState(false)

  return (
    <div className='w-full h-16 p-4'>
        <div className='flex justify-between items-center'>
          <img src="logo.svg" className='h-10 w-auto'/>
          <div className='gap-4 md:gap-12 text-lg font-semibold hidden mb:flex'>
            <span className='cursor-pointer hover:text-primary-softOrange'>Home</span>
            <span className='cursor-pointer hover:text-primary-softOrange'>New</span>
            <span className='cursor-pointer hover:text-primary-softOrange'>Popular</span>
            <span className='cursor-pointer hover:text-primary-softOrange'>Trending</span>
            <span className='cursor-pointer hover:text-primary-softOrange'>Categories</span>
          </div>
          {!open && 
          <img src="icon-menu.svg" className='h-5 w-auto block mb:hidden' onClick={()=>{
            setOpen(!open);
          }}/>
          }

          {open &&
          <div className='fixed mb:hidden z-10 top-0 right-0 h-[100vh] bg-white min-w-[320px] '>
            <img src="icon-menu-close.svg" className='h-8 w-8 block mb:hidden fixed top-9 right-12' onClick={()=>{
              setOpen(!open);
            }}/>
            <div className='flex flex-col gap-4 md:gap-12 text-2xl text-neutral-darkGrayishBlue font-semibold p-6 pt-40'>
              <span className='cursor-pointer hover:text-primary-softOrange'>Home</span>
              <span className='cursor-pointer hover:text-primary-softOrange'>New</span>
              <span className='cursor-pointer hover:text-primary-softOrange'>Popular</span>
              <span className='cursor-pointer hover:text-primary-softOrange'>Trending</span>
              <span className='cursor-pointer hover:text-primary-softOrange'>Categories</span>
            </div>
          </div>
          }

        </div>
    </div>
  )
}