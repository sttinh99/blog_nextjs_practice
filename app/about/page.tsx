export default function AboutPages() {
  if (Math.random() > 0.5) throw new Error("oppps");
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page.</p>
    </div>
  );
}
