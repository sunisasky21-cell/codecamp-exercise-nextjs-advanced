export default function HomePage() {
  return (
    <div>
      <h1>Next.js Advanced Exercise</h1>
      <p>Complete the Route Handlers, middleware, and streaming dashboard.</p>
      <h2>API Endpoints</h2>
      <ul>
        <li><code>GET /api/users</code> — List all users</li>
        <li><code>POST /api/users</code> — Create a user</li>
        <li><code>GET /api/projects</code> — List projects (supports <code>?status=</code> filter)</li>
        <li><code>POST /api/projects</code> — Create a project</li>
        <li><code>GET /api/projects/[id]</code> — Get a project</li>
        <li><code>PUT /api/projects/[id]</code> — Update a project</li>
        <li><code>DELETE /api/projects/[id]</code> — Delete a project</li>
      </ul>
    </div>
  );
}
