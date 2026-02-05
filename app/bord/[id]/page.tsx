import { notFound } from "next/navigation"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ToenNuSlider } from "@/components/bord/toen-nu-slider"
import { BordQuiz } from "@/components/bord/bord-quiz"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getBordById, getAllBorden } from "@/lib/borden-data"
import { ArrowLeft, Share2, BookOpen, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

interface BordPageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  const borden = getAllBorden()
  return borden.map((bord) => ({
    id: bord.id.toString(),
  }))
}

export default async function BordPage({ params }: BordPageProps) {
  const { id } = await params
  const bordId = parseInt(id, 10)
  const bord = getBordById(bordId)

  if (!bord) {
    notFound()
  }

  const allBorden = getAllBorden()
  const prevBord = bordId > 1 ? getBordById(bordId - 1) : null
  const nextBord = bordId < allBorden.length ? getBordById(bordId + 1) : null

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      
      <main className="flex-1">
        {/* Header */}
        <div className="bg-sepia-dark text-cream py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <Link
                href="/route"
                className="flex items-center gap-2 text-cream/80 hover:text-cream transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                <span className="text-sm">Terug</span>
              </Link>
              <h1 className="font-display text-lg font-semibold">
                Informatiebord {bord.id}: {bord.title}
              </h1>
              <button className="text-cream/80 hover:text-cream transition-colors">
                <Share2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="bg-secondary/50 border-b border-border py-2">
          <div className="container mx-auto px-4">
            <nav className="text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary">Philippine wandeling</Link>
              <span className="mx-2">›</span>
              <span className="text-primary">Informatiebord {bord.id}: {bord.title}</span>
            </nav>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto space-y-8">
            {/* Title */}
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance">
                {bord.subtitle}
              </h2>
            </div>

            {/* Hero image */}
            <div className="rounded-lg overflow-hidden border-2 border-border">
              <img
                src={bord.heroImage || "/placeholder.svg"}
                alt={bord.title}
                className="w-full aspect-video object-cover sepia-[0.4]"
              />
            </div>

            {/* Main content with drop cap */}
            <div className="prose prose-lg max-w-none">
              <p className="first-letter:text-5xl first-letter:font-display first-letter:font-bold first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:mt-1 text-foreground leading-relaxed">
                {bord.content.intro}
              </p>
              
              {bord.content.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-muted-foreground leading-relaxed mt-4">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Toen & Nu slider */}
            <ToenNuSlider
              historicImage={bord.historicImage}
              modernImage={bord.modernImage}
            />

            {/* Quiz */}
            <BordQuiz
              question={bord.quiz.question}
              hint={bord.quiz.hint}
              options={bord.quiz.options}
              correctAnswer={bord.quiz.correctAnswer}
              explanation={bord.quiz.explanation}
            />

            {/* Historisch Weetje */}
            <Card className="bg-primary/5 border-2 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">
                      Historisch Weetje
                    </p>
                    <h4 className="font-display text-lg font-semibold text-foreground mb-2">
                      {bord.historischWeetje.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {bord.historischWeetje.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation between boards */}
            <div className="flex items-center justify-between pt-8 border-t border-border">
              {prevBord ? (
                <Button asChild variant="outline" className="border-primary text-primary bg-transparent">
                  <Link href={`/bord/${prevBord.id}`} className="flex items-center gap-2">
                    <ChevronLeft className="h-4 w-4" />
                    <span className="hidden sm:inline">{prevBord.title}</span>
                    <span className="sm:hidden">Vorige</span>
                  </Link>
                </Button>
              ) : (
                <div />
              )}

              <Link
                href="/route"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Alle borden
              </Link>

              {nextBord ? (
                <Button asChild className="bg-primary text-primary-foreground">
                  <Link href={`/bord/${nextBord.id}`} className="flex items-center gap-2">
                    <span className="hidden sm:inline">{nextBord.title}</span>
                    <span className="sm:hidden">Volgende</span>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
              ) : (
                <Button asChild className="bg-primary text-primary-foreground">
                  <Link href="/quiz" className="flex items-center gap-2">
                    Start Quiz
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
