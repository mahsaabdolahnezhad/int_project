import { useState } from "react";
import { FaRegUser } from "react-icons/fa";

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
          <div className="absolute mt-2 bg-white border border-gray-200 rounded-2xl shadow-md w-full overflow-hidden">


          </div>
        )}

      </div>

    </div>
  );
}

export default TopBar;