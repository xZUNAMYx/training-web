import { Student } from "@/interfaces/student.interface";
// import clsx from "clsx";

// interface Props {
//     selectedLevel: Level;
//     avaliableLevels: Level;
// }

interface StudentGridItemProps {
    student: Student;
}

// export const LevelSelector = ({ selectedLevel, avaliableLevels}: Props) => {
export const LevelSelector = ({ student }: StudentGridItemProps) => {
    return (
        <div className="my-1">
            <div className="flex items-center">
                Nivel:
                <button className="mx-2 hover:underline text-lg">
                    {student.level}
                </button>
            </div>
        </div>
        // <div className="my-5">

        //     <div className="flex">
                
        //         {<>
        //             <h3 className="font-bold mb-4">Nivel: </h3>
        //             <button className="mx-2 hover:underline text-lg">
        //                 {student.level}
        //             </button>
        //         </>
        //             // avaliableLevels.map( level => (
        //             //     <button
        //             //         key={level}
        //             //         className={ 
        //             //             clsx(
        //             //                 "mx-2 hover:underline text-lg",
        //             //                 {
        //             //                     'underline': level === selectedLevel,
        //             //                 }
        //             //             )
        //             //         }
        //             //     >
        //             //         {level}
        //             //     </button>
        //             // ))
        //         }

        //     </div>
        // </div>
    )
};