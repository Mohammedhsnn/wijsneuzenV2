"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, X, ArrowRight, BookOpen } from "lucide-react"
import { cn } from "@/lib/utils"

interface QuizOption {
  id: string
  text: string
}

interface QuizQuestionData {
  id: number
  title: string
  image: string
  question: string
  hint: string
  options: QuizOption[]
  correctAnswer: string
  explanation: string
  historischWeetje: {
    title: string
    description: string
  }
}

interface QuizQuestionProps {
  question: QuizQuestionData
  onAnswer: (selectedAnswer: string, isCorrect: boolean) => void
  onNext: () => void
  hasAnswered: boolean
  isLastQuestion: boolean
}

export function QuizQuestion({
  question,
  onAnswer,
  onNext,
  hasAnswered,
  isLastQuestion,
}: QuizQuestionProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [isChecked, setIsChecked] = useState(false)

  const isCorrect = selectedAnswer === question.correctAnswer

  const handleCheck = () => {
    if (selectedAnswer) {
      setIsChecked(true)
      onAnswer(selectedAnswer, selectedAnswer === question.correctAnswer)
    }
  }

  const handleNext = () => {
    setSelectedAnswer(null)
    setIsChecked(false)
    onNext()
  }

  return (
    <div className="space-y-6">
      {/* Question Card */}
      <Card className="bg-cream border-4 border-primary/30 overflow-hidden">
        <div className="aspect-video relative">
          <img
            src={question.image || "/placeholder.svg"}
            alt={question.title}
            className="w-full h-full object-cover sepia-[0.4]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-sepia-dark/80 to-transparent" />
        </div>
        <CardContent className="p-6 text-center">
          <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-2 text-balance">
            {question.question}
          </h2>
          <p className="text-sm text-muted-foreground italic">
            {question.hint}
          </p>
        </CardContent>
      </Card>

      {/* Answer Options */}
      {!isChecked ? (
        <>
          <div className="space-y-3">
            {question.options.map((option) => (
              <button
                key={option.id}
                onClick={() => setSelectedAnswer(option.id)}
                className={cn(
                  "w-full p-4 rounded-lg border-2 text-left transition-all flex items-center gap-3",
                  selectedAnswer === option.id
                    ? "border-primary bg-primary/10"
                    : "border-border bg-card hover:border-primary/50"
                )}
              >
                <span
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold shrink-0",
                    selectedAnswer === option.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground"
                  )}
                >
                  {option.id}
                </span>
                <span className="text-foreground">{option.text}</span>
              </button>
            ))}
          </div>

          <Button
            onClick={handleCheck}
            disabled={!selectedAnswer}
            className="w-full"
            size="lg"
          >
            Controleer Antwoord
          </Button>
        </>
      ) : (
        /* Result */
        <div className="space-y-6">
          {/* Success/Error indicator */}
          <div className="text-center">
            <div
              className={cn(
                "w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center",
                isCorrect ? "bg-green-100" : "bg-red-100"
              )}
            >
              {isCorrect ? (
                <Check className="h-10 w-10 text-green-600" />
              ) : (
                <X className="h-10 w-10 text-red-600" />
              )}
            </div>

            <h3
              className={cn(
                "font-display text-2xl font-bold mb-2",
                isCorrect ? "text-green-600" : "text-red-600"
              )}
            >
              {isCorrect ? "Goed Gedaan!" : "Helaas!"}
            </h3>

            <p
              className={cn(
                "text-sm",
                isCorrect ? "text-green-600" : "text-red-600"
              )}
            >
              {isCorrect
                ? "Dat is het juiste antwoord."
                : `Het juiste antwoord was ${question.correctAnswer}.`}
            </p>
          </div>

          {/* Historic image */}
          <div className="rounded-lg overflow-hidden border-2 border-border">
            <img
              src={question.image || "/placeholder.svg"}
              alt={question.title}
              className="w-full aspect-video object-cover"
            />
          </div>

          {/* Historisch Weetje */}
          <Card className="bg-primary/5 border-2 border-primary/20">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <BookOpen className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">
                    Historisch Weetje
                  </p>
                  <h4 className="font-display font-semibold text-foreground mb-1">
                    {question.historischWeetje.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {question.historischWeetje.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Next button */}
          <Button onClick={handleNext} className="w-full" size="lg">
            {isLastQuestion ? (
              "Bekijk Resultaat"
            ) : (
              <>
                Volgende Vraag
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>

          <Button
            variant="outline"
            className="w-full border-primary text-primary bg-transparent"
            onClick={() => {}}
          >
            Bekijk Tussenstand
          </Button>
        </div>
      )}
    </div>
  )
}
