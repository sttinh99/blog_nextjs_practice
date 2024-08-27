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
        <div className="mb-2" key={repo.id}>
          <h2>{repo.title}</h2>
          <p>{repo.description}</p>
          <p>{repo.stargazers_count}</p>
        </div>
      ))}
    </>
  );
}
