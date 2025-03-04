"use client"

import type React from "react"
import { createContext, useContext, useState, useCallback } from "react"

type ExerciseAttemptsContextType = {
  resetAllAttempts: () => void
  forceUpdate: () => void
}

const ExerciseAttemptsContext = createContext<ExerciseAttemptsContextType | undefined>(undefined)

export const useExerciseAttempts = () => {
  const context = useContext(ExerciseAttemptsContext)
  if (!context) {
    throw new Error("useExerciseAttempts must be used within an ExerciseAttemptsProvider")
  }
  return context
}

export const ExerciseAttemptsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [updateFlag, setUpdateFlag] = useState(false)

  const resetAllAttempts = useCallback(() => {
    setUpdateFlag((prev) => !prev)
  }, [])

  const forceUpdate = useCallback(() => {
    setUpdateFlag((prev) => !prev)
  }, [])

  return (
    <ExerciseAttemptsContext.Provider
      value={{
        resetAllAttempts,
        forceUpdate,
      }}
    >
      {children}
    </ExerciseAttemptsContext.Provider>
  )
}

