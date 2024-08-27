import { Suspense } from "react";
import ProjectList from "./components/ProjectList";
export default function ProjectsPage() {
  return (
    <div className="p-20">
      <h1 className="mb-4">Projects Page</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <ProjectList />
      </Suspense>
      {/* Add your projects here */}
    </div>
  );
}
