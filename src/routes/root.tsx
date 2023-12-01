import Navbar from "@/components/navbar";

import Footer from "@/components/footer";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Outlet/>
      </main>
      <Footer />
    </>
  );
}
