import PrizeIcon from "../assets/PrizeIcon.svg"
import STARICON from "../assets/STARICON.svg"
import ROTATEARROW from "../assets/ROTATEARROW.svg"
import WordCard from "../component/LearningCompleted/WordCard"
import Button from "../component/common/Button"

const LearningCompletedPage = () => {

    const words = ["인플레이션", "기준금리","GDP","양적완화","복리"]
    const review = ["환율", "디플레이션"]

    return (
        <div className="flex w-full h-screen justify-center items-center bg-linear-to-t from-[#0F52B0] to-[#1575FB] overflow-y-auto">
            <div className="flex flex-col w-2xl h-full justify-center items-center gap-5 mt-20">
                <div className="flex flex-col gap-3">
                    <img src={PrizeIcon} className="animate-bounce"/>
                    <div className="flex flex-col text-gray-9 justify-center items-center">
                        <span className="text-semibold-20">학습완료</span>
                        <span className="text-medium-18">잘하셨어요!</span>
                    </div>
                </div>
                <div className="flex w-full">
                    <div className="flex flex-col w-full justify-center items-center bg-primary-3 p-5 rounded-l-2xl">
                        <span className="text-semibold-32 text-primary-6">80%</span>
                        <span className="text-medium-15 text-gray-1">정답률</span>
                    </div>
                    <div className="flex flex-col w-full justify-center items-center bg-primary-4 p-5 rounded-r-2xl">
                        <span className="text-semibold-32 text-primary-6">+80</span>
                        <span className="text-medium-15 text-gray-1">XP획득</span>
                    </div>
                </div>
                <div className="flex flex-col w-full px-10 py-5 bg-primary-2 rounded-2xl">
                    <div className="flex w-full justify-between items-center ">
                        <span className="text-medium-15 text-gray-9">정답</span>
                        <span className="text-medium-15 text-[#6AF2E2]">8/10</span>
                    </div>
                    <div className="flex w-full justify-between items-center">
                        <span className="text-medium-15 text-gray-9">오답</span>
                        <span className="text-medium-15 text-[#EEA9A1]">2/10</span>
                    </div>
                </div>
                <div className="flex flex-col w-full px-10 py-5 bg-primary-2 rounded-2xl gap-3">
                    <div className="flex w-full justify-start items-center gap-2">
                        <img src={STARICON}/>
                        <span className="text-medium-18 text-gray-9">새로 익힌 용어</span>
                    </div>
                    <div className="flex w-full justify-start items-center gap-2">
                        {words.map((word, idx) => (
                            <WordCard content={word} />
                        ))}
                    </div>
                </div>
                <div className="flex flex-col w-full px-10 py-5 bg-primary-2 rounded-2xl gap-3.5">
                    <div className="flex w-full justify-start items-center gap-2">
                        <img src={ROTATEARROW}/>
                        <span className="text-medium-18 text-gray-9">복습 추천</span>
                        <span className="text-medium-15 text-secondary">2개 용어를 복습하면 더 확실히 익힐 수 있어요!</span>
                    </div>
                    <div className="flex w-full justify-start items-center gap-2">
                        {review.map((word, idx) => (
                            <WordCard WordCardClassName="bg-secondary-4" content={word} />
                        ))}
                    </div>
                </div>
                <button
                    className="w-full bg-white text-semibold-28 text-primary py-5 rounded-2xl mt-10 cursor-pointer"
                >
                    홈으로 돌아가기
                </button>
            </div>
        </div>
    )
}

export default LearningCompletedPage