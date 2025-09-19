import { Outlet } from "react-router-dom";
import MobileMenuBar from "@/components/layout/MobileMenuBar";

function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-xl font-bold">My Application</h1>
      </header>
      <main className="flex-grow p-4">
        <Outlet />
      </main>
      <footer className="bg-gray-200 text-center p-4 hidden md:block">
        <p>&copy; 2024 My Application</p>
      </footer>
      <MobileMenuBar />
    </div>
  );
}

export default MainLayout;
