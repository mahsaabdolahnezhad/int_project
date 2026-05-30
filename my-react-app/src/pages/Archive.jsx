function Archive() {
  return (
    <div className="mt-10">

      <h1 className="text-[18px] text-[#00BA9F] font-bold text-right p-9">
        آرشیو من
      </h1>


      <div className="mt-10 bg-white rounded-2xl p-8 max-w-[900px] mx-auto">

        <div className="grid grid-cols-4 text-[#8D8D8D] text-sm border-b pb-4">

        <span className="text-right">نام فایل</span>

        <span className="text-right">تاریخ بارگذاری</span>

        <span className="text-right">نوع فایل</span>

        <span className="text-right">مدت زمان</span>

        </div>
        
              <div className="grid grid-cols-4 items-center py-5 border-b text-sm">

    <span className="text-right text-[#444]">
        khaterate To
    </span>

    <span className="text-right text-gray-400">
        1400-08-20
    </span>

    <span className="text-right text-gray-400">
        mp3
    </span>

    <span className="text-right text-gray-400">
        4:29
    </span>

    </div>

      </div>

    </div>
  );
}

export default Archive;