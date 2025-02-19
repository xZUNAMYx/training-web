'use client';

import { Student } from '@/interfaces/student.interface';
import Image from 'next/image';
import Link from 'next/link';
// import React, { useState } from 'react'

interface StudentGridItemProps {
    student: Student;
}

export const StudentGridItem = ({ student }: StudentGridItemProps) => {

    // const [displayImage, setDisplayImage] = useState( student.images[0] );

    return(
        <div className='rounded-md overflow-hidden fade-in -my-8'>
            <Link href={ `/student/${ student.slug }` }>
                <div className='relative w-[150px] h-[150px]'>
                    <Image 
                        src={ `${student.images}`}  
                        alt={  student.name || 'Student Image' }
                        // className='w-full object-cover rounded-md'
                        // width={ 150 }
                        // height={ 150 }
                        fill // Utiliza layout='fill' para que la imagen ocupe todo el contenedor
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 150px"
                        style={{ objectFit: 'cover' }} // Asegúrate de que la imagen se ajuste al contenedor
                        className='rounded-md'
                        // priority
                    />
                </div>
            </Link>

            {/* <div className='flex flex-col ml-4'> */}
            <div className='flex flex-col relative w-[150px] h-[150px] m-1'>
                <Link 
                    className='hover:text-green-600'
                    href={ `/student/${ student.slug }` }
                >

                    { student.name }

                </Link>
                <span className='font-bold'>
                    Nivel: { student.level }
                </span>
            </div>
        </div>
    )
}
