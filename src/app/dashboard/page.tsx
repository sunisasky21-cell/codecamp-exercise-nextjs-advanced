import { Suspense } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
}

interface User {
  id: number;
  name: string;
  email: string;
}

async function getProjects(): Promise<Project[]> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/projects`, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch projects data");
  }

  return res.json();
}

async function getUsers(): Promise<User[]> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/users`, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch users data");
  }

  return res.json();
}

export default async function DashboardPage() {
  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Projects</h2>
        <Suspense
          fallback={<div className="text-gray-500">Loading projects...</div>}
        >
          <ProjectList />
        </Suspense>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Users</h2>
        <Suspense
          fallback={<div className="text-gray-500">Loading users...</div>}
        >
          <UserList />
        </Suspense>
      </section>
    </div>
  );
}

async function ProjectList() {
  const projects = await getProjects();

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {projects.map((project) => (
        <div
          key={project.id}
          className="border p-4 rounded-lg shadow-sm bg-white"
        >
          <h3 className="font-semibold text-lg">{project.title}</h3>
          <p className="text-sm text-gray-600">{project.description}</p>
        </div>
      ))}
    </div>
  );
}

async function UserList() {
  const users = await getUsers();

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {users.map((user) => (
        <div
          key={user.id}
          className="border p-4 rounded-lg shadow-sm bg-gray-50 flex items-center space-x-3"
        >
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
            {user.name[0].toUpperCase()}
          </div>
          <div>
            <h4 className="font-medium text-sm">{user.name}</h4>
            <p className="text-xs text-gray-500">{user.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
