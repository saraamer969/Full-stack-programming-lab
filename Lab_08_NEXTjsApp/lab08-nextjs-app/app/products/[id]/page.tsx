const products = [
  { id: 1, title: "Laptop", description: "High performance", price: 1000 },
  { id: 2, title: "Phone", description: "Smart device", price: 500 },
  { id: 3, title: "Headphones", description: "Noise cancelling", price: 200 },
];

export default function ProductDetail({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === Number(params.id));

  if (!product) return <h1>Product Not Found</h1>;

  return (
    <div>
      <h1 className="text-xl font-bold">{product.title}</h1>
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
}