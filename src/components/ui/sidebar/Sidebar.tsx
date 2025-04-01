// 'use client'

// import Link from 'next/link'
// import React from 'react'
// import { IoCheckboxOutline, IoCloseOutline, IoContractOutline, IoLogInOutline, IoLogOutOutline, IoLogoWebComponent, IoPersonOutline, IoSearchOutline } from 'react-icons/io5'
// import { useUIStore } from '../ui-store/ui-store'
// import clsx from 'clsx'

// export const Sidebar = () => {
//     const isSideMenuOpen = useUIStore(state => state.isSideMenuOpen);
//     const closeSideMenu = useUIStore(state => state.closeSideMenu);

//     return (
//         <div>
//             {/* Background black */}
//             {
//                 isSideMenuOpen && (
//                     <div className='fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30'>

//                     </div>
//                 )
//             }

//             {/* Blur */}
//             {
//                 isSideMenuOpen && (
//                     <div 
//                         onClick={ closeSideMenu }
//                         className='fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm'
//                     >

//                     </div>
//                 )
//             }

//             {/* Sidemenu */}
//             <nav className={
//                 clsx(
//                     'fixed p-5 right-0 top-0 w-[300px] h-screen bg-white z-10 shadow-2xl transform transition-all duration-300',
//                     {
//                         'translate-x-full': !isSideMenuOpen
//                     }
//                 )
//             }>
//                 <IoCloseOutline
//                     size={50}
//                     className='absolute top-1 right-1 cursor-pointer hover:text-red-500'
//                     onClick={() => closeSideMenu() }
//                 />

//                 {/* Input */}
//                 <div className='relative mt-10'>
//                     <IoSearchOutline size={20} className='absolute top-1 left-1' />

//                     <input
//                         type='text'
//                         placeholder='Buscar'
//                         className='w-full bg-gray-50 rounded pl-10 pr-10 border-b-2 text-xl border-green-300 foucs:outline-none focus:border-blue-500'
//                     />
//                 </div>

//                 {/* Menú */}
//                 <Link
//                     href='/'
//                     className='flex items-center mt-1 p-2 hover:bg-green-200 rounded transition-all'
//                 >
//                     <IoPersonOutline size={20} />
//                     <span className='ml-3 text-xl'>Perfil</span>
//                 </Link>

//                 <Link
//                     href='/'
//                     className='flex items-center mt-1 p-2 hover:bg-green-200 rounded transition-all'
//                 >
//                     <IoLogoWebComponent size={20} />
//                     <span className='ml-3 text-xl'>inicio</span>
//                 </Link>

//                 <Link
//                     href='/'
//                     className='flex items-center mt-1 p-2 hover:bg-green-200 rounded transition-all'
//                 >
//                     <IoLogInOutline size={20} />
//                     <span className='ml-3 text-xl'>Ingresar</span>
//                 </Link>

//                 <Link
//                     href='/'
//                     className='flex items-center mt-1 p-2 hover:bg-green-200 rounded transition-all'
//                 >
//                     <IoLogOutOutline size={20} />
//                     <span className='ml-3 text-xl'>Salir</span>
//                 </Link>

//                 {/* Line Separator */}
//                 <div className='w-full h-px bg-gray-200 my-10'>
//                     <Link
//                         href='/'
//                         className='flex items-center mt-1 p-2 hover:bg-green-200 rounded transition-all'
//                     >
//                         <IoPersonOutline size={20} />
//                         <span className='ml-3 text-xl'>Estudiantes</span>
//                     </Link>

//                     <Link
//                         href='/'
//                         className='flex items-center mt-1 p-2 hover:bg-green-200 rounded transition-all'
//                     >
//                         <IoCheckboxOutline size={20} />
//                         <span className='ml-3 text-xl'>Seguimientos</span>
//                     </Link>

//                     <Link
//                         href='/'
//                         className='flex items-center mt-1 p-2 hover:bg-green-200 rounded transition-all'
//                     >
//                         <IoContractOutline size={20} />
//                         <span className='ml-3 text-xl'>Cartera</span>
//                     </Link>
//                 </div>
//             </nav>
//         </div>
//     )
// }
