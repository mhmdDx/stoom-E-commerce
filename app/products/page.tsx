import ProductList from "@/companents/ProductList";

const Productspage = async ({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) => {
  const category = (await searchParams).category;
    return (
        <div>
            <ProductList Categories={category}/>
        </div>
    )
}

export default Productspage;