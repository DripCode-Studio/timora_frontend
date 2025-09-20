import { Outlet } from "react-router-dom";
import Footer from "@/components/layout/Footer";
import MobileMenuBar from "@/components/layout/MobileMenuBar";
import Header from "@/components/layout/Header";

function MainLayout() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-green-500">
      <Header />
      <main className="flex-grow p-4 border-2">
        <Outlet />
      </main>
      <Footer />
      <MobileMenuBar />
    </div>
  );
}

export default MainLayout;
