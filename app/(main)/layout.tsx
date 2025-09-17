import Footer from "@/components/main/footer";
import Header from "@/components/main/header";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-screen flex flex-col bg-gradient-to-br from-[#f0f4f8] via-[#fefefe] to-[#e7f0ff] text-gray-800 overflow-hidden">
      
      {/* Sticky Header */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <Header />
      </div>

      {/* Scrollable Content Area (children + footer) */}
      <div className="flex-1 overflow-y-auto no-scrollbar">
        <main className="px-4 sm:px-6 lg:px-8 py-6">
          {children}
        </main>
        <footer className="border-t border-gray-200 bg-white/90 backdrop-blur-md max-w-6xl mx-auto">
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default MainLayout;
