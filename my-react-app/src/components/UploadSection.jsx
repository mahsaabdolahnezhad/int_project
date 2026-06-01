import { MdContentCopy } from "react-icons/md";
import { FiDownload } from "react-icons/fi";
import { MdRestartAlt } from "react-icons/md";
import { useRef } from "react";

function UploadSection({
  textTab,
  setTextTab,
  handleRestart,
  requestData,
  loading,
   showRestart = true,
}){

  const audioRef = useRef(null);

const handleSegmentClick = async (startTime) => {
  if (!audioRef.current) return;

  audioRef.current.currentTime = startTime;

  try {
    await audioRef.current.play();
  } catch (err) {
    console.log("Play blocked:", err);
  }
};;

const timeToSeconds = (timeString) => {
  const [h, m, s] = timeString.split(":");

  return (
    Number(h) * 3600 +
    Number(m) * 60 +
    parseFloat(s)
  );
};

  const simpleText =
    requestData?.segments
      ?.filter((s) => s.text?.trim())
      .map((s) => s.text)
      .join(" ") || "";


console.log("UPLOAD DATA", requestData);

  return (

    
    <div className="text-center w-full px-10">
      <div className="w-full max-w-[560px] mx-auto">
        <div className="border rounded-2xl overflow-hidden">

          {requestData?.filename && (
            <div className="px-4 py-3 border-b text-right text-sm text-gray-500">
              {requestData.filename}
            </div>
          )}
           
          {/* Header */}
          <div className="flex flex-row-reverse justify-between items-center px-4 py-3 border-b">

            <div className="flex flex-row-reverse gap-2">
              <button
                onClick={() => setTextTab("simple")}
                className={`px-4 py-1 rounded-full ${
                  textTab === "simple"
                    ? "bg-[#118AD3] text-white"
                    : "text-gray-500"
                }`}
              >
                متن ساده
              </button>

              <button
                onClick={() => setTextTab("timed")}
                className={`px-4 py-1 rounded-full ${
                  textTab === "timed"
                    ? "bg-[#118AD3] text-white"
                    : "text-gray-500"
                }`}
              >
                متن زمان بندی شده
              </button>
            </div>

            <div className="flex flex-row-reverse items-center gap-3">
              {showRestart && (
              <button
                onClick={handleRestart}
                className="flex flex-row-reverse items-center gap-2 text-sm border border-[#118AD3] text-[#118AD3] px-3 py-1 rounded-full hover:bg-[#118AD3] hover:text-white transition"
              >
                <MdRestartAlt className="text-lg" />
                <span>شروع دوباره</span>
              </button>
              )}

              <MdContentCopy
                className="cursor-pointer text-[#118AD3] text-xl"
                onClick={() => navigator.clipboard.writeText(simpleText)}
              />

              <FiDownload className="cursor-pointer text-[#118AD3] text-xl" />
            </div>
          </div>

          {/* Text Area */}
          <div className="h-[180px] overflow-y-auto text-right p-4 text-gray-700">

            {loading ? (
              <div className="text-center py-8">
                در حال بارگذاری...
              </div>
            ) : textTab === "simple" ? (

              <div className="leading-8">
                {simpleText || "متنی دریافت نشده است"}
              </div>

            ) : (

              <div className="space-y-2">

                {requestData?.segments?.map((segment, index) => (

                 <button
                  key={index}
                  onClick={() =>
                    handleSegmentClick(timeToSeconds(segment.start))
                  }
                  className="w-full bg-gray-50 hover:bg-gray-100 rounded-xl px-4 py-3 flex flex-row-reverse items-center justify-between transition"
                >
                    <div className="text-xs text-[#118AD3] min-w-[70px]">
                      {segment.start}
                    </div>

                    <div className="flex-1 text-center text-sm text-gray-700">
                      {segment.text?.trim() || "[--]"}
                    </div>

                    <div className="text-xs text-gray-400 min-w-[70px]">
                      {segment.end}
                    </div>
                  </button>

                ))}

              </div>

            )}
          </div>
          
          </div>

           {requestData?.media_url && (
            <div className="mt-6 max-w-[600px] mx-auto">
            <audio
            ref={audioRef}
            controls
            src={requestData?.url}
          />
            </div>
          )}

      </div>
      
    </div>
  );
}

export default UploadSection;