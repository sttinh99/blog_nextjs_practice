import Card from "@/app/components/Card";

type Blog = {
  id: number;
  title: string;
  description: string;
  stargazers_count: string | number;
};

export default async function ProjectList() {
  const res = await fetch("http://localhost:3001/repos", {
    // cache: "no-store",
  });
  const repos = await res.json();
  throw new Error(`ProjectList`);
  return (
    <div className="grid grid-ocls-1 md:grid-cols-2 gap-4">
      {repos.map((repo: Blog, index: number) => (
        <div key={index}>
          <Card className="font-mono h-full">
            <div className="flex justify-between">
              <div>
                <h2>{repo.title}</h2>
                <p>{repo.description}</p>
              </div>
              <p>✨{repo.stargazers_count}</p>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
}
