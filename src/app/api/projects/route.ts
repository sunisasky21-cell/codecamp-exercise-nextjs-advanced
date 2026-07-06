import { NextRequest, NextResponse } from "next/server";
// Import projects and addProject from @/lib/store
import { projects, addProject } from "@/lib/store";

// Implement GET handler
// - Return all projects as JSON
// - Support ?status= query parameter to filter projects
export async function GET(request: NextRequest) {
  const status = request.nextUrl.searchParams.get("status");

  // Filter projects by status if the parameter is provided; otherwise, return all projects.
  const filteredProjects = status 
    ? projects.filter(project => project.status?.toLowerCase() === status.toLowerCase())
    : projects;

  return NextResponse.json(filteredProjects);
}

// Implement POST handler
// - Parse and validate the request body
// - Required: title, description, status, ownerId
// - Return 400 if validation fails
// - Call addProject() and return 201
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, description, status, ownerId } = body;

    // Validate required fields
    if (!title || !description || !status || !ownerId) {
      return NextResponse.json(
        { error: "Missing required fields: title, description, status, and ownerId are required." },
        { status: 400 }
      );
    }

    // Save the new project to the store
    const newProject = addProject({ title, description, status, ownerId });

    // Return 201 Created on success
    return NextResponse.json(newProject, { status: 201 });

  } catch (error) {
    // Handle malformed JSON payload from the client
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }
}