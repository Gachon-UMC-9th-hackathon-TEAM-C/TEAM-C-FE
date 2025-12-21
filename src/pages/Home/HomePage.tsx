import UserHeader from "../../component/Home/UserHeader/UserHeader";
import TodayLearningCard from "../../component/Home/TodayLearningCard/TodayLearningCard";
import ReviewCard from "../../component/Home/ReviewCard/ReviewCard";
import Tag from "../../component/common/Tag";
import cardIcon from "../../assets/icons/card.png";

const HomePage = () => {
  return (
    <div className="w-full min-h-screen bg-[#F3F6FB] flex justify-center">
      <div className="w-full max-w-[570px] pt-[100px] px-6 mx-auto mt-15">

        {/* 헤더 */}
        <UserHeader />

        {/* 오늘의 학습 카드 */}
        <TodayLearningCard />

        {/* 복습 카드 */}
        <ReviewCard />

        {/* 추천 주제 */}
        <div className="mt-10">
          <p className="text-[18px] font-semibold text-[#1B1D1F] mb-4">
            추천 주제
          </p>

          <div className="flex gap-4">
            <Tag label="금리" className="w-20 h-7 font-semibold" />
            <Tag label="물가" className="w-20 h-7 font-semibold" />
            <Tag label="투자" className="w-20 h-7 font-semibold" />
            <Tag label="재정" className="w-20 h-7 font-semibold" />
          </div>
        </div>

        {/* 아래 문구 */}
        <p className="mt-10 text-center text-[18px] font-bold text-[#1B1D1F] flex items-center justify-center gap-2">
          <img src={cardIcon} alt="card" className="w-15 h-15 object-contain" />
          오늘 5장만 뒤집자!
        </p>
      </div>
    </div>
  );
};

export default HomePage;
