"use client"
import Link from "next/link"
import { motion } from "framer-motion"

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const columnVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4 },
    }),
  }

  const linkVariants = {
    hover: { x: 5, color: "#ffffff" },
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={footerVariants}
      viewport={{ once: true, amount: 0.3 }}
      className="mt-16 flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between md:gap-0 bg-gray-800 p-8 rounded-lg"
    >
      <motion.div
        custom={0}
        variants={columnVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col gap-4 items-center md:items-start"
      >
        <Link href="/" className="flex items-center">
          <motion.img
            whileHover={{ scale: 1.05 }}
            src="/logo.png"
            width={500}
            height={800}
            className="w-15 h-15 md:w-18 md:h-18"
          />
        </Link>
        <p className="text-sm text-gray-400">© 2025 STOOM.</p>
        <p className="text-sm text-gray-400">All rights reserved.</p>
        <p className="text-sm text-gray-400">
          Made by{" "}
          <motion.span whileHover={{ color: "#ffffff" }} className="hover:text-white">
            <Link href="https://mohamed-eid.vercel.app" target="_blank">
              Mohamed EID
            </Link>
          </motion.span>
        </p>
      </motion.div>

      {[0, 1, 2].map((columnIndex) => (
        <motion.div
          key={columnIndex}
          custom={columnIndex + 1}
          variants={columnVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start"
        >
          <p className="text-sm text-amber-50">{columnIndex === 0 ? "Links" : columnIndex === 1 ? "Links" : "Links"}</p>
          {columnIndex === 0 && (
            <>
              <motion.div variants={linkVariants} whileHover="hover">
                <Link href="/">Homepage</Link>
              </motion.div>
              <motion.div variants={linkVariants} whileHover="hover">
                <Link href="/">Contact</Link>
              </motion.div>
              <motion.div variants={linkVariants} whileHover="hover">
                <Link href="/">Terms of Service</Link>
              </motion.div>
              <motion.div variants={linkVariants} whileHover="hover">
                <Link href="/">Privacy Policy</Link>
              </motion.div>
            </>
          )}
          {columnIndex === 1 && (
            <>
              <motion.div variants={linkVariants} whileHover="hover">
                <Link href="/">All Products</Link>
              </motion.div>
              <motion.div variants={linkVariants} whileHover="hover">
                <Link href="/">New Arrivals</Link>
              </motion.div>
              <motion.div variants={linkVariants} whileHover="hover">
                <Link href="/">Best Sellers</Link>
              </motion.div>
              <motion.div variants={linkVariants} whileHover="hover">
                <Link href="/">Sale</Link>
              </motion.div>
            </>
          )}
          {columnIndex === 2 && (
            <>
              <motion.div variants={linkVariants} whileHover="hover">
                <Link href="/">About</Link>
              </motion.div>
              <motion.div variants={linkVariants} whileHover="hover">
                <Link href="/">Contact</Link>
              </motion.div>
              <motion.div variants={linkVariants} whileHover="hover">
                <Link href="/">Blog</Link>
              </motion.div>
              <motion.div variants={linkVariants} whileHover="hover">
                <Link href="/">Affiliate Program</Link>
              </motion.div>
            </>
          )}
        </motion.div>
      ))}
    </motion.div>
  )
}

export default Footer
