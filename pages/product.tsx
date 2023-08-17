import { useRouter } from "next/router";
import Image from "next/image";
import productsData from "./products.json";

interface Product {
  id: number;
  image: string;
  name: string;
  pret1: string;
  description: string;
}

export default function Product() {
  const router = useRouter();
  const { id: productId } = router.query;


  const product: Product | undefined = productsData.find(
    (p) => p.id === parseInt(productId as string)
  );

  return (
    <div className="flex flex-col items-center mt-10">
      {product ? (
        <>
          <h1 className="text-2xl font-semibold mb-4">{product.name}</h1>
          <div className="w-48 h-48 relative mb-4">
            <Image
              src={product.image}
              alt={product.name}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-lg font-bold mt-4">Price: {product.pret1}</p>
        </>
      ) : (
        <div>Product not found</div>
      )}
    </div>
  );
}
