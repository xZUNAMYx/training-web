"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card/card"
import { Button } from "@/components/ui/button/button"
import { initialData } from "@/seed/seed"
import { useAuth } from "@/contexts/AuthContext"
import { useRouter } from "next/navigation"

import { TopMenu } from "@/components/ui/top-menu/TopMenu";

export default function Home() {
  const { user } = useAuth()
  const router = useRouter()

  // Si no hay usuario logueado, mostrar pantalla de bienvenida
  if (!user) {
    return (
        <> 
        <TopMenu />
      <div className="container mx-auto px-3 py-3">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Welcome to English Course</h1>
          <p className="text-xl mb-8">
            Learn English with our interactive course designed for all levels. Practice with videos, exercises, and
            track your progress.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/login">Login to Start Learning</Link>
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Interactive Lessons</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Learn with videos, vocabulary lists, and interactive exercises designed to improve your English
                  skills.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Progress Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Track your progress through different levels and earn badges as you complete units and exercises.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>All Levels</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  From beginner (A1) to upper-intermediate (B2), we have content for every stage of your English
                  learning journey.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      </>
    )
  }

  // Si hay usuario logueado, mostrar los niveles y unidades
  return (
    <>
    <TopMenu />
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">English Course Levels</h1>
      </div>
      {initialData.levels.map((level) => (
        <div key={level.name} className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{level.name.toUpperCase()} Level</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {level.units.map((unit) => (
              <Card key={unit.name} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{unit.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">Themes:</p>
                  <ul className="list-disc pl-5">
                    {unit.themes.map((theme, index) => (
                      <li key={index}>{theme.name}</li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href={`/level/${level.name}/unit/${encodeURIComponent(unit.name)}`} className="w-full">
                    <Button className="w-full">Start Unit</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
    </>
  )
}

