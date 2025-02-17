import React from 'react'
import { assets } from '../../assets/assets'
import SearchBar from './SearchBar'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-blue-300 via-blue-100 to-white'>
      <h1 className='md:text-home-heading-large text-home-heading-small relative font-bold text-gray-800 max-w-4xl'>Unlock your potential with courses designed to <span 
        className='text-blue-600'> match your ambitions.</span>
        <img className='md:block hidden absolute -bottom-7 right-20' src={assets.sketch}/>
      </h1>

      <p className='md:block hidden text-gray-700 max-w-2xl mx-auto'>We unite top instructors, immersive content, and a thriving community to help you reach your personal and professional goals.
      </p>

      <p className='md:hidden text-gray-700 max-w-sm mx-auto'>We unite top instructors, immersive content, and a thriving community to help you reach your personal and professional goals.
      </p>

      <SearchBar/>
    </div>

  )
}

export default Hero