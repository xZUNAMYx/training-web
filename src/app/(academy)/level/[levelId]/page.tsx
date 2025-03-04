"use client"

import Link from "next/link"
import { notFound } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card/card"
import { Button } from "@/components/ui/button/button"
import { initialData } from "@/seed/seed"
// import { use } from 'react'

export default function LevelPage({ params }: { params: { levelId: string } }) {
  // const resolvedParams = use(params);
  const { levelId } = params;
  const level = initialData.levels.find((l) => l.name === levelId);

  if (!level) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">{level.name.toUpperCase()} Level</h1>
      <div className="grid grid-cols-1 gap-6">
        {level.units.map((unit) => (
          <Card key={unit.name} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-3xl">{unit.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold mb-2">Topics:</h3>
              <ul className="list-disc pl-5 space-y-1">
                {unit.themes.map((theme, index) => (
                  <li key={index}>{theme.name}</li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Link href={`/level/${level.name}/unit/${encodeURIComponent(unit.name)}`} className="w-full">
                <Button className="w-full text-white">Start Unit</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="mt-8 flex justify-between">
        <Button className="text-white">
          <Link href="/">Back to Levels</Link>
        </Button>
      </div>
    </div>
  );
}

