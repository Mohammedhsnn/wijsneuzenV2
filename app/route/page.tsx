import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Footprints, ArrowRight } from "lucide-react"
import Link from "next/link"

const informatieBorden = [
  {
    id: 1,
    title: "De Haven",
    subtitle: "Het begin van de mosselvisserij",
    description: "Ontdek de rijke maritieme geschiedenis van Philippine's haven, waar generaties vissers hun brood verdienden.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    duration: "10 min",
  },
  {
    id: 2,
    title: "Het Marktplein",
    subtitle: "Hart van de gemeenschap",
    description: "Het centrale plein waar handel, feesten en dagelijks leven samenkwamen door de eeuwen heen.",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&q=80",
    duration: "8 min",
  },
  {
    id: 3,
    title: "De Sint-Filippuskerk",
    subtitle: "Eeuwen van geloof",
    description: "Deze historische kerk vormt al eeuwenlang het spirituele centrum van Philippine.",
    image: "https://images.unsplash.com/photo-1548625149-fc4a29cf7092?w=600&q=80",
    duration: "12 min",
  },
  {
    id: 4,
    title: "De Molen",
    subtitle: "Industrieel erfgoed",
    description: "Een monument van Nederlandse vindingrijkheid en de agrarische geschiedenis van de regio.",
    image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=600&q=80",
    duration: "7 min",
  },
  {
    id: 5,
    title: "Het Fort",
    subtitle: "Verdedigingswerken",
    description: "De overblijfselen van de vestingwerken die Philippine beschermden tegen invallers.",
    image: "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?w=600&q=80",
    duration: "15 min",
  },
]

export default function RoutePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative py-16 md:py-24 bg-sepia-dark text-cream overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-balance">
                De Wandelroute
              </h1>
              <div className="w-16 h-1 bg-primary mx-auto mb-6" />
              <p className="text-cream/80 leading-relaxed mb-8">
                Volg de historische route langs 5 informatieborden en ontdek de rijke geschiedenis van Philippine.
              </p>
              
              {/* Route stats */}
              <div className="flex justify-center gap-8">
                <div className="flex items-center gap-2">
                  <Footprints className="h-5 w-5 text-primary" />
                  <span className="text-sm">2.5 km</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-sm">~1 uur</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-sm">5 stops</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Informatieborden */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              {informatieBorden.map((bord, index) => (
                <Card 
                  key={bord.id} 
                  className="overflow-hidden bg-card border-2 border-border hover:border-primary/50 transition-all group"
                >
                  <div className="md:flex">
                    {/* Image */}
                    <div className="md:w-1/3 relative">
                      <div className="aspect-video md:aspect-auto md:h-full">
                        <img
                          src={bord.image || "/placeholder.svg"}
                          alt={bord.title}
                          className="w-full h-full object-cover sepia-[0.3] group-hover:sepia-0 transition-all duration-500"
                        />
                        <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                          Bord {bord.id}
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <CardContent className="flex-1 p-6 md:p-8 flex flex-col justify-between">
                      <div>
                        <h2 className="font-display text-2xl font-bold text-foreground mb-1">
                          {bord.title}
                        </h2>
                        <p className="text-primary font-medium text-sm mb-3">
                          {bord.subtitle}
                        </p>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {bord.description}
                        </p>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{bord.duration} leestijd</span>
                        </div>
                        <Button asChild variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent">
                          <Link href={`/bord/${bord.id}`} className="flex items-center gap-2">
                            Lees meer
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
