import { sanityClient } from '../sanity';

export default async function Home() {
  const query = `*[_type == "product"]{name, price, description, "imageUrl": image.asset->url}`;
  const products = await sanityClient.fetch(query);

  return (
    <div>
      <h1>Productos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.name} className="border p-4">
            <img src={product.imageUrl} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price} ARS</p>
          </div>
        ))}
      </div>
    </div>
  );
}
