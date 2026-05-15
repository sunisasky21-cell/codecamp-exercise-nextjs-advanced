import { NextRequest, NextResponse } from "next/server";
// TODO: Import findProject, updateProject, deleteProject from @/lib/store

type RouteContext = { params: Promise<{ id: string }> };

// TODO: Implement GET handler — return project by ID, 404 if not found
export async function GET(request: NextRequest, context: RouteContext) {
  const { id } = await context.params;
  // Hint: const project = findProject(Number(id));
  return NextResponse.json({ message: `TODO: Return project ${id}` });
}

// TODO: Implement PUT handler — update project, validate body, 404 if not found
export async function PUT(request: NextRequest, context: RouteContext) {
  const { id } = await context.params;
  return NextResponse.json({ message: `TODO: Update project ${id}` }, { status: 501 });
}

// TODO: Implement DELETE handler — delete project, return 204, 404 if not found
export async function DELETE(request: NextRequest, context: RouteContext) {
  const { id } = await context.params;
  return NextResponse.json({ message: `TODO: Delete project ${id}` }, { status: 501 });
}
