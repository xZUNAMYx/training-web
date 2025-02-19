import { StudentGrid } from "@/components/student/student-grid/StudentGrid";
import { Title } from "@/components/ui/title/Title";
import { initialData } from "@/seed/seed";

const students = initialData.students;

export default function AcademyPage() {

  return (
    <>
      <Title 
        title="English Course Levels"
        subtitle='Unidades de inglés'
        className="mb-10"
      />

      <StudentGrid 
        students={ students }
      />
    </>
  );
}

// import Link from "next/link"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card/card"

// const levels = [
//   { id: "a1", name: "A1 - Beginner" },
//   { id: "a2", name: "A2 - Elementary" },
//   { id: "b1", name: "B1 - Intermediate" },
//   { id: "b2", name: "B2 - Upper Intermediate" },
//   { id: "kids1", name: "Kids 1" },
//   { id: "kids2", name: "Kids 2" },
//   { id: "junior", name: "Junior" },
// ]

// export default function Home() {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-6 text-center">English Course Levels</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {levels.map((level) => (
//           <Link href={`/level/${level.id}`} key={level.id}>
//             <Card className="hover:shadow-lg transition-shadow border-primary">
//               <CardHeader>
//                 <CardTitle className="text-center text-primary">{level.name}</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p>Explore units for {level.name}</p>
//               </CardContent>
//             </Card>
//           </Link>
//         ))}
//       </div>
//     </div>
//   )
// }


