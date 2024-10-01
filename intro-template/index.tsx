import { promises as fs } from 'fs';
import path from 'path';

export default function Home({ products }) {
  return (
    <div>
      <h1>Productos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price} ARS</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  // Lee el archivo products.json
  const filePath = path.join(process.cwd(), 'data', 'products.json');
  const jsonData = await fs.readFile(filePath);
  const products = JSON.parse(jsonData);

  return {
    props: {
      products,
    },
  };
}
