"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button/button"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/exercise/RadioGroud"
import { Input } from "@/components/ui/input/input"
import { initialData } from "@/seed/seed";
import { Label } from "./Label"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "../dialog/Dialog"

interface ExerciseComponentProps {
  levelId: string
  unitId: string
}

export default function ExerciseComponent({ levelId, unitId }: ExerciseComponentProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<string[]>(Array(10).fill(""))
  const [showResults, setShowResults] = useState(false)
  const [questions, setQuestions] = useState<any[]>([])
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [showFeedback, setShowFeedback] = useState(false)
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false)

  useEffect(() => {
    const allQuestions = initialData.exercises[0].questions
    const shuffled = allQuestions.sort(() => 0.5 - Math.random())
    setQuestions(shuffled.slice(0, 10))
  }, [])

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers]
    newAnswers[currentQuestion] = answer
    setAnswers(newAnswers)
  }

  const checkAnswer = () => {
    const currentAnswer = answers[currentQuestion]
    const correctAnswer = questions[currentQuestion].correct_answer
    const isCorrect = currentAnswer.toLowerCase() === correctAnswer.toLowerCase()
    setIsAnswerCorrect(isCorrect)
    setShowFeedback(true)
  }

  const handleNext = () => {
    if (showFeedback) {
      setShowFeedback(false)
      if (currentQuestion < 9) {
        setCurrentQuestion(currentQuestion + 1)
      } else {
        setShowResults(true)
      }
    } else {
      checkAnswer()
    }
  }

  const calculateScore = () => {
    let score = 0
    questions.forEach((question, index) => {
      if (question.correct_answer.toLowerCase() === answers[index].toLowerCase()) {
        score++
      }
    })
    return score
  }

  const handleTryAgain = () => {
    const allQuestions = initialData.exercises[0].questions
    const shuffled = allQuestions.sort(() => 0.5 - Math.random())
    setQuestions(shuffled.slice(0, 10))
    setCurrentQuestion(0)
    setAnswers(Array(10).fill(""))
    setShowResults(false)
    setShowFeedback(false)
  }

  const startExercise = () => {
    setIsDialogOpen(true)
  }

  const closeExercise = () => {
    setIsDialogOpen(false)
    setCurrentQuestion(0)
    setAnswers(Array(10).fill(""))
    setShowResults(false)
    setShowFeedback(false)
  }

  if (questions.length === 0) {
    return <p>Loading questions...</p>
  }

  const question = questions[currentQuestion]

  return (
    <>
      <Button className="text-white" onClick={startExercise}>Start Exercise</Button>
      <Dialog open={isDialogOpen} onOpenChange={(open) => open && setIsDialogOpen(true)}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-2xl">{showResults ? "Exercise Results" : `Question ${currentQuestion + 1} of 10`}</DialogTitle>
          </DialogHeader>
          {showResults ? (
            <div>
              <p className="mb-4">You scored {calculateScore()} out of 10 questions correctly.</p>
              <DialogFooter>
                <Button className="text-white" onClick={handleTryAgain}>Try Again</Button>
                <Button className="text-white" onClick={closeExercise}>Close</Button>
              </DialogFooter>
            </div>
          ) : (
            <div>
              {question.image_url && (
                <div className="mb-4">
                  <Image
                    src={question.image_url || "/placeholder.svg"}
                    alt="Question context"
                    width={300}
                    height={200}
                    className="mx-auto"
                  />
                </div>
              )}
              <p className="mb-4">{question.question_text}</p>

              {showFeedback ? (
                <div className={`p-4 mb-4 rounded-md ${isAnswerCorrect ? "bg-green-400" : "bg-red-200"}`}>
                  <p className="font-semibold mb-2">{isAnswerCorrect ? "✓ Correct!" : "✗ Incorrect"}</p>
                  <p>{question.feedback}</p>
                </div>
              ) : (
                <>
                  {question.question_type === "multiple_choice" ? (
                    <RadioGroup onValueChange={handleAnswer} value={answers[currentQuestion]}>
                      {question.options.map((option: any, index: number) => (
                        <div className="flex items-center space-x-2" key={index}>
                          <RadioGroupItem value={option.option_text} id={`option-${index}`} />
                          <Label htmlFor={`option-${index}`} className="text-xl">{option.option_text}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  ) : (
                    <Input
                      type="text"
                      placeholder="Your answer"
                      className="text-xl border-primary"
                      value={answers[currentQuestion]}
                      onChange={(e) => handleAnswer(e.target.value)}
                    />
                  )}
                </>
              )}

              <DialogFooter>
                <Button
                  onClick={handleNext}
                  className="mt-4 text-white"
                  disabled={!showFeedback && answers[currentQuestion] === ""}
                >
                  {showFeedback ? (currentQuestion < 9 ? "Next Question" : "See Results") : "Check Answer"}
                </Button>
              </DialogFooter>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}

