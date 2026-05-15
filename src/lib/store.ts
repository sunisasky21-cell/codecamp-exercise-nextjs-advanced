export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  status: "planning" | "active" | "completed";
  ownerId: number;
}

let nextUserId = 3;
let nextProjectId = 4;

export const users: User[] = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
];

export const projects: Project[] = [
  { id: 1, title: "Portfolio Website", description: "Personal portfolio", status: "completed", ownerId: 1 },
  { id: 2, title: "Task Manager", description: "React task app", status: "active", ownerId: 1 },
  { id: 3, title: "API Dashboard", description: "Data visualization", status: "planning", ownerId: 2 },
];

export function addUser(user: Omit<User, "id">): User {
  const newUser = { ...user, id: nextUserId++ };
  users.push(newUser);
  return newUser;
}

export function addProject(project: Omit<Project, "id">): Project {
  const newProject = { ...project, id: nextProjectId++ };
  projects.push(newProject);
  return newProject;
}

export function findProject(id: number): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function updateProject(id: number, updates: Partial<Omit<Project, "id">>): Project | null {
  const index = projects.findIndex((p) => p.id === id);
  if (index === -1) return null;
  projects[index] = { ...projects[index], ...updates };
  return projects[index];
}

export function deleteProject(id: number): boolean {
  const index = projects.findIndex((p) => p.id === id);
  if (index === -1) return false;
  projects.splice(index, 1);
  return true;
}
