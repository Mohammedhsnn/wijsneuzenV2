'use client';

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Star, RotateCcw, Home } from "lucide-react"

interface QuizResultProps {
  totalQuestions: number
  correctAnswers: number
  onRestart: () => void
}

export function QuizResult({
  totalQuestions,
  correctAnswers,
  onRestart,
}: QuizResultProps) {
  const percentage = Math.round((correctAnswers / totalQuestions) * 100)
  
  const getMessage = () => {
    if (percentage === 100) return { title: "Perfect!", subtitle: "Je bent een echte Wijsneus!" }
    if (percentage >= 80) return { title: "Uitstekend!", subtitle: "Je kent Philippine heel goed!" }
    if (percentage >= 60) return { title: "Goed gedaan!", subtitle: "Je hebt veel geleerd over Philippine." }
    if (percentage >= 40) return { title: "Niet slecht!", subtitle: "Er valt nog wat te ontdekken." }
    return { title: "Blijf leren!", subtitle: "Bezoek de informatieborden voor meer kennis." }
  }

  const message = getMessage()

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto text-center">
        {/* Trophy */}
        <div className="w-24 h-24 rounded-full bg-primary/20 mx-auto mb-6 flex items-center justify-center">
          <Trophy className="h-12 w-12 text-primary" />
        </div>

        <h1 className="font-display text-3xl font-bold text-foreground mb-2">
          {message.title}
        </h1>
        <p className="text-muted-foreground mb-8">
          {message.subtitle}
        </p>

        {/* Score Card */}
        <Card className="bg-cream border-2 border-primary/30 mb-8">
          <CardContent className="p-8">
            <div className="text-6xl font-display font-bold text-primary mb-2">
              {correctAnswers}/{totalQuestions}
            </div>
            <p className="text-muted-foreground">
              vragen correct beantwoord
            </p>

            {/* Stars */}
            <div className="flex justify-center gap-1 mt-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-8 w-8 ${
                    i < Math.ceil((percentage / 100) * 5)
                      ? "text-primary fill-primary"
                      : "text-border"
                  }`}
                />
              ))}
            </div>

            {/* Progress bar */}
            <div className="mt-6">
              <div className="flex justify-between text-sm text-muted-foreground mb-2">
                <span>Score</span>
                <span>{percentage}%</span>
              </div>
              <div className="w-full h-3 bg-border rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary transition-all duration-500"
                  style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="space-y-3">
          <Button onClick={onRestart} className="w-full" size="lg">
            <RotateCcw className="mr-2 h-4 w-4" />
            Probeer Opnieuw
          </Button>

          <Button asChild variant="outline" className="w-full border-primary text-primary bg-transparent" size="lg">
            <Link href="/route">
              <Home className="mr-2 h-4 w-4" />
              Terug naar Route
            </Link>
          </Button>
        </div>

        {/* Share message */}
        <p className="text-sm text-muted-foreground mt-8">
          Deel je score met vrienden en daag ze uit om de quiz ook te maken!
        </p>
      </div>
    </div>
  )
}
