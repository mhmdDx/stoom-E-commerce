"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Filter = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    return (

         <div  className="flex items-center gap-4 text-md justify-end">
            <span className="text-gray-400">Sort by</span>
            <select name="sort" id="sort" className="ring ring-gray-300 rounded-md px-2 py-1">
                <option value="newest">Newest</option>
                <option value="asc">Price (asc)</option>
                <option value="desc">Price (desc)</option>    
            </select>
         </div>

    )
}
export default Filter;