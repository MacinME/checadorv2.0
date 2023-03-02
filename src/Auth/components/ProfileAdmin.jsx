import React from 'react';
import { HiArrowDown } from 'react-icons/hi';
import profileImg from '../assets/profile.png';

export const ProfileAdmin = () => {
  return (
    <div className='user-profile flex items-center gap-2 justify-center border-yellow-700 cursor-pointer'>
        <img 
            src={ profileImg } 
            alt="Profile Photo" 
            className='w-12 h-12 rounded-full'
        />
        <p className='text-gray-500 text-1xl'>Lucas Stuff</p>
        <HiArrowDown />

    </div>
  )
}
