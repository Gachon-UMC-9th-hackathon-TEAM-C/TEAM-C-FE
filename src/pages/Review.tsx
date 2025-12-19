import { useNavigate } from "react-router-dom";
import time from "../assets/time.svg"

const Review = () => {
    const navigate = useNavigate();

  const reviewTerms = [
    { id: 1, category: '물가', title: '인플레이션' },
    { id: 2, category: '물가', title: '디플레이션' },
  ];

  return (
    <div className="flex flex-col w-full items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-xl space-y-6">
        
        {/* 상단 메인 카드 */}
        <div className="rounded-3xl p-8 relative shadow-sm bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-secondary-6)]">
          <div className="absolute top-6 right-6 bg-primary-3 text-white text-medium-15 text-[12px] px-3 py-1 rounded-full">
            진행전
          </div>
          
          <div className="space-y-1 mb-15">
            <p className="text-primary-6 text-medium-15 font-semibold">복습이 필요해요</p>
            <h2 className="text-medium-18 font-bold text-gray-1">
              2개 용어를 다시 확인해보세요.
            </h2>
          </div>

          <div className="bg-secondary-4 rounded-2xl p-6 flex">
            <p className="text-lg font-bold text-gray-700">
              <span className="text-primary text-semibold-24">2개</span> 
              <span className="text-gray-3 text-medium-18 font-bold"> 복습대기 중</span>
            </p>
          </div>
        </div>

        {/* 용어 리스트 섹션 */}
        <div className="space-y-4">
          <h3 className="text-medium-15 font-bold text-gray-1 ml-2">복습 용어</h3>
          
          {reviewTerms.map((term) => (
            <div 
              key={term.id} 
              className="bg-white rounded-2xl p-5 flex justify-between items-center shadow-md shadow-blue-100 border border-gray-100"
            >
              <div className="flex flex-col gap-2">
                <span className="bg-secondary-5 text-primary-6 text-[10px] text-semibold-20 px-2 py-0.5 rounded-2xl w-fit">
                  {term.category}
                </span>
                <span className="text-medium-15 font-bold text-gray-1">{term.title}</span>
              </div>
              <button className="text-primary-2 text-semibold-20 text-[12px]">
                복습필요
              </button>
            </div>
          ))}
        </div>

        {/* 하단 버튼 섹션 */}
        <div className="pt-4 space-y-4">
          <button
            onClick={() => navigate("/reviewcard")}
            className="w-full py-4 text-medium-15 font-bold text-gray-1 py-4 rounded-2xl shadow-md bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-secondary-6)] transition-all duration-150 ease-out active:scale-[0.97] active:shadow-sm cursor-pointer">
              복습 시작
          </button>
          
          <div className="flex items-center justify-center gap-1.5 text-gray-500 text-sm">
            <span className="material-icons-outlined text-base">
                <img src={time} className="w-4 h-4"/>
            </span>
            <p>예상 소요시간: 약 2분</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Review;