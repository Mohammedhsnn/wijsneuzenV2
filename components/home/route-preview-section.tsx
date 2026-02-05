import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, MapPin } from "lucide-react"

const stops = [
  {
    id: 1,
    title: "De Haven",
    description: "Waar de mosselvisserij begon",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80",
  },
  {
    id: 2,
    title: "Het Marktplein",
    description: "Hart van de gemeenschap",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&q=80",
  },
  {
    id: 3,
    title: "De Kerk",
    description: "Eeuwen van geschiedenis",
    image: "https://images.unsplash.com/photo-1548625149-fc4a29cf7092?w=400&q=80",
  },
  {
    id: 4,
    title: "De Molen",
    description: "Industrieel erfgoed",
    image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=400&q=80",
  },
  {
    id: 5,
    title: "Het Fort",
    description: "Verdedigingswerken",
    image: "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?w=400&q=80",
  },
]

export function RoutePreviewSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            De Route
          </h2>
          <p className="text-muted-foreground">
            5 historische stops door Philippine
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {stops.map((stop) => (
            <Link key={stop.id} href={`/bord/${stop.id}`}>
              <Card className="group overflow-hidden bg-card border-2 border-border hover:border-primary transition-all hover:shadow-lg">
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={stop.image || "/placeholder.svg"}
                    alt={stop.title}
                    className="w-full h-full object-cover sepia-[0.3] group-hover:sepia-0 transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sepia-dark/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <div className="flex items-center gap-1 text-cream mb-1">
                      <MapPin className="h-3 w-3 text-primary" />
                      <span className="text-xs">Bord {stop.id}</span>
                    </div>
                    <h3 className="font-display text-sm font-semibold text-cream">
                      {stop.title}
                    </h3>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent">
            <Link href="/route" className="flex items-center gap-2">
              Bekijk volledige route
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
