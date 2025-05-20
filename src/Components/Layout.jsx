// src/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Nav';
import Banner from './Banner';
import Footer from './Footer';
import TawkTo from './xtras/TawkTo';
import InsurancePartners from './InsurancePartners';

export default function Layout() {
  return (
    <>
      <Navbar />
      <Banner />
      <main className="pt-24 md:pt-20 flex-1">
        <Outlet />            
      </main>
      <InsurancePartners />
      <Footer />
      <TawkTo />
    </>
  );
}
