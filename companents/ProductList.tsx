
import ProductsCard from "@/companents/ProuductsCard";
import Catagories from "@/companents/Catagories";
import Link from "next/link";
import Filter from "@/companents/filtuer";
import { getAllProducts } from "@/data/products";

const ProductList = ({Categories}:{Categories:string}) => {
    const products = getAllProducts();
    
    return (
        <div className="w-full">
            <Catagories />
            <Filter />
         <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <ProductsCard key={product.id} product={product} />
                    ))}
            </div>
            <Link href={Categories ? `/products/?Catagory=${Categories}` : "/products"} className="flex justify-end text-gray-400 px-5 py-5 hover:text-gray-800 duration-300 font-bold">View All Products</Link>

        </div>
    )
}
export default ProductList;