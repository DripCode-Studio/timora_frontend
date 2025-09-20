import { Outlet } from "react-router-dom";
import Footer from "@/components/layout/Footer";
import MobileMenuBar from "@/components/layout/MobileMenuBar";
import Header from "@/components/layout/Header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/app-sidebar";

function MainLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="min-h-screen w-full flex flex-col bg-green-500">
        <Header />
        <main className="flex-grow p-4 border-2">
          <Outlet />
        </main>
        <Footer />
        <MobileMenuBar />
      </div>
    </SidebarProvider>
  );
}

export default MainLayout;
