"use client"

import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card/card"
import { initialData } from "@/seed/seed"
import { useEffect, useState } from "react"
import ExerciseComponent from "@/components/ui/exercise/ExerciseComponent"
// import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog/Dialog"

export default function UnitPage({ params }: { params: Promise<{ levelId: string; unitId: string }> }) {
  const [resolvedParams, setResolvedParams] = useState<{ levelId: string; unitId: string } | null>(null);

  const [showExercise, setShowExercise] = useState(false);

  // const [isDialogOpen, setIsDialogOpen] = useState(false)

  useEffect(() => {
    params.then((params) => setResolvedParams(params));
  }, [params]);

  if (!resolvedParams) {
    return <div>Loading...</div>;
  }

  const { levelId, unitId } = resolvedParams;
  const level = initialData.levels.find((l) => l.name === levelId);
  if (!level) {
    notFound();
  }

  const unit = level.units.find((u) => u.name === decodeURIComponent(unitId));
  if (!unit) {
    notFound();
  }

  return (
  <div className="container mx-auto px-2 py-6">
    <h1 className="text-3xl font-bold mb-6 text-center">
      {level.name.toUpperCase()} - {unit.name}
    </h1>
    {unit.themes.map((theme) => {
      // const videourl = theme.videourl;
      return (
        <Card key={theme.name} className="mb-6">
          <CardHeader>
            <CardTitle className="text-3xl">{theme.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="text-2xl font-semibold mb-2">Description</h3>
            <p className="mb-4">{theme.description}</p>
            <h3 className="text-2xl font-semibold mb-2">Vocabulary</h3>
            <ul className="list-disc pl-5 mb-4">
              {theme.vocabulary.map((subtheme, index) => (
                <li className="text-xl" key={index}>{subtheme}</li>
              ))}
            </ul>

            <h3 className="text-2xl font-semibold mb-2">Video</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {theme.videos.map((video, index) => (
                <div key={index} className="aspect-w-16 aspect-h-9">
                  <iframe
                    width="100%"
                    height="315"
                    src={video.url}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      );
    })}
   
    {showExercise && <ExerciseComponent levelId={levelId} unitId={unitId} />}

    <div className="flex justify-between items-center mt-8">
      <Button className="bg-primary text-white" >
        <Link href={`/level/${levelId}`}>Back to Units</Link>
      </Button>
      <ExerciseComponent levelId={levelId} unitId={unitId} />
    </div>
  </div>
  )
}

