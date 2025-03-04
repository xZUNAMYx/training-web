'use client';

import { titleFont } from '@/config/font'
import Link from 'next/link'
import React from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import { useUIStore } from '../ui-store/ui-store'
import Image from 'next/image';

export const TopMenu = () => {
    const openSideMenu = useUIStore(state => state.openSideMenu)

    return (
        // <nav className='flex px-5 justify-between items-center w-full'>
        <nav className='flex flex-col md:flex-row justify-between items-center md:space-y-0 bg-primary text-white'>
            <div className='flex flex-row items-center'>
                <Link
                    href='/'
                    className="flex items-center"
                    // as={'image'}
                >
                    <Image
                        src="https://res.cloudinary.com/dbvkyec1s/image/upload/v1738605633/training/logo_training_sin_fondo.png"
                        alt="Training Corp"
                        width={ 100 }
                        height={ 50 }
                        // layout='fixed'
                        className='object-contain'
                        style={{ width: 'auto', height: 'auto' }}
                        // priority
                    />
                    <span className={ `${ titleFont.className } antialiased font-bold text-2xl` }>Training Corp</span>
                </Link>
            </div>

            <div className='hidden sm:block font-bold text-lg space-x-5'>
                <Link href='/level/a1' className='text-2xl m-1 p-1 rounded-md transition-all hover:bg-gray-100'>
                    A1
                </Link>
                <Link href='/level/a2' className='text-2xl m-1 p-1 rounded-md transition-all hover:bg-gray-100'>
                    A2
                </Link>
                <Link href='/level/b1' className='text-2xl m-1 p-1 rounded-md transition-all hover:bg-gray-100'>
                    B1
                </Link>
                <Link href='/level/b2' className='text-2xl m-1 p-1 rounded-md transition-all hover:bg-gray-100'>
                    B2
                </Link>
            </div>

            <div className='flex items-center font-bold text-2xl'>
                <Link href='/search' className='mx-2'>
                    <IoSearchOutline className='w-7 h-8' />
                </Link>

                <button 
                    onClick={ openSideMenu }
                    className='m-1 p-2 rounded-md transition-all hover:bg-primary-dark'
                >
                    Menú
                </button>
            </div>
        </nav>
    )
}
