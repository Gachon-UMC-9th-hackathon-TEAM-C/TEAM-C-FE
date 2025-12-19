import { Outlet, useLocation } from "react-router-dom"
import Sidebar from "../component/common/Sidebar";

const ProtectedLayout = () => {
    const location = useLocation();

    // 사이드바를 숨길 경로 목록
    const hideSidebarPaths = ['/cardlearning', '/onboarding', '/reviewcard', '/learningCompleted','/Quiz','/todaylearn'];

    // 현재 경로가 목록에 포함되어 있는지 여부
    const shouldHideSidebar = hideSidebarPaths.some((path) =>
        location.pathname.startsWith(path)
    );
    
    return (
        <div className="flex min-h-screen w-full bg-violet-100 font-[Pretendard]">
            {!shouldHideSidebar && 
                <div className="w-74">
                    <Sidebar />
                </div>
            }
            {/* 본문 영역 */}
            <div className="flex flex-1">
                <Outlet />
            </div>
        </div>
    )
}

export default ProtectedLayout