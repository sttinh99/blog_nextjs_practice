import { Suspense } from "react";
import ProjectList from "./components/ProjectList";
import ProjectListLoading from "./components/ProjectListLoading";
import { ErrorBoundary } from "react-error-boundary";
export default function ProjectsPage() {
  return (
    <div>
      <Suspense fallback={<ProjectListLoading />}>
        <div className="mb-2">This is my project</div>
        {/* <ErrorBoundary fallback={<div>Can't fetch now</div>}> */}
        <ProjectList />
        {/* </ErrorBoundary> */}
      </Suspense>
      {/* Add your projects here */}
    </div>
  );
}
