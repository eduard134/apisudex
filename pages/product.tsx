import { useRouter } from "next/router";
import Image from "next/image";
import productsData from "./products.json";
import Footer from "./components/Footer";

interface Product {
  id: number;
  image: string;
  name: string;
  pret1: string;
}

export default function Product() {
  const router = useRouter();
  const { id: productId } = router.query;

  const product: Product | undefined = productsData.find(
    (p) => p.id === parseInt(productId as string)
  );

  return (
    <div>
      {product ? (
        <>
          <div className="flex justify-center justify-evenly mt-20 mb-20 relative ">
            <div className="w-80 h-80 relative mb-4">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div
              className="bg-gradient-to-br via-orange-400 from-yellow-500 
            to-yellow-500 p-10 h-96 w-72 rounded-xl shadow-lg"
            >
              <h1 className="text-2xl font-bold font-point font-extrabold mb-4 text-white">
                {product.name}
              </h1>
              <p className="text-md font-varela absolute bottom-0 mb-5 text-white ">
                Total{" "}
                <span className="ml-28 text-lg font-semibold ">
                  {" "}
                  {product.pret1}
                </span>
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className="text-center mt-20 mb-20 text-gray-600">
          <p className="text-4xl font-semibold mb-4">
            Produsul nu a fost găsit
          </p>
          <p>Ne pare rău, produsul pe care îl căutați nu există.</p>
        </div>
      )}
      <Footer />
    </div>
  );
}
