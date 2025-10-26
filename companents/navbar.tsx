import Image from "next/image";
import Link from "next/link";
import SearchBar from "@/companents/search";
import { Bell, Home, ShoppingCart } from "lucide-react";
import ShoppingCartIcon from "@/companents/Handbagicon";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between border-b border-gray-200 pb-4">
      {/* LEFT */}
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.png"
          alt=""
          width={500}
          height={800}
          className="w-15 h-15 md:w-18 md:h-18"
        />
        {/* <p className="hidden md:block text-md font-medium tracking-wider">
          ALCO
        </p> */}
      </Link>
      {/* RIGHT */}
      <div className="flex items-center gap-6">
        <SearchBar />
        <Link href="/">
          <Home className="w-4 h-4 text-gray-600" />
        </Link>
        <Bell className="w-4 h-4 text-gray-600" />
        <ShoppingCartIcon />
        <Link href="/login">Sign in</Link>
      </div>
    </nav>
  );
};

export default Navbar;
