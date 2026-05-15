import { NextRequest, NextResponse } from "next/server";
// TODO: Import users and addUser from @/lib/store

// TODO: Implement GET handler — return all users as JSON
export async function GET() {
  // Your code here
  return NextResponse.json({ message: "TODO: Return all users" });
}

// TODO: Implement POST handler
// - Parse the request body with request.json()
// - Validate: name and email are required strings
// - Return 400 if validation fails
// - Call addUser() and return 201 with the new user
export async function POST(request: NextRequest) {
  // Your code here
  return NextResponse.json({ message: "TODO: Create a user" }, { status: 501 });
}
