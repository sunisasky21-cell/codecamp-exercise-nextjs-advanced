import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Advanced Exercise",
  description: "Codecamp Next.js Advanced Exercise",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui, sans-serif", padding: "2rem", maxWidth: "960px", margin: "0 auto" }}>
        <nav style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
          <a href="/">Home</a>
          <a href="/dashboard">Dashboard</a>
          <a href="/api/users">API: Users</a>
          <a href="/api/projects">API: Projects</a>
        </nav>
        {children}
      </body>
    </html>
  );
}
