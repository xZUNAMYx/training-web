// import { notFound } from "next/navigation";

import { StudentGrid } from "@/components/student/student-grid/StudentGrid";
import { Title } from "@/components/ui/title/Title";
import { Level } from "@/interfaces/student.interface";
import { initialData } from "@/seed/seed";

const seedStudents = initialData.students;

interface LevelPageProps {
  params: {
    id: Level;
  };
}

export default function CategoryPage({ params }: LevelPageProps) {
  const { id } = params;
  const students = seedStudents.filter( student => student.level === id);

  return (
    <>
          <Title 
            title={ `Nivel de ${ id }` }
            subtitle='Unidades de inglés'
            className="mb-2"
          />
    
          <StudentGrid 
            students={ students }
          />
        </>
  );
}