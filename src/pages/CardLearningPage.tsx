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
        <div className="relative flex flex-col w-full max-w-2xl px-10 pt-3 pb-5 gap-3 mx-auto">
          <button aria-label="닫기" className="absolute top-2 left-0 h-8 w-8 place-items-center rounded-full hover:bg-black/5">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M17 17L1 1M17 1L1 17" stroke="#72787F" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-3">
              
              <div className="h-6 text-medium-18 text-primary-6">{index}/{total}</div>
            </div>
            <div className="h-5.5 text-medium-18 text-primary-6">{progress}%</div>
          </div>
          <div className="w-full bg-primary-3 h-3 rounded-full overflow-hidden">
            <div 
              className="bg-secondary h-full rounded-full transition-all duration-300" 
              style={{ width: `${progress}%` }} 
            />
          </div>
        </div>
      </Header>

      {/* 2. 메인 컨텐츠 */}
      <main className="w-full max-w-2xl flex flex-col pb-7">
        
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
        <div className="px-10 mt-8 flex justify-center w-full min-h-[45px]">
          {!showExample ? (
            // [상태 1] 버튼이 보일 때
            <button 
              onClick={() => setShowExample(true)} 
              className="flex items-center gap-2 py-2 px-4 rounded-full hover:bg-blue-50 transition-colors"
            >
              <span className="text-primary-2 text-medium-18">▶ 예문보기</span>
            </button>
          ) : (
            // [상태 2] 버튼 누른 후 -> 예문 박스 등장
            <div className="w-full rounded-xl bg-primary-5 border border-primary-4 py-4 px-6 text-center animate-fadeIn">
              <p className="flex text-gray-3 text-medium-15 break-keep">
                {currentCard.example}
              </p>
            </div>
          )}
        </div>

        {/* 연관용어 섹션 */}
        <div className="w-full px-10 mt-3">
          <div className="text-medium-15 text-gray-3 mb-2 text-left">
            연관용어
          </div>
          <div className="flex flex-wrap gap-2">
            {related.map((word, i) => (
              <button
                key={i}
                className="rounded-full bg-white px-5 py-1 text-medium-15 text-gray-2 border border-gray-7 hover:bg-gray-50"
              >
                {word}
              </button>
            ))}
          </div>
        </div>
      </main>

      {/* 3. 하단 고정 푸터 */}
      <footer className="left-0 w-full flex justify-center bg-white border-t-2 border-gray-100 py-6 z-[999]">
        {/* gap-4 -> gap-10 : 버튼 사이 간격을 넓힘
            (gap-6, gap-8, gap-12 등으로 조절 가능)
        */}
        <div className="w-full max-w-xl flex justify-between flex ">
          <button
            onClick={handleNext}
            className="w-45 h-14 rounded-2xl bg-secondary-5 text-secondary-6 text-medium-18 shadow-lg transition-transform active:scale-95 hover:brightness-95"
          >
            모르겠어요
          </button>

          <button
            onClick={index === total ? () => console.log("학습 완료!") : handleNext}
            className="w-45 h-14 rounded-2xl bg-primary text-gray-10 text-medium-18 shadow-lg transition-transform active:scale-95 hover:brightness-95"
          >
            {/* index가 total(5)이면 '학습 완료', 아니면 '다음' */}
            {index === total ? "학습 완료" : "다음"}
          </button>
        </div>
      </footer>

    </div>
  );
};

export default CardLearningPage;