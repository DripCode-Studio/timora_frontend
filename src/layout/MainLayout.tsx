import { Outlet, Navigate } from "react-router-dom";
import Footer from "@/components/common/Footer";
import MobileMenuBar from "@/components/layout/MobileMenuBar";
import Header from "@/components/common/Header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/app-sidebar";
import useAuthStore from "@/store/AuthStore";


function MainLayout() {
 
  const { user, token } = useAuthStore();
  const isAuthenticated = !!user && !!token;

  if (!isAuthenticated){
    
    return <Navigate to="/login" />;
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="min-h-screen w-full flex flex-col">
        <Header />
        <main className="flex-grow p-2 md:p-4 pb-20 md:pb-4">
          <Outlet />
        </main>
        <Footer className="hidden md:block" />
      </div>
      <MobileMenuBar />
    </SidebarProvider>
  );
}

export default MainLayout;
