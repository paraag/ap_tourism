import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet } from "react-router";
import App from "./App";
import "./index.css";
import AIChatBot from "./pages/Bot";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Layout component with persistent Header
const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet /> {/* This is where child routes will render */}
      </main>
      <Footer />
    </div>
  );
};


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<App />} />
        <Route path="/ai-trip-planner" element={<AIChatBot />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
