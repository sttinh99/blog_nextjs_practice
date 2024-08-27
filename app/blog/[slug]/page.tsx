export default function Blog({ params }: { params: { slug: string } }) {
  return <div>Blog {params.slug}</div>;
}
