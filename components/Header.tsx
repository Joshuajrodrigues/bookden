
import React from 'react'

const Header = () => {
  return (
    <header className="flex items-center justify-between mb-7 cursor-pointer font-extrabold ">
        <h1 className='text-3xl'>
            Bookden
        </h1>
        <img src={'/favicon'} width={32} height={32} alt='icon' />
    </header>
  )
}

export default Header