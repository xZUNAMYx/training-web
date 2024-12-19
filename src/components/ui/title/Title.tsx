import { titleFont } from '@/config/font'
import React from 'react'

interface titleProps {
    title: string,
    subtitle?: string,
    className?: string,
}

export const Title = ({ title, subtitle, className }: titleProps) => {
  return (
    <div className={ `mt-3 ${ className }` }>
        <h1 className={ `${ titleFont.className } antialiased text-4xl font-semibold my-10` }>
            { title }
        </h1>

        {
            subtitle && (
                <h3 className='text-xl mb-5'>{ subtitle }</h3>
            )
        }
    </div>
  )
}
