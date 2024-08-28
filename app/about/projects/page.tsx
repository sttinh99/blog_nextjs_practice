import { Suspense } from "react";
import ProjectList from "./components/ProjectList";
import ProjectListLoading from "./components/ProjectListLoading";
export default function ProjectsPage() {
  return (
    <div>
      <Suspense fallback={<ProjectListLoading />}>
        <ProjectList />
      </Suspense>
      {/* Add your projects here */}
    </div>
  );
}
