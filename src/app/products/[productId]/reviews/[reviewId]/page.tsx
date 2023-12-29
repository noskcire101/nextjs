import { Metadata } from "next";

interface Props {
  params: { productId: string; reviewId: string };
}

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `Product ${params.productId} and review ${params.reviewId}`,
  };
}

export default function ReviewDetails({ params }: Props) {
  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error(`Error loading review in ${params.reviewId}`);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>
        My Product {params.productId} and review {params.reviewId}
      </p>
    </main>
  );
}
