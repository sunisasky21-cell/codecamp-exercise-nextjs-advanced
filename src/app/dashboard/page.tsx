import { Suspense } from "react";

// Define basic types for the fetched data
type User = { id: number; name: string; email: string };
type Project = { id: number; title: string; description: string; status: string };

// Create async Server Components that fetch data from your API routes
// - UsersSection: fetches /api/users and displays a user list
// - ProjectsSection: fetches /api/projects and displays a project list

// Hint: Add an artificial delay with:
// await new Promise(resolve => setTimeout(resolve, 1000));

async function UsersSection() {
  // Add an artificial delay for loading state demonstration
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Fetch users from /api/users (Using absolute URL or relative depending on environment)
  // In Next.js App Router, configure your base URL accordingly if needed.
  const res = await fetch("http://localhost:3000/api/users", { cache: "no-store" });
  
  if (!res.ok) {
    return <p>Failed to load users.</p>;
  }

  const users: User[] = await res.json();

  return (
    <section>
      <h2>Users</h2>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <ul>
          {users.map(user => (
            <li key={user.id}>
              <strong>{user.name}</strong> ({user.email})
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

async function ProjectsSection() {
  // Add an artificial delay for loading state demonstration
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Fetch projects from /api/projects
  const res = await fetch("http://localhost:3000/api/projects", { cache: "no-store" });

  if (!res.ok) {
    return <p>Failed to load projects.</p>;
  }

  const projects: Project[] = await res.json();

  return (
    <section>
      <h2>Projects</h2>
      {projects.length === 0 ? (
        <p>No projects found.</p>
      ) : (
        <ul>
          {projects.map(project => (
            <li key={project.id}>
              <strong>{project.title}</strong> - {project.status}
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default function DashboardPage() {
  return (
    <div>
      <h1>Dashboard</h1>
      {/* Wrap each section in a <Suspense> boundary with a loading fallback */}
      <Suspense fallback={<p>Loading users...</p>}>
        <UsersSection />
      </Suspense>
      <Suspense fallback={<p>Loading projects...</p>}>
        <ProjectsSection />
      </Suspense>
    </div>
  );
}