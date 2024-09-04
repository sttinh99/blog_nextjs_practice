import Card from "./components/Card";

export default function Home({ searchParams }: any) {
  // throw new Error("Cheets tieet");
  console.log("searchParams", searchParams);

  if (searchParams.error) {
    throw new Error("Hello Ck");
  }
  return (
    <div className="space-y-4">
      <Card>Try more</Card>
      <Card>Miss you</Card>
      <Card>So cool</Card>
      <Card />
    </div>
  );
}
