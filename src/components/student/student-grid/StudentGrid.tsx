import { Student } from '@/interfaces/student.interface';
import React from 'react'
import { StudentGridItem } from './StudentGridItem';

interface StudentGridProps {
    students: Student[];
}

export const StudentGrid = ({ students }: StudentGridProps) => {
    return (
        // <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 w-full">
        <div className="flex flex-wrap my-10">
            {/* grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-9 gap-5 */}
            {
                students.map(student => (
                    <StudentGridItem 
                        key={ student.slug }
                        student={ student }
                    />
                )) 
            }    
        </div>
    )
}
