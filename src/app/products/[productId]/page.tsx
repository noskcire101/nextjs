import { Metadata } from "next";

interface Props {
  params: { productId: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `Product ${params.productId}`,
  };
}

export default function ProductDetails({ params }: Props) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>My Product {params.productId}</p>
    </main>
  );
}
