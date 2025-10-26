"use client"

import Image from "next/image"
import Link from "next/link"
import SearchBar from "@/companents/search"
import { Bell, Home } from "lucide-react"
import ShoppingCartIcon from "@/companents/Handbagicon"
import { motion } from "framer-motion"

const Navbar = () => {
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  const iconVariants = {
    hover: { scale: 1.2, rotate: 5 },
  }

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className="w-full flex items-center justify-between border-b border-gray-200 pb-4"
    >
      {/* LEFT */}
      <Link href="/" className="flex items-center">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Image src="/logo.png" alt="" width={500} height={800} className="w-15 h-15 md:w-18 md:h-18" />
        </motion.div>
      </Link>
      {/* RIGHT */}
      <div className="flex items-center gap-6">
        <SearchBar />
        <motion.div variants={iconVariants} whileHover="hover">
          <Link href="/">
            <Home className="w-4 h-4 text-gray-600" />
          </Link>
        </motion.div>
        <motion.div variants={iconVariants} whileHover="hover">
          <Bell className="w-4 h-4 text-gray-600" />
        </motion.div>
        <ShoppingCartIcon />
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link href="/login">Sign in</Link>
        </motion.div>
      </div>
    </motion.nav>
  )
}

export default Navbar
