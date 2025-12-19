import  { useOnboardingStore } from "../../constants/onboarding";
import { ONBOARDING_SLIDE_LIST } from "../../store/onboardingStore";
import { useThrottle } from "../../hooks/useThrottle";
import OnboardingSlide from "./OnboardingSlide";
import ProgressDots from "./ProgressDots";
import DailyCardSelector from "./DailyCardSelector";
import PrimaryButton from "../common/PrimaryButton";

export default function OnboardingContainer() {
  const { currentIndex, setIndex } = useOnboardingStore();

  const handleNext = useThrottle(() => {
    if (currentIndex < ONBOARDING_SLIDE_LIST.length - 1) {
      setIndex(currentIndex + 1);
    }
  });

  const isLast = currentIndex === ONBOARDING_SLIDE_LIST.length - 1;

  return (
    <div className="w-full h-full flex flex-col justify-center py-16">

      <div className="flex flex-col items-center gap-10">
        <OnboardingSlide slide={ONBOARDING_SLIDE_LIST[currentIndex]} />

        {isLast && <DailyCardSelector />}

        <ProgressDots
          total={ONBOARDING_SLIDE_LIST.length}
          current={currentIndex}
        />
      </div>

        <div className="mt-12">
        <PrimaryButton
            label={isLast ? "시작하기" : "다음"}
            onClick={handleNext}
        />
      </div>

    </div>
  );
}
