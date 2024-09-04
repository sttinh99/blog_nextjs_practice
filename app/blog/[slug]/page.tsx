import { notFound } from "next/navigation";

export default function Blog({ params }: { params: { slug: string } }) {
  if (!["1", "2"].includes(params.slug)) {
    notFound();
  }
  return <div>Blog {params.slug}</div>;
}
