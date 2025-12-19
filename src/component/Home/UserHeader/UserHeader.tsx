import { useUserStore } from "../../../store/useUserStore";
import crownIcon from "../../../assets/icons/crown.png";

const UserHeader = () => {
  const { level } = useUserStore();

  return (
    <div className="mb-6">
      {/* 상단 제목 */}
      <p className="text-[#1B1D1F] text-[18px] font-medium mb-2">
        나의 이콘플립
      </p>

      {/* 레벨 영역 */}
      <div className="flex items-center gap-2">
        <img
          src={crownIcon}
          alt="level"
          className="w-7 h-7 object-contain"
        />

        <p className="text-[#1B1D1F] text-[22px] font-bold">
          Lv.{level}
        </p>
      </div>
    </div>
  );
};

export default UserHeader;
