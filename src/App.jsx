import { Routes, Route } from "react-router-dom";
import "./App.css";
import SearchPage from "./pages/SearchPage";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<DashboardPage />} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>
  );
}

export default App;
