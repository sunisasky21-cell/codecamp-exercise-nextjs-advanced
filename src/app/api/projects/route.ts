import { NextRequest, NextResponse } from "next/server";
// TODO: Import projects and addProject from @/lib/store

// TODO: Implement GET handler
// - Return all projects as JSON
// - Support ?status= query parameter to filter projects
export async function GET(request: NextRequest) {
  // Hint: const status = request.nextUrl.searchParams.get("status");
  return NextResponse.json({ message: "TODO: Return projects" });
}

// TODO: Implement POST handler
// - Parse and validate the request body
// - Required: title, description, status, ownerId
// - Return 400 if validation fails
// - Call addProject() and return 201
export async function POST(request: NextRequest) {
  return NextResponse.json({ message: "TODO: Create a project" }, { status: 501 });
}
