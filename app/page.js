
"use client"

import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./components/home";
import Index from ".";
import {BrowserRouter,Route, Routes} from "react-router-dom";
export default function App() {
  
return (<>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Index><Home /></Index>}
        />
        <Route
          path="/about"
          element={<Index><About /></Index>}
        />
        <Route
          path="/contact"
          element={<Index><Contact /></Index>}
        />
      </Routes>
    </BrowserRouter>
  
  
   
  </>
   
  );
}
