import { useMemo, useState } from "react";
import Header from "../component/common/Header";
import FlipCard from "../component/FlipCard";

const CardLearningPage = () => {
  const [index, setIndex] = useState(1);
  const [showExample, setShowExample] = useState(false); // ✅ 예문 보기 상태 추가
  const total = 5;
  const progress = Math.round((index / total) * 100);

  const related = useMemo(() => ["연관용어", "연관용어", "연관용어"], []);

  // 현재 카드의 데이터 (나중에 배열로 관리할 때를 대비해 변수로 뺌)
  const currentCard = {
    tag: "물가",
    title: "인플레이션",
    description: "물가가 지속적으로 상승하는 현상",
    example: "같은 돈으로 살 수 있는 물건이 줄어드는 것" // ✅ 예문 데이터
  };

  // 다음 버튼 눌렀을 때 처리 (예문 닫기 + 인덱스 증가)
  const handleNext = () => {
    setShowExample(false); // 다음 카드로 가면 예문 다시 닫기
    setIndex((v) => Math.min(total, v + 1));
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col items-center">
      
      {/* 1. 헤더 */}
      <Header>
        <div className="flex flex-col w-full max-w-2xl px-10 gap-3 mx-auto pb-10">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-1">
              <button aria-label="닫기" className="grid h-8 w-8 place-items-center rounded-full hover:bg-black/5">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M17 17L1 1M17 1L1 17" stroke="#72787F" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
              <div className="text-lg font-medium text-primary">{index}/{total}</div>
            </div>
            <div className="text-lg font-bold text-primary">{progress}%</div>
          </div>
          <div className="w-full bg-blue-100 h-2.5 rounded-full overflow-hidden">
            <div 
              className="bg-blue-500 h-full rounded-full transition-all duration-300" 
              style={{ width: `${progress}%` }} 
            />
          </div>
        </div>
      </Header>

      {/* 2. 메인 컨텐츠 */}
      <main className="w-full max-w-2xl flex flex-col gap-8 pb-40">
        
        {/* 카드 섹션 */}
        <div className="relative px-10 flex justify-center w-full mt-8">
          <FlipCard 
            tag={currentCard.tag}
            title={currentCard.title}
            description={currentCard.description}
            example={currentCard.example}
            onTap={() => console.log("뒤집기!")}
          />
        </div>

        {/* ✅ 예문보기 섹션 (수정됨) */}
        <div className="px-10 flex justify-center w-full min-h-[60px]">
          {!showExample ? (
            // [상태 1] 버튼이 보일 때
            <button 
              onClick={() => setShowExample(true)} 
              className="flex items-center gap-2 py-2 px-4 rounded-full hover:bg-blue-50 transition-colors"
            >
              <span className="text-blue-600 font-bold">▶</span>
              <span className="text-sm font-bold text-blue-600">예문보기</span>
            </button>
          ) : (
            // [상태 2] 버튼 누른 후 -> 예문 박스 등장
            <div className="w-full rounded-xl bg-[#F0F6FF] border border-[#DCE6FF] py-4 px-6 text-center animate-fadeIn">
              <p className="text-[#5474FF] font-medium text-sm break-keep">
                <span className="font-bold mr-2">예문</span>
                {currentCard.example}
              </p>
            </div>
          )}
        </div>

        {/* 연관용어 섹션 */}
        <div className="w-full px-10 mt-2">
          <div className="text-sm font-bold text-gray-500 mb-4 text-left">
            연관용어
          </div>
          <div className="flex flex-wrap gap-2">
            {related.map((word, i) => (
              <button
                key={i}
                className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-gray-600 shadow-sm border border-gray-6 hover:bg-gray-50"
              >
                {word}
              </button>
            ))}
          </div>
        </div>
      </main>

      {/* 3. 하단 고정 푸터 */}
      <footer className="fixed bottom-0 left-0 w-full flex justify-center bg-white border-t-2 border-gray-100 py-6 z-[999]">
        <div className="w-full max-w-2xl px-10 flex gap-4">
          <button
            style={{ backgroundColor: "#FDF2D7", color: "#EEBC31" }}
            className="flex-1 h-14 rounded-[56px] font-extrabold text-lg transition-transform active:scale-95 hover:brightness-95"
          >
            모르겠어요
          </button>

          <button
            onClick={handleNext} // ✅ 다음 버튼 누르면 예문도 닫히도록 수정
            style={{ backgroundColor: "#5474FF", color: "#FFFFFF" }}
            className="flex-1 h-14 rounded-2xl font-extrabold text-lg shadow-lg shadow-blue-100 transition-transform active:scale-95 hover:brightness-95"
          >
            다음
          </button>
        </div>
      </footer>

    </div>
  );
};

export default CardLearningPage;