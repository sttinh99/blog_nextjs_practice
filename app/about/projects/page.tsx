import { Suspense } from "react";
import ProjectList from "./components/ProjectList";
import ProjectListLoading from "./components/ProjectListLoading";
export default function ProjectsPage() {
  return (
    <div className="">
      <h1 className="mb-4">Projects Page</h1>
      <Suspense fallback={<ProjectListLoading />}>
        <ProjectList />
      </Suspense>
      {/* Add your projects here */}
    </div>
  );
}
