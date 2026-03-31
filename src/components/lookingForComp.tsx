import Button from '@mui/material/Button';
import * as React from 'react';

const LookingForComp = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center my-20 '  >
      <div className='flex flex-col   bg-orange-600 gap-10 p-4 border-2 border-orange-600 rounded-3xl' >
        <h1 className='text-2xl font-bold text-white'>Begin Your Search for Groom & Bride</h1>
        <form className='flex gap-20 bg-white p-16 border-4 border-white rounded-3xl '  >
          <div className='flex flex-col gap-2' >
            <h5>Looking For</h5>
            <select className='w-full h-full p-2 py-2 rounded-2xl border border-gray-600 ' >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className='flex flex-col gap-2' >
            <h5>Age</h5>
            <div className='flex gap-2' >
              <input type='number' min={18} placeholder='Enter Age Range From' className='w-full h-full p-2 rounded-2xl border border-gray-600 ' />
              <span className='flex items-center justify-center mx-2 ' >to</span>
              <input type='number' max={100} placeholder='Enter Age Range To' className='w-full h-full p-2 rounded-2xl border border-gray-600 ' />
            </div>
          </div>
          <Button variant="contained" color="warning" className='rounded-2xl bg-yellow-300 m-auto mb-0' >Search</Button>
        </form>
      </div>
    <div  className='flex min-h-20 w-full bg-amber-800' >
        <div>
            {/* <div className='bg-amber-600 h-100 w-full'>

            </div> */}
        </div>
    </div>
  )
}

export default LookingForComp;