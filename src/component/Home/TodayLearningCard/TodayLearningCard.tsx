import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../../store/useUserStore";
import ProgressStatus from "../../common/ProgressStatus";

const TodayLearningCard = () => {
  const { progress, getStatus } = useUserStore();
  const status = getStatus();
  const navigate = useNavigate();

  const handleStudyStart = () => {
    navigate("/todaylearn")
  }

  return (
    <div
      className="
        w-full
        rounded-[28px]
        text-white
        shadow-md
        mt-6
        px-8 py-7
        min-h-60
        bg-[#1575FB]
      "
    >
      {/* 상단 */}
      <div className="flex justify-between items-start">
       <p className="text-white text-sm font-medium opacity-60">
          오늘의 학습
       </p>

        <ProgressStatus status={status} />
      </div>

      {/* 제목 */}
      <h2 className="text-[22px] font-bold mt-1 mb-4">
        오늘의 5장
      </h2>

      {/* 진행 숫자 */}
      <div className="w-[92%] mx-auto">
  
  {/* 진행 숫자 */}
        <div className="flex justify-between text-[15px] opacity-90 mb-2">
          <span>0/5</span>
          <span>{progress}%</span>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2 bg-blue-300 rounded-full mt-1 mb-8">
          <div
            className="h-2 bg-white rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

      </div>

      {/* 버튼 */}
      <button
        onClick={handleStudyStart}
        className="
           w-105 mx-auto mt-6 block 
            py-3.5
            rounded-full 
            bg-white text-blue-500 text-lg font-bold
            shadow-md hover:bg-blue-50 transition
            cursor-pointer
          "
      >
        학습 시작
      </button>
    </div>
  );
};

export default TodayLearningCard;
