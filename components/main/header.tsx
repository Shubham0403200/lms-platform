import React from 'react'
import NavItems from './navItems'
import MobileNav from './mobileNav'
import HeaderBtn from './headerBtn'
import { Logo } from './logo'

const Header = () => {

  return (
    <div className='w-full max-w-6xl mx-auto border-b flex justify-between items-center p-4 lg:px-0 md:py-5 ' >
      <Logo />
      <div className='flex items-center gap-2' >
        <div className='hidden md:flex max-w-xl w-full mr-4' >
          <NavItems />
        </div>
        <HeaderBtn />
        <MobileNav />
      </div>
    </div>
  )
}

export default Header