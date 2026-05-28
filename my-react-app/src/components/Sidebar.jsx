import { useState } from "react";
import { HiMiniMicrophone } from "react-icons/hi2";
import { MdArchive } from "react-icons/md";
import { LuAudioLines } from "react-icons/lu";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
    const location = useLocation();


  return (
    <aside className="w-[230px] h-screen bg-teal-500 text-white p-6 overflow-hidden">

      <div className="flex flex-row-reverse items-center justify-center gap-2 mt-10 mb-16">

        <LuAudioLines className="text-s mb-2" />

        <h1 className="text-2xl font-bold">
            آوا
        </h1>

        </div>

      <nav className="flex flex-col gap-4">

      <Link
        to="/"
        className={`flex flex-row-reverse items-center gap-2 rounded-lg p-3 text-right transition ${
          location.pathname === "/"
            ? "bg-[#02816E]"
            : "hover:bg-white/10"
        }`}
      >
        <HiMiniMicrophone />

        <span>تبدیل گفتار</span>
      </Link>

     <Link
      to="/archive"
      className={`flex flex-row-reverse items-center gap-2 rounded-lg p-3 text-right transition ${
        location.pathname === "/archive"
          ? "bg-[#02816E]"
          : "hover:bg-white/10"
      }`}
    >
      <MdArchive />

      <span>آرشیو</span>
    </Link>

      </nav>
      

    </aside>
  );
}

export default Sidebar;