"use client"
import { Icon } from '@iconify/react';
const CountView = () => {
  return (
    <div className='bg-amber-200'>
        <div className="flex  flex-1 h-100 w-100 p-10 justify-between ">
            <div className="flex  items-center ">
                <div className="flex bg-amber-300 h-20 w-20 rounded-full items-center justify-center">
                    <Icon icon="fluent:person-32-light" width="50" height="50" />
                </div>
                <div className="p-1">
                    <p className="text-3xl font-bold">18000+</p>
                    <p>Active Profiles</p>
                </div>
            </div>
            <div className="flex  items-center ">
                <div className="flex bg-amber-300 h-20 w-20 rounded-full items-center justify-center">
                    <Icon icon="fluent:person-32-light" width="50" height="50" />
                </div>
                <div className="p-2">
                    <p className="text-3xl font-bold">18000+</p>
                    <p>Active Profiles</p>
                </div>
            </div>
            <div className="flex  items-center ">
                <div className="flex bg-amber-300 h-20 w-20 rounded-full items-center justify-center">
                    <Icon icon="fluent:person-32-light" width="50" height="50" />
                </div>
                <div className="p-2">
                    <p className="text-3xl font-bold">18000+</p>
                    <p>Active Profiles</p>
                </div>
            </div>
            <div className="flex  items-center ">
                <div className="flex bg-amber-300 h-20 w-20 rounded-full items-center justify-center">
                    <Icon icon="fluent:person-32-light" width="50" height="50" />
                </div>
                <div className="p-2">
                    <p className="text-3xl font-bold">18000+</p>
                    <p>Active Profiles</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CountView;
