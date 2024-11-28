'use client';  
import { useParams } from 'next/navigation';

export default function ProductPage() {
  const { id } = useParams();

  const productData: { [key: string]: { name: string; description: string } } = {
    '1': { name: 'Product 1', description: 'This is the first product.' },
    '2': { name: 'Product 2', description: 'This is the second product.' },
    '3': { name: 'Product 3', description: 'This is the third product.' },
  };
  
  if (typeof id !== 'string' || !productData[id]) {
    return <h1>Product not found or invalid ID</h1>;
  }

  const product = productData[id];

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </div>
  );
}
