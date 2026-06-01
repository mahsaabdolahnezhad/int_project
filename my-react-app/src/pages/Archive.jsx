import { useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";

import UploadSection from "../components/UploadSection";
import { deleteRequest } from "../api/transcribe";
import { deleteRequestFromStore } from "../store/requestSlice";

import { MdContentCopy } from "react-icons/md";
import { FiDownload } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { FaFileWord } from "react-icons/fa";

function Archive() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [textTab, setTextTab] = useState("simple");

  const itemsPerPage = 5;
  const dispatch = useDispatch();

  // Global archive state (Redux)
  const requests = useSelector((state) => state.requests.requests);

  // Pagination logic
  const totalPages = Math.ceil(requests.length / itemsPerPage);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return requests.slice(start, end);
  }, [requests, currentPage]);

  const goNext = () => {
    if (currentPage < totalPages) setCurrentPage((p) => p + 1);
  };

  const goPrev = () => {
    if (currentPage > 1) setCurrentPage((p) => p - 1);
  };

  // Delete request (API + Redux sync)
  const handleDelete = async (id) => {
    const confirmed = window.confirm("آیا از حذف این فایل مطمئن هستید؟");
    if (!confirmed) return;

    try {
      await deleteRequest(id);
      dispatch(deleteRequestFromStore(id));

      // close preview if deleted item was open
      if (selectedRequest?.id === id) {
        setSelectedRequest(null);
      }
    } catch (error) {
      console.error(error);
      alert("خطا در حذف فایل");
    }
  };

  // Copy full transcript text
  const handleCopy = async (item) => {
    const text =
      item.segments
        ?.filter((s) => s.text?.trim())
        .map((s) => s.text)
        .join(" ") || "";

    try {
      await navigator.clipboard.writeText(text);
      alert("متن کپی شد");
    } catch (error) {
      console.error(error);
      alert("خطا در کپی متن");
    }
  };

  return (
    <div className="mt-10">
      <h1 className="text-[18px] text-[#00BA9F] font-bold text-right p-9">
        آرشیو من
      </h1>

      <div className="mt-10 bg-white rounded-2xl p-8 max-w-[900px] mx-auto">

        {/* Table Header */}
        <div className="grid grid-cols-5 text-[#8D8D8D] text-sm border-b pb-4">
          <span className="text-right">نام فایل</span>
          <span className="text-right">تاریخ بارگذاری</span>
          <span className="text-right">نوع فایل</span>
          <span className="text-right">مدت زمان</span>
          <span className="text-right">عملیات</span>
        </div>

        {/* Table Rows */}
        {paginatedData.map((item) => (
          <div key={item.id}>
            {/* Row */}
            <div
              onClick={() =>
                setSelectedRequest(
                  selectedRequest?.id === item.id ? null : item
                )
              }
              className={`grid grid-cols-5 items-center py-5 border-b text-sm cursor-pointer ${
                selectedRequest?.id === item.id
                  ? "bg-blue-50"
                  : "hover:bg-gray-50"
              }`}
            >
              <span className="text-right text-[#444]">
                {item.filename || "بدون نام"}
              </span>

              <span className="text-right text-gray-400">
                {item.processed?.split("T")[0] || "-"}
              </span>

              <span className="text-right text-gray-400">
                {item.filename?.split(".").pop() || "-"}
              </span>

              <span className="text-right text-gray-400">
                {item.duration || "-"}
              </span>

              {/* Actions */}
              <div
                className="flex justify-end items-center gap-4 text-lg"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Copy text */}
                <button
                  onClick={() => handleCopy(item)}
                  className="hover:text-[#118AD3]"
                >
                  <MdContentCopy />
                </button>

                {/* Export text */}
                <button
                  onClick={() => {
                    const text =
                      item.segments
                        ?.map((s) => s.text)
                        .join(" ") || "";

                    const blob = new Blob([text], {
                      type: "text/plain;charset=utf-8",
                    });

                    const url = URL.createObjectURL(blob);

                    const link = document.createElement("a");
                    link.href = url;
                    link.download = `${item.filename}.txt`;

                    link.click();

                    URL.revokeObjectURL(url);
                  }}
                >
                  <FaFileWord />
                </button>

                {/* Download media */}
                <button
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = item.url;
                    link.download = item.filename;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  <FiDownload />
                </button>

                {/* Delete */}
                <button
                  onClick={() => handleDelete(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <MdDeleteOutline />
                </button>
              </div>
            </div>

            {/* Expandable Upload Preview */}
            {selectedRequest?.id === item.id && (
              <div className="bg-gray-50 rounded-xl my-4 p-6">
                <UploadSection
                  textTab={textTab}
                  setTextTab={setTextTab}
                  requestData={item}
                  loading={false}
                  handleRestart={() => {}}
                  showRestart={false}
                />
              </div>
            )}
          </div>
        ))}

        {/* Pagination */}
        <div className="flex justify-center items-center gap-4 mt-6">
          <button
            onClick={goPrev}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded-lg border disabled:opacity-40"
          >
            قبلی
          </button>

          <span className="text-sm text-gray-600">
            صفحه {currentPage} از {totalPages || 1}
          </span>

          <button
            onClick={goNext}
            disabled={currentPage === totalPages}
            className="px-3 py-1 rounded-lg border disabled:opacity-40"
          >
            بعدی
          </button>
        </div>

      </div>
    </div>
  );
}

export default Archive;