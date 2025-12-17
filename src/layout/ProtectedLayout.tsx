import { Navigate, Outlet, useLocation } from "react-router-dom"
import Header from "../component/common/Header";
import BottomTab from "../component/common/Sidebar";

const ProtectedLayout = () => {
    const location = useLocation();

    // 사이드바를 숨길 경로 목록
    const hideSidebarPaths = ['/signin', '/signup', '/lp', '/mypage'];

    // 현재 경로가 목록에 포함되어 있는지 여부
    const shouldHideSidebar = hideSidebarPaths.some((path) =>
        location.pathname.startsWith(path)
    );
    
    return (
        <div className="flex min-h-0 h-screen w-screen bg-violet-100 font-[Pretendard]">
            <BottomTab />
            {/* 본문 영역 */}
            <div className="flex flex-1 w-full">
                <Outlet />
            </div>
        </div>
    )
}

export default ProtectedLayout