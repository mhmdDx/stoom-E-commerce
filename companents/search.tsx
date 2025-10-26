import { Search, Home , Handbag ,Bell} from "lucide-react";
import Link from "next/link";

const search = () => {
  return (
    <div className="flex flex-row items-center sm:gap-3 xl:gap-6">
      <div className="flex flex-row items-center gap-5 border-2 rounded-md p-2 border-[#eee] hidden sm:flex">
        <Search className="w-3 h-3 text-gray-300" />
        <input type="text" placeholder="search" className="border-gray-100 focus:outline-hidden sm:w-20 xl:w-40 h-5 " />
      </div>
      <div className="flex flex-row items-center gap-4 sm:gap-6  ">

        
      </div>
    </div>
  );
};
export default search;