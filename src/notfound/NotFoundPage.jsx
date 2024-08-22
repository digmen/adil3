import React from 'react'
import logo from '../components/images/logo.svg'

import warningImg from './images/warning.png'


export default function NotFoundPage() {
    return (
        <div className='flex flex-col items-center mt-[125px]'>
            <div className='mt-[20px]'>
                <img src={warningImg} />
            </div>
            <div className='flex flex-col items-center gap-10 mt-[20px]'>
                <img className='w-[160px] h-[190px]' src={logo} alt='logo' />
                <span className='font-black text-[32px]'>We apologize for the inconvenience, technical work is currently underway, please wait</span>
            </div>
        </div>
    )
}
