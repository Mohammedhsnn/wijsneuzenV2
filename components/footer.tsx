import Link from "next/link"
import { Castle, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-sepia-dark text-cream">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Castle className="h-6 w-6 text-primary" />
              <span className="font-display text-xl font-bold">De Wijsneuzen</span>
            </div>
            <p className="text-sm text-cream/80 leading-relaxed">
              Preserving the heritage of Philippine through interactive storytelling and community engagement.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-sm text-cream/80">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@wijsneuzen-philippine.nl</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Village Square, Philippine</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-4">Navigatie</h3>
            <nav className="flex flex-col gap-2 text-sm text-cream/80">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <Link href="/route" className="hover:text-primary transition-colors">De Route</Link>
              <Link href="/wijsneuzen" className="hover:text-primary transition-colors">De Wijsneuzen</Link>
              <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
            </nav>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cream/20 text-center text-sm text-cream/60">
          <p>&copy; {new Date().getFullYear()} Project De Wijsneuzen. Alle rechten voorbehouden. Built with pride in Philippine.</p>
        </div>
      </div>
    </footer>
  )
}
