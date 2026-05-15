import { Suspense } from "react";

// TODO: Create async Server Components that fetch data from your API routes
// - UsersSection: fetches /api/users and displays a user list
// - ProjectsSection: fetches /api/projects and displays a project list

// Hint: Add an artificial delay with:
// await new Promise(resolve => setTimeout(resolve, 1000));

async function UsersSection() {
  // TODO: Fetch users from /api/users and render them
  return (
    <section>
      <h2>Users</h2>
      <p>TODO: Fetch and display users here.</p>
    </section>
  );
}

async function ProjectsSection() {
  // TODO: Fetch projects from /api/projects and render them
  return (
    <section>
      <h2>Projects</h2>
      <p>TODO: Fetch and display projects here.</p>
    </section>
  );
}

export default function DashboardPage() {
  return (
    <div>
      <h1>Dashboard</h1>
      {/* TODO: Wrap each section in a <Suspense> boundary with a loading fallback */}
      <Suspense fallback={<p>Loading users...</p>}>
        <UsersSection />
      </Suspense>
      <Suspense fallback={<p>Loading projects...</p>}>
        <ProjectsSection />
      </Suspense>
    </div>
  );
}
