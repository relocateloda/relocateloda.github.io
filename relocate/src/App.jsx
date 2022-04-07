import "./App.scss";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import MainPage from "./pages/Main/Mainpage";
import { RoutesConst } from "./common/Routes";

import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import AdminLoginPage from "./pages/Admin/AdminPage";
import SendOffer from "./pages/SendOffer/SendOffer";
import OffersCategories from "./pages/OffersCategories/OffersCategories";


const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path={RoutesConst.MAIN} element={<MainPage />} />
          <Route path={RoutesConst.ADMIN} element={<AdminLoginPage />} />
          <Route path={RoutesConst.SEND_OFFER} element={<SendOffer />} />
          <Route path={RoutesConst.CATEGORIES} element={<OffersCategories />} />
          <Route path={RoutesConst.CONSULTING} element={<OffersCategories />} />
          <Route path={RoutesConst.IT} element={<OffersCategories />} />
          <Route path={RoutesConst.LOGISTICS} element={<OffersCategories />} />
          <Route path={RoutesConst.MANUFACTURING} element={<OffersCategories />} />
          <Route path={RoutesConst.OTHER} element={<OffersCategories />} />
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
