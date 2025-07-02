
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AI from "./pages/AI";
import Goals from "./pages/Goals";
import Stats from "./pages/Stats";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import BottomNavigation from "./components/BottomNavigation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="relative">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/ai" element={
              <div>
                <AI />
                <BottomNavigation />
              </div>
            } />
            <Route path="/goals" element={
              <div>
                <Goals />
                <BottomNavigation />
              </div>
            } />
            <Route path="/stats" element={
              <div>
                <Stats />
                <BottomNavigation />
              </div>
            } />
            <Route path="/profile" element={
              <div>
                <Profile />
                <BottomNavigation />
              </div>
            } />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
