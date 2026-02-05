export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  featuredImage: string
  author: {
    name: string
    avatar: string
  }
  publishedAt: string
  status: "published" | "draft"
  tags: string[]
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "De Geschiedenis van de Mosselvisserij in Philippine",
    slug: "geschiedenis-mosselvisserij-philippine",
    excerpt: "Ontdek hoe de mosselvisserij Philippine vormde tot wat het vandaag is. Een verhaal van hard werken, gemeenschapszin en tradities.",
    content: `
      <p>De mosselvisserij heeft Philippine door de eeuwen heen gevormd. Wat begon als een kleine vissersgemeenschap groeide uit tot een bloeiend centrum van mosselcultuur.</p>
      
      <h2>De Vroege Jaren</h2>
      <p>In de 17e eeuw ontdekten vissers dat de Westerschelde ideale omstandigheden bood voor het kweken van mosselen. Het brakke water en de rijke voedingsstoffen zorgden voor mosselen van uitzonderlijke kwaliteit.</p>
      
      <h2>De Bloeitijd</h2>
      <p>Rond 1900 bereikte de mosselvisserij haar hoogtepunt. Tientallen kotters voeren dagelijks uit en de haven bruiste van activiteit. Families werkten generaties lang in dezelfde traditie.</p>
      
      <h2>Vandaag</h2>
      <p>Hoewel de industrie is veranderd, blijft de mosselcultuur een belangrijk deel van Philippine's identiteit. De jaarlijkse mosselfeesten trekken bezoekers van heinde en verre.</p>
    `,
    featuredImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    author: {
      name: "Anouska de Vries",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    },
    publishedAt: "2024-10-15",
    status: "published",
    tags: ["Geschiedenis", "Mosselvisserij", "Traditie"],
  },
  {
    id: "2",
    title: "Herontdekte Foto's uit het Archief",
    slug: "herontdekte-fotos-archief",
    excerpt: "Een recente vondst in het gemeentearchief onthult zeldzame foto's van Philippine rond 1920.",
    content: `
      <p>Bij het digitaliseren van het gemeentearchief zijn bijzondere foto's gevonden die een uniek beeld geven van het dagelijks leven in Philippine rond 1920.</p>
      
      <h2>De Vondst</h2>
      <p>Vrijwilligers van het historisch genootschap troffen een vergeten doos met glasnegatieven aan. Na zorgvuldige restauratie kwamen prachtige beelden tevoorschijn.</p>
      
      <h2>Wat de Foto's Onthullen</h2>
      <p>De foto's tonen het marktplein vol kooplieden, vissers die hun netten repareren, en kinderen die spelen op de kade. Een inkijkje in een wereld die allang verdwenen leek.</p>
    `,
    featuredImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    author: {
      name: "Bram Janssen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    },
    publishedAt: "2024-10-12",
    status: "published",
    tags: ["Archief", "Fotografie", "Historie"],
  },
  {
    id: "3",
    title: "Interview met de Oudste Inwoner van Philippine",
    slug: "interview-oudste-inwoner",
    excerpt: "Mevrouw Van der Berg (98) deelt haar herinneringen aan een Philippine dat niet meer bestaat.",
    content: `
      <p>In haar kleine woning aan de haven ontvangt mevrouw Van der Berg ons met koffie en koek. Op haar 98e is ze de oudste inwoner van Philippine.</p>
      
      <h2>Jeugdherinneringen</h2>
      <p>"Als kind speelde ik altijd bij de haven," vertelt ze. "Mijn vader was visser en ik keek uit naar het moment dat zijn boot terugkwam."</p>
      
      <h2>Veranderingen</h2>
      <p>Ze heeft veel zien veranderen. "De haven was vroeger veel drukker. Nu is het stil, maar de sfeer is gebleven. Philippine blijft mijn thuis."</p>
    `,
    featuredImage: "https://images.unsplash.com/photo-1569880153113-76e33fc52d5f?w=800&q=80",
    author: {
      name: "Sofie Peeters",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    },
    publishedAt: "2024-10-05",
    status: "published",
    tags: ["Interview", "Persoonlijk Verhaal", "Herinneringen"],
  },
]

export function getAllPublishedPosts(): BlogPost[] {
  return blogPosts.filter((post) => post.status === "published")
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getAllPosts(): BlogPost[] {
  return blogPosts
}
