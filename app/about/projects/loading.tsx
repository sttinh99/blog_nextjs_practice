export default function Loading() {
  return (
    <div className="p-20">
      <h1 className="mb-4">Projects Page</h1>
      <ul className="space-y-8">
        {Array(3)
          .fill("")
          .map((_el: string, index: number) => (
            <li key={index} className="list-none">
              <div className="w-full h-24 animate-pulse bg-neutral-100 dark:bg-neutral-700"></div>
            </li>
          ))}
      </ul>
      {/* Add your projects here */}
    </div>
  );
}
