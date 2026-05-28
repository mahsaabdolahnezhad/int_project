import { useState } from "react";

import { MdKeyboardVoice } from "react-icons/md";
import { FiUploadCloud } from "react-icons/fi";
import { LuLink } from "react-icons/lu";


function TabdilGoftar() {
    const [activeTab, setActiveTab] = useState("record");

    
  return (
    <div className="text-center mt-6">

      <h1 className="text-[31px] text-[#00BA9F] font-bold">
        تبدیل گفتار به متن
      </h1>

      <h2 className="text-[16px] text-[#969696] mt-4 leading-8">
        آوا با استفاده از هزاران ساعت گفتار با صدای افراد مختلف،
        زبان فارسی را یاد گرفته است و می‌تواند متن صحبت‌ها را بنویسد.
      </h2>

     <div
  className={`mt-10 bg-white rounded-2xl border-2 max-w-[653px] mx-auto overflow-hidden transition-all duration-300 ${
    activeTab === "record"
      ? "border-[#10B7A3]"
      : activeTab === "upload"
      ? "border-[#118AD3]"
      : "border-[#FF1654]"
  }`}
>
  {/* Tabs */}

  <div className="flex flex-row-reverse border-b border-[#B7ECE5]">

    {/* Record */}

    <button
      onClick={() => setActiveTab("record")}
      className={`flex flex-row-reverse items-center gap-2 px-6 py-4 transition ${
        activeTab === "record"
          ? "bg-[#10B7A3] text-white"
          : "text-gray-400"
      }`}
    >
      <MdKeyboardVoice className="text-xl" />

      <span>ضبط صدا</span>
    </button>

    {/* Upload */}

    <button
      onClick={() => setActiveTab("upload")}
      className={`flex flex-row-reverse items-center gap-2 px-6 py-4 transition ${
        activeTab === "upload"
          ? "bg-[#118AD3] text-white"
          : "text-gray-400"
      }`}
    >
      <FiUploadCloud className="text-xl" />

      <span>بارگذاری فایل</span>
    </button>

    {/* Link */}

    <button
      onClick={() => setActiveTab("link")}
      className={`flex flex-row-reverse items-center gap-2 px-6 py-4 transition ${
        activeTab === "link"
          ? "bg-[#FF1654] text-white"
          : "text-gray-400"
      }`}
    >
      <LuLink className="text-xl" />

      <span>لینک</span>
    </button>

  </div>

  {/* Content Area */}

  <div className="w-full h-[340px] flex flex-col items-center justify-center">

    {activeTab === "record" && (
      <div className="text-center">

        <div className="w-24 h-24 rounded-full bg-[#10B7A3] flex items-center justify-center mx-auto">

        <MdKeyboardVoice className="w-10 h-10 text-5xl text-white" />

        </div>

        <p className="mt-6 text-gray-500 leading-8 text-[15px]">
          برای شروع به صحبت‌،دکمه را فشار دهید
          <br />
          متن پیاده شده آن، اینجا ظاهر شود
        </p>

      </div>
    )}

    {activeTab === "upload" && (
      <div className="text-center">

          <div className="w-24 h-24 rounded-full bg-[#118AD3] flex items-center justify-center mx-auto">

            <FiUploadCloud className="text-5xl text-white" />

          </div>

        <p className="mt-6 text-gray-500 leading-8 text-[15px]">
          برای بارگذاری فایل گفتاری (صوتی/تصویری)،
          <br/> دکمه را فشار دهید
          متن پیاده شده آن، در اینجا ظاهر می شود   
        </p>

      </div>
    )}

    {activeTab === "link" && (
     <div className="text-center w-full px-10">

  <div className="w-24 h-24 rounded-full bg-[#FF1654] flex items-center justify-center mx-auto">

    <LuLink className="text-5xl text-white" />

  </div>

 

  {/* Link Input */}

  <div className="mt-8 relative max-w-[420px] mx-auto">

    <LuLink className="absolute left-4 top-1/2 -translate-y-1/2 text-[#FF1654] text-xl" />

    <input
      type="text"
      placeholder="https://example.com/audio"
      className="w-full border-2 border-[#FF1654] rounded-full py-3 pr-4 pl-12 outline-none text-center"
    />

  </div>

   <p className="mt-6 text-gray-500 leading-8 text-[15px]">
    نشانی اینترنتی فایل حاوی گفتار (صوتی/تصویری) را وارد
و دکمه را فشار دهید
  </p>

</div>
    )}

  </div>


</div>

<div className="mt-4 flex flex-row-reverse items-center justify-center gap-3 ">

  <span className="text-[#969696] text-sm">
    زبان گفتار:
  </span>

  <div className="relative">

    <select
      className="appearance-none border border-[#10B7A3] rounded-full px-10 py-2 text-[#10B7A3] outline-none bg-white text-sm"
    >
      <option>فارسی</option>
      <option>English</option>
    </select>

    <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#10B7A3]">
      ▼
    </div>

  </div>

</div>

    </div>
  );
}

export default TabdilGoftar;