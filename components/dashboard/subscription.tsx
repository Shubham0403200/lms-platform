import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const Subscription = () => {
  return (
    <div className=' bg-slate-200 shadow-lg flex flex-col w-full rounded-md gap-1 px-2 py-3'>
        <h5 className='text-h5-clamp font-semibold text-slate-900 ' > My Subscription </h5>
        <h5 className=' text-xs text-slate-700 font-medium  mb-2'>Check Out Your Subscriptions for further details</h5>
        <Link className='w-full' href={'/dashboard/subscription'} >
          <Button size='sm' className='text-xs w-full'  > More Details </Button>
        </Link>
    </div>
)
}

export default Subscription