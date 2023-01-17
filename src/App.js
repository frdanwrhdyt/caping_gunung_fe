// import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./pages/Login";
import CashierPage from "./pages/Cashier";
import DashboardPage from "./pages/admin/Dashboard";
import ListMenuPage from "./pages/admin/ListMenu";
import MemberPage from "./pages/admin/Member";
import PageNotFound from "./pages/PageNotFound";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/list-menu" element={<ListMenuPage />} />
        <Route path="/member" element={<MemberPage />} />
        <Route path="/cashier" element={<CashierPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
