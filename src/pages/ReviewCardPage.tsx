import { useState } from "react";
import Header from "../component/common/Header";
import FlipCard from "../component/FlipCard";

const ReviewCardPage = () => {
  const [index, setIndex] = useState(1); // 시작은 1
  // ▼ 여기를 5에서 2로 변경했습니다.
  const total = 2; 
  
  // 계산 로직: (1 / 2) * 100 = 50% 가 됨
  const progress = Math.round((index / total) * 100);

  // 현재 카드의 데이터 (나중에 배열로 관리할 때를 대비해 변수로 뺌)
  const currentCard = {
    tag: "물가",
    title: "인플레이션",
    description: "물가가 지속적으로 상승하는 현상",
    example: "같은 돈으로 살 수 있는 물건이 줄어드는 것" // ✅ 예문 데이터
  };

  // 다음 버튼 눌렀을 때 처리 (예문 닫기 + 인덱스 증가)
  const handleNext = () => {
    setIndex((v) => Math.min(total, v + 1));
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col items-center">
      
      {/* 1. 헤더 */}
      <Header>
        <div className="relative flex flex-col w-full max-w-2xl px-10 pt-3 pb-5 gap-3 mx-auto">
          
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
      <main className="w-full h-full max-w-2xl flex flex-col pb-7 m-19">
        
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
      </main>

      {/* 3. 하단 고정 푸터 */}
      <footer className="left-0 w-full flex justify-center bg-white border-t-2 border-gray-100 py-6 z-[999]">
        {/* gap-4 -> gap-10 : 버튼 사이 간격을 넓힘
            (gap-6, gap-8, gap-12 등으로 조절 가능)
        */}
        <div className="w-full max-w-xl flex justify-end flex ">
          <button
            onClick={index === total ? () => console.log("복습 완료!") : handleNext}
            className="w-45 h-14 rounded-2xl bg-primary text-gray-10 text-medium-18 shadow-lg transition-transform active:scale-95 hover:brightness-95"
          >
            {/* index가 total(5)이면 '학습 완료', 아니면 '다음' */}
            {index === total ? "복습 완료" : "다음"}
          </button>
        </div>
      </footer>

    </div>
  );
};

export default ReviewCardPage;