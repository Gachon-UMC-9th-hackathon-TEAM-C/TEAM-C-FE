import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../services/axiosInstance";
import time from "../assets/time.svg"

// API 응답 타입
interface ReviewCard {
  term: string;
  category: "INTEREST_RATE" | "INFLATION" | "INVESTMENT" | "FISCAL";
}

interface ReviewPageResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result: {
    totalReviewCount: number;
    reviewCardList: ReviewCard[];
    estimatedDurationMinutes: number;
  };
}

// 카테고리 한국어 매핑
const categoryMap: Record<string, string> = {
  INTEREST_RATE: "금리",
  INFLATION: "물가",
  INVESTMENT: "투자",
  FISCAL: "재정"
};

const Review = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [reviewData, setReviewData] = useState<ReviewPageResponse["result"] | null>(null);

  useEffect(() => {
    const fetchReviewData = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get<ReviewPageResponse>("/api/review");
        
        if (response.data.isSuccess && response.data.result) {
          setReviewData(response.data.result);
        } else {
          setError("데이터를 불러오는데 실패했습니다.");
        }
      } catch (err: any) {
        console.error("Review API 호출 실패:", err);
        setError(err.message || "복습 데이터를 불러오는데 실패했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchReviewData();
  }, []);

  if (loading) {
    return (
      <div className="flex w-full h-screen items-center justify-center">
        <div className="text-gray-9 text-medium-18">로딩 중...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex w-full h-screen items-center justify-center">
        <div className="text-red-500 text-medium-18">{error}</div>
      </div>
    );
  }

  if (!reviewData) {
    return (
      <div className="flex w-full h-screen items-center justify-center">
        <div className="text-gray-9 text-medium-18">데이터가 없습니다.</div>
      </div>
    );
  }

  const reviewTerms = reviewData.reviewCardList.map((card, index) => ({
    id: index + 1,
    category: categoryMap[card.category] || card.category,
    title: card.term
  }));

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
              {reviewData.totalReviewCount}개 용어를 다시 확인해보세요.
            </h2>
          </div>

          <div className="bg-secondary-4 rounded-2xl p-6 flex">
            <p className="text-lg font-bold text-gray-700">
              <span className="text-primary text-semibold-24">{reviewData.totalReviewCount}개</span> 
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
            className="w-full py-4 text-medium-15 font-bold text-gray-1 rounded-2xl shadow-md bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-secondary-6)] transition-all duration-150 ease-out active:scale-[0.97] active:shadow-sm cursor-pointer">
              복습 시작
          </button>
          
          <div className="flex items-center justify-center gap-1.5 text-gray-500 text-sm">
            <span className="material-icons-outlined text-base">
                <img src={time} className="w-4 h-4"/>
            </span>
            <p>예상 소요시간: 약 {reviewData.estimatedDurationMinutes}분</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Review;