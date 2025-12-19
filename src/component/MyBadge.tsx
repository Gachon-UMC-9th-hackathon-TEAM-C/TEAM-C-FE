import React from "react";
import weeklyContinueLogo from "../assets/weeklyContinueLogo.svg";
import firstCompletedLogo from "../assets/firstCompletedLogo.svg";
import tenLearningLogo from "../assets/tenLearningLogo.svg";
import perfectScoreLogo from "../assets/perfectScoreLogo.svg";

export interface Badge {
  id: number;
  type: "flame" | "trophy" | "book" | "award";
  name: string;
  active: boolean;
}

interface MyBadgeProps {
  badges: Badge[];
}

// ✅ 타입별 아이콘 매핑
const badgeIconMap: Record<Badge["type"], string> = {
  flame: weeklyContinueLogo,
  trophy: firstCompletedLogo,
  book: tenLearningLogo,
  award: perfectScoreLogo,
};

const MyBadge: React.FC<MyBadgeProps> = ({ badges }) => {
  return (
    <section>
      <h3 className="text-medium-15 text-gray-1 font-semibold mb-3 ml-1">
        획득한 배지
      </h3>

      <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">
        {badges.map((badge) => {
          const iconSrc = badgeIconMap[badge.type];

          return (
            <div
              key={badge.id}
              className={`flex items-center justify-center w-full items-center gap-2 py-5 px-2 rounded-xl min-w-fit shadow-sm border
                ${
                  badge.active
                    ? "bg-amber-50 border-amber-100"
                    : "bg-white border-transparent"
                }`}
            >
              <div
                className={`rounded-full flex items-center justify-center
                  ${badge.active ? "bg-secondary-3 border-secondary-5" : "bg-white"}`}
              >
                <img
                  src={iconSrc}
                  className={`w-9 h-9 ${
                    badge.active ? "" : ""
                  }`}
                />
              </div>

              <span
                className={`text-semibold-20 text-[12px] ${
                  badge.active ? "text-gray-1" : "text-gray-500"
                }`}
              >
                {badge.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MyBadge;
