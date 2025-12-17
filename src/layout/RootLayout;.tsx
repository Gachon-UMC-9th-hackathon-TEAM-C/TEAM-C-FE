// src/layout/root-layout.tsx
import { Outlet } from 'react-router-dom';
import BottomTab from '../component/common/BottomTab';

const RootLayout = () => {
  return (
    <div className='flex flex-col min-h-screen w-screen bg-violet-100'>
      <div className='flex flex-1 w-full'>
        <Outlet />
      </div>
      <BottomTab />
    </div>
  );
};

export default RootLayout;