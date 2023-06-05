import React from 'react'
import leftArrow from "../Assets/chevron-left.svg"
import Card from '../Components/Card'

const Home = () => {
  return (
    <div className='flex flex-col items-center w-1/3  font-sans h-screen m-auto text-white bg-black gap-8 py-5 px-10 ' >
      <div className='flex flex-row w-full justify-between' >
        <div className="flex" >
          <div className="text-white" >
          </div>
          <div className='text-2xl font-semibold'>Back</div>
        </div>
        <div className='text-4xl font-bold'>
          Pricing
        </div>
        <div className="invisible text-2xl font-semibold" >
          Back
        </div>
      </div>

      <div className='flex h-0.5 w-full bg-gradient-to-r from-white to-black ...  ' > </div>

      <div className="text-2xl text-center font-bold" >
        Some intererting tem thot could give a
        eeling o trurt to the user.
      </div>
      <div className="w-full h-full" >
        <Card/>
      </div>
    </div>
  )
}

export default Home