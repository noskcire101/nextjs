export default function ProductLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { productId: string; reviewId: string };
}) {
  return (
    <>
      <h2>
        Custom Title from review layout - {params.productId} and{" "}
        {params.reviewId}
      </h2>
      {children}
    </>
  );
}
