import { Route, Routes } from "react-router-dom";
import "./App.css";

import LoginPage from "./pages/LoginPage/LoginPage";
import PokeDexPage from "./pages/PokeDexPage/PokeDexPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PokeDexPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
