export default function Card({ children = "Hi Mathew", className }: any) {
  return (
    <div
      className={`border rounded-md border-white-100 bg-red p-2 d-flex ${className}`}
    >
      {children}
    </div>
  );
}
