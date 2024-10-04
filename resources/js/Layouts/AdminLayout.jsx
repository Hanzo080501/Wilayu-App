import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from '@/Components/Dashboard/Header';
import Sidebar from '@/Components/Dashboard/Sidebar';
import Profile from '@/Components/Dashboard/Profile';
import Main from '@/Components/Dashboard/Main';
import Content from '@/Components/Dashboard/Content';

const AdminLayout = ({ children, auth }) => {
  // const user = usePage().props.auth.user;
  // console.log('admin', auth);
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setisSidebarOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleSidebar = () => {
    setisSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className={`font-sans ${darkMode && 'dark'}`}>
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} toggleSidebar={toggleSidebar} />
      <Sidebar isSidebarOpen={isSidebarOpen} />

      <AnimatePresence>
        <Main key={window.location.pathname}>
          {/* {children} */}
          <Content children={children} />
          <Profile />
        </Main>
      </AnimatePresence>
    </div>
  );
};

export default AdminLayout;
