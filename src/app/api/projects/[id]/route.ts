import { NextRequest, NextResponse } from "next/server";
// Import findProject, updateProject, deleteProject from @/lib/store
import { findProject, updateProject, deleteProject } from "@/lib/store";

type RouteContext = { params: Promise<{ id: string }> };

// Implement GET handler — return project by ID, 404 if not found
export async function GET(request: NextRequest, context: RouteContext) {
  const { id } = await context.params;
  const projectId = Number(id);

  if (isNaN(projectId)) {
    return NextResponse.json({ error: "Invalid ID format" }, { status: 400 });
  }

  const project = findProject(projectId);

  if (!project) {
    return NextResponse.json({ error: "Project not found" }, { status: 404 });
  }

  return NextResponse.json(project);
}

// Implement PUT handler — update project, validate body, 404 if not found
export async function PUT(request: NextRequest, context: RouteContext) {
  const { id } = await context.params;
  const projectId = Number(id);

  if (isNaN(projectId)) {
    return NextResponse.json({ error: "Invalid ID format" }, { status: 400 });
  }

  // Check if project exists first
  const project = findProject(projectId);
  if (!project) {
    return NextResponse.json({ error: "Project not found" }, { status: 404 });
  }

  try {
    const body = await request.json();

    // Simple validation:
    if (!body || Object.keys(body).length === 0) {
      return NextResponse.json({ error: "Missing update data" }, { status: 400 });
    }

    const updatedProject = updateProject(projectId, body);
    return NextResponse.json(updatedProject);
  } catch (error) {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }
}

// Implement DELETE handler — delete project, return 204, 404 if not found
export async function DELETE(request: NextRequest, context: RouteContext) {
  const { id } = await context.params;
  const projectId = Number(id);

  if (isNaN(projectId)) {
    return NextResponse.json({ error: "Invalid ID format" }, { status: 400 });
  }

  const project = findProject(projectId);
  if (!project) {
    return NextResponse.json({ error: "Project not found" }, { status: 404 });
  }

  deleteProject(projectId);

  // Return 204 No Content per REST API standards (no response body)
  return new NextResponse(null, { status: 204 });
}