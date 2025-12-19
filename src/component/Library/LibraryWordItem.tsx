import { useState } from "react";
import { WordType } from "../../store/useLibraryStore";

export default function LibraryWordItem({ item }: { item: WordType }) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleToggleBookmark = () => {
    setIsBookmarked((prev) => !prev);
  };

  return (
    <div
      className="
        bg-white
        rounded-xl
        px-4 py-4
        transition-all duration-200
        hover:border-[#1575FB]
        shadow-sm
        flex justify-between
        cursor-pointer
      "
    >
      {/* Left */}
      <div>
        {/* Title + Tag */}
        <div className="flex items-center gap-2">
          <p className="font-semibold text-[#1B1D1F]">{item.title}</p>

          <span className="text-xs rounded-full bg-[#F2F4F6] text-[#72787F] px-2 py-1">
            {item.tag}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-[#454C53] mt-2 leading-snug">
          {item.description}
        </p>
      </div>

      {/* Bookmark */}
      <button onClick={handleToggleBookmark} className="self-start">
        {isBookmarked ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#FFC445"
            viewBox="0 0 24 24"
            stroke="#FFC445"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M6.75 3.75h10.5c.414 0 .75.336.75.75v16.06c0 .62-.696.986-1.2.63L12 17.25l-4.8 3.94c-.504.355-1.2-.01-1.2-.63V4.5c0-.414.336-.75.75-.75z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#454C53"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M6.75 3.75h10.5c.414 0 .75.336.75.75v16.06c0 .62-.696.986-1.2.63L12 17.25l-4.8 3.94c-.504.355-1.2-.01-1.2-.63V4.5c0-.414.336-.75.75-.75z"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
