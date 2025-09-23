
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-black-900 text-white flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-6 md:px-8 lg:px-16 xl:px-24 py-12 md:py-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
