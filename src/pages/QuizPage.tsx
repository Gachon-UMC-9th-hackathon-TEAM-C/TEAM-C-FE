import { MOCK_QUESTIONS } from "../constants/mockQuiz";
import { useQuiz } from "../hooks/useQuiz";
import Header from "../component/common/Header";
import AnswerFeedback from "../component/Quiz/AnswerFeedback";
import SelectIconPng from "../assets/circle_select.png";
import RightIconPng from "../assets/circle_right.png";
import WrongIconPng from "../assets/circle_wrong.png";
import QuizTitleSection from "../component/Quiz/QuizConrent";
import { useState } from "react";
import { shuffleArray } from "../utils/suffle";

const QuizPage=()=>{
    const [shuffledQuestions] = useState(() => shuffleArray(MOCK_QUESTIONS));
    const { 
    currentQuiz, currentIndex, progress, selectedIdx, 
    handleSelect, handleNext, correctCount, isAnswered, isRight
  } = useQuiz(shuffledQuestions);
    

  
    return(
        <div className="min-h-screen w-full min-w-o flex flex-col items-center bg-gray-7">
            <Header>
                <div className="flex flex-col justify-center w-full max-w-3xl px-4 gap-2 py-4 ">
                    <div className="flex justify-between">
                        <span className="text-gray-2 text-medium-20">퀴즈 {currentIndex + 1}/{MOCK_QUESTIONS.length}</span>
                        <span className="text-primary text-medium-20">{correctCount}개 정답</span>
                    </div>
                    {/* 진행률바 */}
                    <div className="w-full bg-primary-5 h-2 rounded-full overflow-hidden">
                        <div 
                        className="bg-primary h-full rounded-full transition-all duration-300" 
                        style={{ width: `${progress}%` }} 
                        />
                    </div>
                </div>
            </Header>
            
            {/* --- 메인 콘텐츠 --- */}
            <main className="w-full max-w-2xl p-6 mt-0 flex-1">
                <QuizTitleSection type={currentQuiz.type} problem={currentQuiz.problem} />

                <ul className="flex flex-col gap-3">
                    {currentQuiz.options.map((option, idx) => {
                        const isSelected = selectedIdx === idx;
                    
                    return (
                        <li    
                            key={idx}
                            className={` flex items-center gap-4 p-4 rounded-2xl border-3 hover:border-primary border-primary
                                transition-all cursor-pointer shadow-md group
                                ${isSelected
                                    ?(isAnswered
                                        ?(isRight ?  'border-lime-500 bg-lime-50' : 'border-red-500 bg-red-50' )
                                        : 'border-primary bg-primary-5')
                                : 'border-gray-7 bg-gray-9'}`}
                            onClick={() => handleSelect(idx)}
                        >
                            {/* --- 내부 동그라미(외곽선) --- group-hover:border-blue-500 border-4*/}
                            <div className={`w-5 h-5 rounded-full flex items-center justify-center
                                ${isSelected?'':'border-gray-7 border-4'}
                                group-hover:border-blue-500 border-1}`}>
                                {isSelected && (<img 
                                    src={isAnswered
                                                ? (isRight ? RightIconPng : WrongIconPng) // 1. 제출 후 정답/오답 아이콘
                                                    : SelectIconPng                     // 2. 제출 전 클릭된 상태 아이콘
                                    }
                                    alt="icon"
                                    className={`w-full h-full object-contain}`}
                                />)}
                            </div>
                            
                            <span className="text-gray-2 text-medium-24">{option}</span>
                        </li>

                    )
                        
                    })}
                </ul>
                {/* 피드백 컴포넌트 호출 */}
                <AnswerFeedback 
                    isAnswered={isAnswered} 
                    isRight={isRight} 
                    correctAnswer={currentQuiz.answer} 
                    selectedIdx={selectedIdx}
                    optionDescriptions={currentQuiz.optionDescriptions}
                />



            </main>

            {/* --- 하단 버튼 --- */}
            <footer className="w-full  bg-white  ">
                <div className="max-w-2xl mx-auto p-8 flex justify-end">
                    <button 
                    className={`px-12 py-2 rounded-xl text-medium-24 flex transition-all
                        ${selectedIdx === null ? 'bg-gray-7 text-gray-5' : 'bg-primary text-white'}`}
                    disabled={selectedIdx === null}
                    onClick={handleNext}
                    >
                    {isAnswered ? "다음" : "확인"}
                    </button>

                </div>
            </footer>

        </div>

    )
}
export default QuizPage;