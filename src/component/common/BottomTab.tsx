import { HomeIcon, Library, RotateCcw, User } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";


const BottomTab = () => {
    
    const location = useLocation();
    const navigation = useNavigate();
    
    const NavigationList = [
        { name: "홈", icon: <HomeIcon className="w-5 h-5" />, path: "/home" },
        { name: "복습", icon: <RotateCcw className="w-5 h-5" />, path: "/review" },
        { name: "라이브러리", icon: <Library className="w-5 h-5" />, path: "/library" },
        { name: "프로필", icon: <User className="w-5 h-5" />, path: "/profile" },
    ];
        
    return (
        <footer className="flex w-full h-18 justify-between items-center sm:px-10 md:px-20 lg:px-30  bg-white text-gray-500">
            {
            NavigationList.map((navItem) => (
                <nav
                    key={navItem.name}
                    className={`flex flex-col h-18 w-18 justify-between items-center py-4 cursor-pointer ${location.pathname === navItem.path ? 'text-blue-500 font-bold' : ''}`}
                    onClick={() => {
                        navigation(navItem.path);}
                    }
                >
                    {navItem.icon}
                    <span className="text-xs">{navItem.name}</span>
                </nav>
            ))
            }
        </footer>
    );
}

export default BottomTab;