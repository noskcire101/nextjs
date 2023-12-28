export default function ProductLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { productId: string };
}) {
  return (
    <>
      <h2>Custom Title from product layout - {params.productId}</h2>
      {children}
    </>
  );
}
