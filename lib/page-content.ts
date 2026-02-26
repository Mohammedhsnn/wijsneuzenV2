import { prisma } from "./prisma"

export interface PageSection {
  pageSlug: string
  sectionKey: string
  title: string
  content: string
}

// Default content for all pages - used as fallback and for seeding
export const defaultPageContent: PageSection[] = [
  // Homepage
  {
    pageSlug: "home",
    sectionKey: "hero",
    title: "Historie Wandeltour Philippine",
    content:
      "Ontdek het rijke verleden van de mosselstad tijdens deze sfeervolle historische wandeling langs monumenten en verhalen.",
  },
  {
    pageSlug: "home",
    sectionKey: "features",
    title: "Verken het verleden",
    content:
      "Wandel langs monumentale locaties en luister naar de verhalen die Philippine hebben gevormd. Van de oude haven tot de legendarische mosselcultuur.",
  },
  {
    pageSlug: "home",
    sectionKey: "route-preview",
    title: "De Route",
    content: "5 historische stops door Philippine",
  },

  // Route page
  {
    pageSlug: "route",
    sectionKey: "hero",
    title: "De Wandelroute",
    content:
      "Volg de historische route langs 5 informatieborden en ontdek de rijke geschiedenis van Philippine.",
  },

  // Wijsneuzen page
  {
    pageSlug: "wijsneuzen",
    sectionKey: "hero",
    title: "Project Philippine",
    content:
      "A historical walking tour bridging the rich maritime past and the vibrant present of Philippine.",
  },
  {
    pageSlug: "wijsneuzen",
    sectionKey: "our-story",
    title: "Our Story",
    content: `<p>The 'De Wijsneuzen' initiative began as a passion project to preserve the unique coastal history of Philippine. What once was a bustling harbor for mussels is now a town of stories, and we aim to tell them through every step of this guided experience.</p>
<p>Through careful archival research and oral histories from local elders, we've mapped out a route that showcases the hidden gems and monumental shifts in our local landscape.</p>`,
  },
  {
    pageSlug: "wijsneuzen",
    sectionKey: "contact",
    title: "De Wijsneuzen",
    content:
      "Preserving the heritage of Philippine through interactive storytelling and community engagement.",
  },

  // Blog page
  {
    pageSlug: "blog",
    sectionKey: "hero",
    title: "Blog",
    content:
      "Verhalen, nieuws en ontdekkingen over de rijke geschiedenis van Philippine.",
  },

  // Quiz page
  {
    pageSlug: "quiz",
    sectionKey: "hero",
    title: "Historische Quiz: Philippine",
    content: "Test je kennis over de geschiedenis van Philippine.",
  },
]

/**
 * Get content for a specific page section, falling back to defaults
 */
export async function getPageContent(
  pageSlug: string,
  sectionKey: string
): Promise<{ title: string; content: string }> {
  try {
    const record = await prisma.pageContent.findUnique({
      where: { pageSlug_sectionKey: { pageSlug, sectionKey } },
    })

    if (record) {
      return { title: record.title, content: record.content }
    }
  } catch {
    // Database not available, use defaults
  }

  const def = defaultPageContent.find(
    (d) => d.pageSlug === pageSlug && d.sectionKey === sectionKey
  )

  return {
    title: def?.title ?? "",
    content: def?.content ?? "",
  }
}

/**
 * Get all content for a specific page
 */
export async function getPageContents(
  pageSlug: string
): Promise<Record<string, { title: string; content: string }>> {
  const result: Record<string, { title: string; content: string }> = {}

  // First fill with defaults
  for (const def of defaultPageContent.filter(
    (d) => d.pageSlug === pageSlug
  )) {
    result[def.sectionKey] = { title: def.title, content: def.content }
  }

  // Override with database values
  try {
    const records = await prisma.pageContent.findMany({
      where: { pageSlug },
    })

    for (const rec of records) {
      result[rec.sectionKey] = { title: rec.title, content: rec.content }
    }
  } catch {
    // Database not available, defaults already set
  }

  return result
}

/**
 * Get all page content for the admin dashboard
 */
export async function getAllPageContent(): Promise<PageSection[]> {
  const result = [...defaultPageContent]

  try {
    const records = await prisma.pageContent.findMany()

    for (const rec of records) {
      const idx = result.findIndex(
        (r) => r.pageSlug === rec.pageSlug && r.sectionKey === rec.sectionKey
      )
      if (idx >= 0) {
        result[idx] = {
          pageSlug: rec.pageSlug,
          sectionKey: rec.sectionKey,
          title: rec.title,
          content: rec.content,
        }
      } else {
        result.push({
          pageSlug: rec.pageSlug,
          sectionKey: rec.sectionKey,
          title: rec.title,
          content: rec.content,
        })
      }
    }
  } catch {
    // Return defaults
  }

  return result
}

/**
 * Update (upsert) a page section's content
 */
export async function updatePageContent(
  pageSlug: string,
  sectionKey: string,
  title: string,
  content: string
) {
  return prisma.pageContent.upsert({
    where: { pageSlug_sectionKey: { pageSlug, sectionKey } },
    update: { title, content },
    create: { pageSlug, sectionKey, title, content },
  })
}
