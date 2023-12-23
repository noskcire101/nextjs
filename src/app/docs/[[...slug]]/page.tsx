export default function Slug({ params }: { params: { slug: string[] } }) {
  if (params.slug?.length === 2) {
    return (
      <p>
        My Product {params.slug[0]} and review {params.slug[1]}
      </p>
    );
  } else if (params.slug?.length === 1) {
    return <p>My Product {params.slug[0]}</p>;
  }
  return <p>My Product</p>;
}
