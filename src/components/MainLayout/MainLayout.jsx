import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';

import Header from '../Header/Header';
// import { SideBar } from '../SideBar/SideBar';

import { StyledMain } from './MainLayout.styled';

const MainLayout = () => {
  return (
    <StyledMain>
      <Header />
      {/* <p>SideBar </p> */}
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </StyledMain>
  );
};
export default MainLayout;
