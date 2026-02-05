import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Castle } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background with sepia overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(139, 119, 92, 0.7), rgba(139, 119, 92, 0.9)), url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80')`,
        }}
      />
      
      {/* Decorative pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Historic card */}
          <div className="bg-cream/95 backdrop-blur-sm rounded-lg shadow-2xl p-8 md:p-12 text-center border-4 border-primary/20">
            <Castle className="h-12 w-12 text-primary mx-auto mb-4" />
            
            <h1 className="font-display text-4xl md:text-5xl font-bold text-sepia-dark mb-4 text-balance">
              Historie Wandeltour Philippine
            </h1>
            
            <div className="w-16 h-1 bg-primary mx-auto mb-6" />
            
            <p className="text-muted-foreground leading-relaxed mb-8 text-pretty">
              Ontdek het rijke verleden van de mosselstad tijdens deze sfeervolle historische wandeling langs monumenten en verhalen.
            </p>
            
            <Button asChild size="lg" className="font-semibold">
              <Link href="/route">
                Start de Tour
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom cobblestone pattern */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1920&q=80')`,
        }}
      />
    </section>
  )
}
