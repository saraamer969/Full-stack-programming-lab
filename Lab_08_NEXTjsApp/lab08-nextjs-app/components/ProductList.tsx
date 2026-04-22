import Link from "next/link";

const products = [
  { id: 1, title: "Laptop", description: "High performance", price: 1000 },
  { id: 2, title: "Phone", description: "Smart device", price: 500 },
  { id: 3, title: "Headphones", description: "Noise cancelling", price: 200 },
];

export default function ProductList() {
  return (
    <div>
      <h1 className="text-xl font-bold">Products</h1>

      {products.map((p) => (
        <div key={p.id} className="border p-3 my-2">
          <h2>{p.title}</h2>
          <p>{p.description}</p>
          <p>${p.price}</p>

          <Link href={`/products/${p.id}`} className="text-blue-500">
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}