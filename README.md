# Codecamp Exercise: Next.js Advanced

## Learning Objectives

- Create Route Handlers (API routes) with GET, POST, PUT, DELETE
- Validate request bodies and return proper HTTP status codes
- Write middleware for request logging and authentication checks
- Use Suspense boundaries for streaming and progressive rendering
- Handle dynamic and static route segments

## Exercise Instructions

### Build a REST API with Dashboard

1. **Fork** this repository and **clone** your fork
2. Run `pnpm install` and `pnpm dev`
3. Implement the Route Handlers and middleware

#### Step 1: Users Route Handler (`src/app/api/users/route.ts`)
- Implement `GET` — return all users from the in-memory store
- Implement `POST` — validate body, create a new user, return 201
- Use `NextRequest` and `NextResponse`
- Return proper JSON responses with status codes

#### Step 2: Projects Route Handler (`src/app/api/projects/route.ts`)
- Implement `GET` — return all projects, support `?status=` query filter
- Implement `POST` — validate body, create a new project, return 201

#### Step 3: Single Project Handler (`src/app/api/projects/[id]/route.ts`)
- Implement `GET` — return a single project by ID, 404 if not found
- Implement `PUT` — update a project, validate body
- Implement `DELETE` — delete a project, return 204

#### Step 4: Middleware (`src/middleware.ts`)
- Log every request: method, path, timestamp
- Add a custom `X-Request-Id` header to all responses
- Optionally: check for an `Authorization` header on `/api/` routes

#### Step 5: Dashboard with Streaming (`src/app/dashboard/page.tsx`)
- Create a dashboard that displays users and projects
- Use `<Suspense>` boundaries to stream each section independently
- Add loading fallbacks for each Suspense boundary

## Acceptance Criteria

- [ ] `GET /api/users` returns a JSON array of users
- [ ] `POST /api/users` creates a user and returns 201
- [ ] `GET /api/projects?status=active` filters by status
- [ ] `PUT /api/projects/[id]` updates and returns the project
- [ ] `DELETE /api/projects/[id]` returns 204
- [ ] Middleware logs requests and adds `X-Request-Id` header
- [ ] Dashboard uses `<Suspense>` with loading fallbacks
- [ ] Invalid POST/PUT bodies return 400 with error message
- [ ] Non-existent resources return 404

## File Structure

```
codecamp-exercise-nextjs-advanced/
├── README.md
├── LICENSE
├── .gitignore
├── package.json
├── next.config.ts
├── tsconfig.json
├── src/
│   ├── middleware.ts                  # TODO: Request logging & auth
│   ├── app/
│   │   ├── layout.tsx                 # Root layout (provided)
│   │   ├── page.tsx                   # Home page (provided)
│   │   ├── dashboard/
│   │   │   └── page.tsx               # TODO: Streaming dashboard
│   │   └── api/
│   │       ├── users/
│   │       │   └── route.ts           # TODO: Users API
│   │       └── projects/
│   │           ├── route.ts           # TODO: Projects list API
│   │           └── [id]/
│   │               └── route.ts       # TODO: Single project API
│   └── lib/
│       └── store.ts                   # In-memory data store (provided)
```

## Commands

```bash
pnpm install     # Install dependencies
pnpm dev     # Start dev server at http://localhost:3000
```

## Testing the API

```bash
# List users
curl http://localhost:3000/api/users

# Create a user
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name": "Alice", "email": "alice@example.com"}'

# List projects filtered by status
curl "http://localhost:3000/api/projects?status=active"

# Update a project
curl -X PUT http://localhost:3000/api/projects/1 \
  -H "Content-Type: application/json" \
  -d '{"title": "Updated Title"}'

# Delete a project
curl -X DELETE http://localhost:3000/api/projects/1
```
