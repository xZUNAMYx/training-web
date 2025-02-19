
// import { LevelSelector } from "@/components/student/level-selector/LevelSelector";
import { titleFont } from "@/config/font";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";
import Image from 'next/image';

interface StudentProps {
  params:{
    slug: string;
  }
}

export default function StudentPage({ params }: StudentProps) {
  const { slug } = params;
  const student = initialData.students.find( student => student.slug === slug );

  if ( !student ) {
    notFound();
    return null;
  }

  return (
    <div className="grid grid-cols-1  rounded-md pt-5">
      {/* Foto */}
      <div className="col-span-1 bg-red flex">

        {/* Detalles */}
        <Image 
          src={ `${student.images}` } 
          alt="Student Image"
          width={ 150 } 
          height={ 150 } 
          // fill
          // sizes="(max-wslugth: 768px) 100vw, (max-wslugth: 1200px) 50vw, 33vw"
          className="relative w-[150px] h-[150px] object-fill rounded-md"
          // className="relative } object-fill rounded-md"
          // style={{ wslugth: 'auto', height: 'auto' }}
          priority
        />

        <h1 className={` ${ titleFont.className } antialiased font-bold text-xl mx-5 `}>
          Nivel: { student.level }
          <br />
          Nombre: { student.name }
          <br />
          Celular: { student.phone }
        </h1>
      </div>

       {/* Botones */}
       <div className="flex space-x-5 mt-5">

        <button className="btn-primary ">
            Registrar asistencias
          </button>

          <button className="btn-primary">
            Ver calificaciones
          </button>
       </div>

    </div>
  );
}