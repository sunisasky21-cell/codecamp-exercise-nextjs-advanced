import { NextRequest, NextResponse } from "next/server";
// Import users and addUser from @/lib/store
import { users, addUser } from "@/lib/store";

// Implement GET handler — return all users as JSON
export async function GET() {
  // Return all users from the store
  return NextResponse.json(users);
}

// Implement POST handler
// - Parse the request body with request.json()
// - Validate: name and email are required strings
// - Return 400 if validation fails
// - Call addUser() and return 201 with the new user
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email } = body;

    // Validate required fields and ensure they are strings
    if (typeof name !== "string" || !name.trim() || typeof email !== "string" || !email.trim()) {
      return NextResponse.json(
        { error: "Validation failed: name and email are required strings." },
        { status: 400 }
      );
    }

    // Save the new user to the store
    const newUser = addUser({ name: name.trim(), email: email.trim() });

    // Return 201 Created on success with the new user data
    return NextResponse.json(newUser, { status: 201 });

  } catch (error) {
    // Handle malformed JSON payload from the client
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }
}