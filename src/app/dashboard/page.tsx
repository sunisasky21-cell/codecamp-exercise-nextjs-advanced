import { Suspense } from 'react';
async function getProjects() {
  
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || '';
  
  const res = await fetch(`${baseUrl}/api/projects`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch projects');
  }

  return res.json();
}

export default async function DashboardPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      
      {/* ใช้ Suspense ในการจัดการ Streaming ข้อมูล */}
      <Suspense fallback={<div>กำลังโหลดข้อมูลโครงการ...</div>}>
        <ProjectList />
      </Suspense>
    </div>
  );
}

async function ProjectList() {
  const projects = await getProjects();
  
  return (
    <div className="grid gap-4">
      {projects.map((project: any) => (
        <div key={project.id} className="border p-4 rounded-lg shadow-sm">
          <h3 className="font-semibold">{project.name}</h3>
          <p className="text-sm text-gray-600">{project.description}</p>
        </div>
      ))}
    </div>
  );
}