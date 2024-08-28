import Card from "@/app/components/Card";

type Blog = {
  id: number;
  title: string;
  description: string;
  stargazers_count: string | number;
};

export default async function ProjectList() {
  const res = await fetch("http://localhost:3001/repos", {
    cache: "no-store",
  });
  const repos = await res.json();
  return (
    <>
      {repos.map((repo: Blog) => (
        <Card>
          <h2>{repo.title}</h2>
          <p>{repo.description}</p>
          <p>{repo.stargazers_count}</p>
        </Card>
      ))}
    </>
  );
}
