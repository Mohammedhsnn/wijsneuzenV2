import { NextRequest, NextResponse } from "next/server"
import { updatePageContent } from "@/lib/page-content"

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { pageSlug, sectionKey, title, content } = body

    if (!pageSlug || !sectionKey) {
      return NextResponse.json(
        { error: "pageSlug and sectionKey are required" },
        { status: 400 }
      )
    }

    const updated = await updatePageContent(
      pageSlug,
      sectionKey,
      title ?? "",
      content ?? ""
    )

    return NextResponse.json(updated)
  } catch (error) {
    console.error("Error updating page content:", error)
    return NextResponse.json(
      { error: "Failed to update page content" },
      { status: 500 }
    )
  }
}
