
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Hero } from "@/components/sections/Hero";
import { KettleStatusBoard } from "@/components/sections/KettleStatusBoard";
import { SweetsCarousel } from "@/components/sections/SweetsCarousel";
import { HeritageMap } from "@/components/sections/HeritageMap";
import { ApothecarySignup } from "@/components/sections/ApothecarySignup";
import { Footer } from "@/components/sections/Footer";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <main className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-white">
          <Hero />
          <KettleStatusBoard />
          <SweetsCarousel />
          <HeritageMap />
          <ApothecarySignup />
          <Footer />
        </main>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
