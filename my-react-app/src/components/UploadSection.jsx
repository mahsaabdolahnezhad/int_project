import { FiUploadCloud } from "react-icons/fi";
import { MdContentCopy } from "react-icons/md";
import { FiDownload } from "react-icons/fi";
import { MdRestartAlt } from "react-icons/md";

function UploadSection({
  selectedFile,
  audioUrl,
  textTab,
  setTextTab,
  handleFileChange,
  handleRestart,
}) {
  return (
    <div className="text-center w-full px-10">

      {/* Hidden Input */}
      <input
        type="file"
        id="fileUpload"
        className="hidden"
        onChange={handleFileChange}
      />

      {/* If no file yet → upload UI */}
      {!selectedFile ? (
        <>
          <label htmlFor="fileUpload" className="cursor-pointer block">
            <div className="w-24 h-24 rounded-full bg-[#118AD3] flex items-center justify-center mx-auto">
              <FiUploadCloud className="text-5xl text-white" />
            </div>
          </label>

          <p className="mt-6 text-gray-500 leading-8 text-[15px]">
            برای بارگذاری فایل گفتاری
            <br />
            روی دکمه کلیک کنید
          </p>
        </>
      ) : (
        <>
          {/* Uploaded UI container */}
          <div className="w-full max-w-[560px] mx-auto">
            <div className="border rounded-2xl overflow-hidden">

              {/* Header */}
              <div className="flex flex-row-reverse justify-between items-center px-4 py-3 border-b">

                {/* Tabs */}
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

                {/* Actions */}
                <div className="flex flex-row-reverse items-center gap-3">

                  <button
                    onClick={handleRestart}
                    className="flex flex-row-reverse items-center gap-2 text-sm border border-[#118AD3] text-[#118AD3] px-3 py-1 rounded-full hover:bg-[#118AD3] hover:text-white transition"
                  >
                    <MdRestartAlt className="text-lg" />
                    <span>شروع دوباره</span>
                  </button>

                  <MdContentCopy
                    className="cursor-pointer text-[#118AD3] text-xl"
                    onClick={() =>
                      navigator.clipboard.writeText("این یک متن آزمایشی است")
                    }
                  />

                  <FiDownload className="cursor-pointer text-[#118AD3] text-xl" />
                </div>
              </div>

              {/* Text Area */}
              <div className="h-[180px] overflow-y-auto text-right p-4 leading-8 text-gray-700">
                {textTab === "simple" ? (
                  <>
                    این یک متن آزمایشی است.
                    <br />
                    این متن بعداً از API دریافت خواهد شد.
                    <br />
                    این فقط برای طراحی رابط کاربری است.
                  </>
                ) : (
                  <>
                    [00:00] این یک متن آزمایشی است.
                    <br />
                    [00:03] این متن بعداً از API دریافت خواهد شد.
                    <br />
                    [00:06] این فقط برای طراحی رابط کاربری است.
                  </>
                )}
              </div>
            </div>

            {/* Audio preview */}
            {audioUrl && (
              <div className="mt-6 max-w-[500px] mx-auto">
                <audio controls src={audioUrl} className="w-full" />
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default UploadSection;