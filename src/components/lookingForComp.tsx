'use client'

import Button from '@mui/material/Button';
import * as React from 'react';

const LookingForComp = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center my-20 '  >
      <div className='flex flex-col   bg-orange-600 gap-10 p-4 border-2 border-orange-600 rounded-3xl' >
        <h1 className='text-2xl font-bold text-white'>Begin Your Search for Groom & Bride</h1>
        <form className='flex flex-wrap gap-5 md:gap-20 bg-white  p-10 border-4 border-white rounded-3xl '  >
          <div className='flex flex-col gap-2' >
            <h5>Looking For</h5>
            <select className='w-full h-full p-2 py-3 rounded-2xl border border-gray-600 ' id='select-gender' >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className='flex flex-col gap-2' >
            <h5>Age</h5>
            <div className='flex gap-2' >
              <input type='number' onChange={(e)=>{}} min={18} value={18} placeholder='Enter Age Range From' className='px-2 py-3 rounded-2xl border border-gray-600 w-20 md:w-30' />
              <span className='flex items-center justify-center mx-2 ' >to</span>
              <input type='number' onChange={(e)=>{}}  max={100} value={100} placeholder='Enter Age Range To' className='px-2 py-3 rounded-2xl border border-gray-600 w-20 md:w-30 ' />
            </div>
          </div>
          <Button variant="contained" color="warning" className='rounded-3xl bg-yellow-300 m-auto mb-0 px-10 py-3' >Search</Button>
        </form>
      </div>
    </div>
  )
}

export default LookingForComp;