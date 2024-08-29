import Card from "./components/Card";

export default function Home() {
  return (
    <div className="space-y-4">
      <Card children="Try more" />
      <Card children="Miss you" />
      <Card children="So cool" />
      <Card />
    </div>
  );
}
