import Navbar from "@/components/navbar";

import Footer from "@/components/footer";
import { Outlet } from "react-router-dom";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';



export default function Root() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      
      <main className="container min-h-[calc(100vh-3.4rem)]">
        <Outlet/>
      </main>
      <Footer />
    </>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
