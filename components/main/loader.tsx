import { Loader2 } from 'lucide-react'
import React from 'react'

export const Loader = () => {
  return (
    <div className="flex items-center gap-x-2">
        <Loader2 className='w-6 h-6 animate-spin' />
        <span className="text-h6-clamp"> Loading... </span>
    </div>
  )
}