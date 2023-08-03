import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home, About, Service, Portfolio, Contact, Footer } from "./pages";
import { ErrorPage } from "./pages";
import "./App.css";
import { Suspense } from "react";

function App() {
  return (
    <Suspense fallback={null}>
      <Home />
      <About />
      <Service />
      <Portfolio />
      <Contact />
      <Footer />
    </Suspense>
  );
}

export default App;
