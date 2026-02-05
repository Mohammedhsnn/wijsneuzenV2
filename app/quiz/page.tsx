"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { QuizQuestion } from "@/components/quiz/quiz-question"
import { QuizResult } from "@/components/quiz/quiz-result"
import { getAllBorden } from "@/lib/borden-data"

interface QuizAnswer {
  questionIndex: number
  selectedAnswer: string
  isCorrect: boolean
}

export default function QuizPage() {
  const borden = getAllBorden()
  const questions = borden.map((bord) => ({
    id: bord.id,
    title: bord.title,
    image: bord.heroImage,
    question: bord.quiz.question,
    hint: bord.quiz.hint,
    options: bord.quiz.options,
    correctAnswer: bord.quiz.correctAnswer,
    explanation: bord.quiz.explanation,
    historischWeetje: bord.historischWeetje,
  }))

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<QuizAnswer[]>([])
  const [showResult, setShowResult] = useState(false)

  const currentQuestion = questions[currentQuestionIndex]
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100
  const correctAnswers = answers.filter((a) => a.isCorrect).length

  const handleAnswer = (selectedAnswer: string, isCorrect: boolean) => {
    const newAnswer: QuizAnswer = {
      questionIndex: currentQuestionIndex,
      selectedAnswer,
      isCorrect,
    }
    setAnswers([...answers, newAnswer])
  }

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      setShowResult(true)
    }
  }

  const handleRestart = () => {
    setCurrentQuestionIndex(0)
    setAnswers([])
    setShowResult(false)
  }

  if (showResult) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 bg-background">
          <QuizResult
            totalQuestions={questions.length}
            correctAnswers={correctAnswers}
            onRestart={handleRestart}
          />
        </main>
        <Footer />
      </div>
    )
  }

  const currentAnswer = answers.find((a) => a.questionIndex === currentQuestionIndex)

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 bg-background">
        {/* Header */}
        <div className="bg-sepia-dark text-cream py-4">
          <div className="container mx-auto px-4">
            <h1 className="font-display text-xl font-semibold text-center">
              Historische Quiz: Philippine
            </h1>
          </div>
        </div>

        {/* Progress */}
        <div className="bg-secondary/50 border-b border-border py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-foreground">
                Vraag {currentQuestionIndex + 1} van {questions.length}
              </span>
              <span className="text-sm text-primary font-semibold">
                {Math.round(progress)}% Voltooid
              </span>
            </div>
            <div className="w-full h-2 bg-border rounded-full overflow-hidden">
              <div
                className="h-full bg-primary transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Question */}
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            <QuizQuestion
              question={currentQuestion}
              onAnswer={handleAnswer}
              onNext={handleNext}
              hasAnswered={!!currentAnswer}
              isLastQuestion={currentQuestionIndex === questions.length - 1}
            />
          </div>
        </div>

        {/* Bottom navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border py-4 md:hidden">
          <div className="container mx-auto px-4">
            <div className="flex justify-center gap-8">
              <a href="/route" className="flex flex-col items-center text-muted-foreground hover:text-primary">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <span className="text-xs mt-1">Tour</span>
              </a>
              <div className="flex flex-col items-center text-primary">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-xs mt-1 font-semibold">Quiz</span>
              </div>
              <a href="#" className="flex flex-col items-center text-muted-foreground hover:text-primary">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <span className="text-xs mt-1">Kaart</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      <div className="hidden md:block">
        <Footer />
      </div>
    </div>
  )
}
