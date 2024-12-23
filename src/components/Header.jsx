import React from 'react'

const Header = () => {
  return (
    <div className='flex'>
      <div className='py-2 px-4 m-4 text-white'>
        <span className='text-4xl font-semibold'>PixelBloom </span>
        <span className='text-sm'>by devesh</span>
    </div>
    <ul className='text-white flex justify-evenly w-[55%] items-center font-sans text-lg right-0 absolute top-7'>
      <li className='cursor-pointer'>Photos</li>
      <li className='cursor-pointer'>Reviews</li>
      <li className='cursor-pointer'>QnA</li>
      <li className='cursor-pointer'>Contact</li>
    </ul>
    </div>
    
  )
}

export default Header