export default function ReviewDetails({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>
        My Product {params.productId} and review {params.reviewId}
      </p>
    </main>
  );
}
