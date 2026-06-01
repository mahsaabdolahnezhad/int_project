import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { MdLogout } from "react-icons/md";

function TopBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-start">

      <div className="relative">

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-row-reverse border-2 border-[#00BA9F] text-[#00BA9F] rounded-full px-3 py-1 flex items-center gap-2 bg-white"
        >
             <FaRegUser />
          <span>مهمان</span>

          <span className="text-xs">{isOpen ? "▲" : "▼"}</span>
        </button>

       {isOpen && (
  <div className="absolute mt-2 w-full bg-white border border-[#00BA9F] rounded-2xl shadow-md overflow-hidden p-0">

    {/* logout row FIRST (no separator needed) */}
    <div
      onClick={() => {
        setIsOpen(false);
        // handle logout logic here
      }}
      className="flex items-center justify-between px-4 py-2 text-[#00BA9F] cursor-pointer hover:bg-[#00BA9F]/10 leading-none"
    >
      <span className="leading-none">خروج</span>
      <MdLogout className="shrink-0" />
    </div>

  </div>
)}

      </div>

    </div>
  );
}

export default TopBar;