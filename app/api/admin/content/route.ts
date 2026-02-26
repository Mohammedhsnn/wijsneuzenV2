import { NextResponse } from "next/server"
import { getAllPageContent } from "@/lib/page-content"

export async function GET() {
  try {
    const content = await getAllPageContent()
    return NextResponse.json(content)
  } catch (error) {
    console.error("Error fetching page content:", error)
    return NextResponse.json(
      { error: "Failed to fetch page content" },
      { status: 500 }
    )
  }
}
