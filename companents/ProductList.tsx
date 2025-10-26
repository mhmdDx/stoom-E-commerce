"use client"

import ProductsCard from "@/companents/ProuductsCard"
import Catagories from "@/companents/Catagories"
import Link from "next/link"
import Filter from "@/companents/filtuer"
import { getAllProducts } from "@/data/products"
import { motion } from "framer-motion"

const ProductList = ({ Categories }: { Categories: string }) => {
  const products = getAllProducts()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const viewAllVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: 0.5 },
    },
    hover: { x: 10, color: "#1f2937" },
  }

  return (
    <div className="w-full">
      <Catagories />
      <Filter />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        {products.map((product) => (
          <ProductsCard key={product.id} product={product} />
        ))}
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        whileHover="hover"
        variants={viewAllVariants}
        viewport={{ once: true }}
      >
        <Link
          href={Categories ? `/products/?Catagory=${Categories}` : "/products"}
          className="flex justify-end text-gray-400 px-5 py-5 hover:text-gray-800 duration-300 font-bold"
        >
          View All Products
        </Link>
      </motion.div>
    </div>
  )
}

export default ProductList
