import { useState } from "react";

const FlipCard = ({ 
  tag = "물가", 
  title = "인플레이션", 
  description = "물가가 지속적으로 상승하는 현상", 
  example = "같은 돈으로 살 수 있는 물건이 줄어드는 것" 
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="h-[360px] w-full max-w-[430px] [perspective:1000px]">
      <div
        onClick={handleFlip}
        className={`relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] cursor-pointer ${
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* ================= 앞면 (파란색 그라데이션) ================= */}
        <div className="absolute inset-0 h-full w-full rounded-[34px] overflow-hidden shadow-[0_14px_40px_rgba(20,35,120,0.18)] [backface-visibility:hidden]">
          {/* 배경 */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#7F9BFF] via-[#5474FF] to-[#3B58FF]" />

          {/* 내용 */}
          <div className="relative z-10 flex h-full flex-col items-center justify-center text-white gap-4">
            <span className="inline-block rounded-full bg-white/20 px-4 py-1 text-sm font-semibold backdrop-blur-sm">
              {tag}
            </span>

            <div className="mt-4 text-3xl font-bold tracking-tight">
              {title}
            </div>

            <div className="mt-6 flex flex-col items-center opacity-90">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6V12H14" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C14.045 4 15.9084 4.7679 17.3431 6.03125" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <div className="mt-2 text-sm font-medium opacity-80">
              탭하여 뒤집기
            </div>
          </div>
        </div>

        {/* ================= 뒷면 (흰색 배경) ================= */}
        <div 
          className="absolute inset-0 h-full w-full rounded-[34px] bg-white shadow-[0_14px_40px_rgba(0,0,0,0.1)] [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col items-center justify-center px-8 text-center border-2 border-blue-50"
        >
          {/* 태그 (연한 파란색) */}
          <span className="mb-4 inline-block rounded-full bg-[#EBF2FF] px-4 py-1 text-sm font-bold text-[#5474FF]">
            {tag}
          </span>

          {/* 제목 */}
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {title}
          </h2>

          {/* 설명 (회색 텍스트) */}
          <p className="text-gray-500 font-medium mb-8">
            {description}
          </p>

          {/* 예시 박스 (사진처럼 파란 테두리 박스) */}
          <div className="w-full rounded-xl bg-[#F5F8FF] border border-[#Dceaff] py-4 px-4">
            <p className="text-[#5474FF] font-semibold text-sm break-keep leading-relaxed">
              {example}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FlipCard;