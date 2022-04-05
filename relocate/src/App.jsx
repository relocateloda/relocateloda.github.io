import "./App.scss";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import MainPage from "./pages/Main/Mainpage";
import { RoutesConst } from "./common/Routes";
import SendOffer from "./pages/SendOffer/OffersCategories";
import OffersCategories from "./pages/OffersCategories/SendOffer";
import NotFoundPage from "./pages/NotFoundPage/OffersCategories";
import AdminLoginPage from "./pages/Admin/AdminPage";


const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path={RoutesConst.MAIN} element={<MainPage />} />
          <Route path={RoutesConst.ADMIN} element={<AdminLoginPage />} />
          <Route path={RoutesConst.SEND_OFFER} element={<SendOffer />} />
          <Route path={RoutesConst.OFFERS} element={<OffersCategories />} />
          <Route path={RoutesConst.NOT_FOND} element={<NotFoundPage />} />
          <Route
              path="*"
              element={<Navigate to={RoutesConst.NOT_FOND} replace />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
