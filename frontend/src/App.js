import React from "react";
import "@/App.css";
import LandingPage from "./pages/LandingPage";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <div className="App">
      <LandingPage />
      <Toaster position="top-right" richColors />
    </div>
  );
}

export default App;
