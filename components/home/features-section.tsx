import { MapPin, Headphones, BookOpen } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: MapPin,
    title: "Interactieve Route",
    description: "Volg de weg via je smartphone langs alle historische locaties.",
  },
  {
    icon: Headphones,
    title: "Audio Gids",
    description: "Luister naar lokale vertellers die de geschiedenis tot leven brengen.",
  },
  {
    icon: BookOpen,
    title: "Historische Weetjes",
    description: "Leer meer over de rijke cultuur en het erfgoed van Philippine.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Verken het verleden
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-8 h-px bg-primary" />
            <div className="w-2 h-2 rounded-full bg-primary" />
            <div className="w-8 h-px bg-primary" />
          </div>
          <p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed text-pretty">
            Wandel langs monumentale locaties en luister naar de verhalen die Philippine hebben gevormd. Van de oude haven tot de legendarische mosselcultuur.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {features.map((feature) => (
            <Card 
              key={feature.title} 
              className="bg-card border-2 border-border hover:border-primary/50 transition-colors"
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
