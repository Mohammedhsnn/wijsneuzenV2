import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { defaultPageContent } from "@/lib/page-content"

export async function POST() {
  try {
    let seeded = 0

    for (const item of defaultPageContent) {
      const existing = await prisma.pageContent.findUnique({
        where: {
          pageSlug_sectionKey: {
            pageSlug: item.pageSlug,
            sectionKey: item.sectionKey,
          },
        },
      })

      if (!existing) {
        await prisma.pageContent.create({
          data: {
            pageSlug: item.pageSlug,
            sectionKey: item.sectionKey,
            title: item.title,
            content: item.content,
          },
        })
        seeded++
      }
    }

    return NextResponse.json({
      message: `Database seeded successfully. ${seeded} records created.`,
      seeded,
    })
  } catch (error) {
    console.error("Error seeding database:", error)
    return NextResponse.json(
      { error: "Failed to seed database" },
      { status: 500 }
    )
  }
}
