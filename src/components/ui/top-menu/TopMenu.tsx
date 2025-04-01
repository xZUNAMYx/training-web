'use client';

import { titleFont } from '@/config/font'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import { AuthStatus } from '@/components/auth/AuthStatus';
import { useAuth } from '@/contexts/AuthContext';

export const TopMenu = () => {
    const {user, logout } = useAuth()

    return (
        // <nav className='flex px-5 justify-between items-center w-full'>
        <nav className='px-3 flex flex-col md:flex-row justify-between items-center md:space-y-0 bg-primary text-white relative'>
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

        {user && (
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
            )}

            <div className="flex items-center space-x-4 mb-2">
                <AuthStatus />
            </div>
        </nav>
    )
}
