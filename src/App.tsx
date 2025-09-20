import AppRoutes from "./routes/AppRoutes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/layout/app-sidebar";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <QueryClientProvider client={queryClient}>
          <AppRoutes />
        </QueryClientProvider>
      </SidebarProvider>
    </>
  );
}

export default App;
