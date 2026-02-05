"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Check, X, HelpCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface QuizOption {
  id: string
  text: string
}

interface BordQuizProps {
  question: string
  hint: string
  options: QuizOption[]
  correctAnswer: string
  explanation: string
}

export function BordQuiz({
  question,
  hint,
  options,
  correctAnswer,
  explanation,
}: BordQuizProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [isChecked, setIsChecked] = useState(false)
  const [showHint, setShowHint] = useState(false)

  const isCorrect = selectedAnswer === correctAnswer

  const handleCheck = () => {
    if (selectedAnswer) {
      setIsChecked(true)
    }
  }

  const handleReset = () => {
    setSelectedAnswer(null)
    setIsChecked(false)
    setShowHint(false)
  }

  return (
    <Card className="bg-cream border-2 border-primary/30 overflow-hidden">
      <div className="bg-primary/10 px-4 py-3 flex items-center gap-2">
        <MapPin className="h-5 w-5 text-primary" />
        <h3 className="font-display text-lg font-semibold text-foreground">
          Wijsneus Quiz
        </h3>
        <div className="ml-auto">
          <HelpCircle className="h-5 w-5 text-muted-foreground/50" />
        </div>
      </div>

      <CardContent className="p-6">
        {!isChecked ? (
          <>
            <p className="text-foreground font-medium mb-4 leading-relaxed">
              {question}
            </p>

            {showHint && (
              <p className="text-sm text-muted-foreground italic mb-4 bg-secondary/50 p-3 rounded">
                Hint: {hint}
              </p>
            )}

            <div className="space-y-3 mb-6">
              {options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setSelectedAnswer(option.id)}
                  className={cn(
                    "w-full p-4 rounded-lg border-2 text-left transition-all flex items-center gap-3",
                    selectedAnswer === option.id
                      ? "border-primary bg-primary/10"
                      : "border-border bg-background hover:border-primary/50"
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

            <div className="flex gap-3">
              <Button
                onClick={handleCheck}
                disabled={!selectedAnswer}
                className="flex-1"
              >
                Controleer Antwoord
              </Button>
              {!showHint && (
                <Button
                  variant="outline"
                  onClick={() => setShowHint(true)}
                  className="border-primary text-primary"
                >
                  Hint
                </Button>
              )}
            </div>
          </>
        ) : (
          <div className="text-center">
            {/* Result icon */}
            <div
              className={cn(
                "w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center",
                isCorrect ? "bg-green-100" : "bg-red-100"
              )}
            >
              {isCorrect ? (
                <Check className="h-8 w-8 text-green-600" />
              ) : (
                <X className="h-8 w-8 text-red-600" />
              )}
            </div>

            <h4
              className={cn(
                "font-display text-2xl font-bold mb-2",
                isCorrect ? "text-green-600" : "text-red-600"
              )}
            >
              {isCorrect ? "Goed Gedaan!" : "Helaas!"}
            </h4>

            <p
              className={cn(
                "text-sm mb-4",
                isCorrect ? "text-green-600" : "text-red-600"
              )}
            >
              {isCorrect
                ? "Dat is het juiste antwoord."
                : `Het juiste antwoord was ${correctAnswer}.`}
            </p>

            <div className="bg-secondary/50 rounded-lg p-4 text-left mb-6">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {explanation}
              </p>
            </div>

            <Button onClick={handleReset} variant="outline" className="border-primary text-primary bg-transparent">
              Probeer Opnieuw
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
