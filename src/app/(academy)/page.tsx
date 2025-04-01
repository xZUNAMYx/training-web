
import { Button } from "@/components/ui/button/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card/card";
import { initialData } from "@/seed/seed";
import Link from "next/link";

// const students = initialData.students;

export default function AcademyPage() {
  const levels = initialData.levels;

  return (
    <>
      {/* <StudentGrid 
        students={ students }
      /> */}

<div className="container mx-auto px-1 py-1">
      <h1 className="text-3xl font-bold mb-6 text-center items-center justify-center">English Course Levelsss</h1>
      <div className="flex flex-col items-center">
      {Object.entries(levels).map(([levelId, level]) => (
        <div key={levelId} className="mb-8 w-full max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4 text-center">{level.name.toUpperCase()}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center">
            {level.units.map((unit) => (
              <Card key={unit.name} className="hover:shadow-lg transition-shadow justify-center min-h-[300px] flex flex-col">
                <CardHeader>
                  <CardTitle className="text-3xl">
                    { `${level.name.toUpperCase()}: ${unit.name}` }
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="mb-2 text-2xl font-semibold">Topics:</p>
                  <ul className="list-disc pl-5 text-xl">
                    {unit.themes.map((theme) => (
                      <li key={theme.name}>
                      <h4>{theme.name}</h4>                    
                    </li>
                    ))}
                    {/* {unit.themes.length > 4 && <li>...and {unit.themes.length - 4} more</li>} */}
                  </ul>
                </CardContent>
                <CardFooter className="mt-auto w-full">
                    <Link href={`/level/${level.name}/unit/${encodeURIComponent(unit.name)}`} className="w-full">
                      <Button className="w-full text-white">Start Unit</Button>
                    </Link>
                  </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      ))}
      </div>
    </div>
    </>
  );
}

