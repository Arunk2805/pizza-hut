import "./App.css";
import Banner from "./components/Banner";
import Header from "./components/Header";
import PizzaDescrp from "./components/PizzaDescrp";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      
      <Header />
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Banner />} />
          <Route path="/pizzades/:id" element={<PizzaDescrp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
