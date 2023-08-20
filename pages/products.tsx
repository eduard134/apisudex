    import React from "react";
    import productsData from "./products.json";
    import Footer from "./components/Footer";
    import Link from "next/link";
    import Image from "next/image";
    import { useRouter } from "next/router";
    import categoriesData from "./categories.json";

    interface Product {
      id: number;
      categoryId: number;
      image?: string;
      image1?: string;
      name: string;
      opt1?: string;
      opt2?: string;
      opt3?: string;
      pret1: string;
      pret2?: string;
      pret3?: string;
      reducere?: string;
      descriere: string;
    }

    const ProductsComponent = () => {
      const router = useRouter();
      const categoryId = router.query.categoryId;

      const filteredProducts = categoryId
        ? productsData.filter((product) => product.categoryId === +categoryId)
        : productsData;

      const categoryName = categoryId
        ? categoriesData.find((category) => category.id === +categoryId)?.denumire
        : "All Products";
      return (
        <>
          <p className="text-center mt-10 text-4xl font-recoleta">{categoryName}</p>
          <div className="flex flex-wrap justify-center mt-10 gap-8">
            {filteredProducts.map((product: Product) => (
              <Link
                href={`/product?id=${product.id}`}
                key={product.id}
                className="mb-6 md:mb-0 md:mr-[5vw] flex flex-col justify-center items-center rounded-md p-2 md:p-5 h-[full] md:w-[15%] bg-slate-100 hover:border hover:border-black"
              >
                <div className="h-[80%] w-full mb-2 md:mb-4 flex justify-center items-center">
                  <Image
                    src={product.image || "/default-image.jpg"}
                    alt={product.name}
                    width={150}
                    height={150}
                  />
                </div>
                <div className="font-bold text-base md:text-lg text-slate-600 mb-0 md:mb-1 font-varela">
                  {product.reducere ? (
                    <div className="flex flex-col items-center">
                      <p className="line-through text-gray-400">{product.pret1}</p>
                      <p>{product.reducere}</p>
                    </div>
                  ) : (
                    product.pret1
                  )}
                </div>
                <div className="font-medium text-slate-600 text-sm md:text-base font-varela text-center">
                  {product.name}
                </div>
              </Link>
            ))}
          </div>
          <Footer />
        </>
      );
    };

    export default ProductsComponent;