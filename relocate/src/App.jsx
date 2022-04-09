import "./App.scss";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import MainPage from "./pages/Main/Mainpage";
import { RoutesConst } from "./common/Routes";

import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import AdminLoginPage from "./pages/AdminLogin/AdminLoginPage";
import SendOffer from "./pages/SendOffer/SendOffer";
import OffersCategories from "./pages/OffersCategories/OffersCategories";
import PrivateRoute from "./utils/HOC/PrivateRoute";
import AdminProposals from "./pages/AdminProposals/AdminProposals";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path={RoutesConst.MAIN} element={<MainPage />} />
          <Route path={RoutesConst.ADMIN_LOGIN} element={<AdminLoginPage />} />
          <Route element={<PrivateRoute/>}>
            <Route path={RoutesConst.ADMIN_PROPOSALS} element={<AdminProposals/>} />
          </Route>
          <Route path={RoutesConst.SEND_OFFER} element={<SendOffer />} />
          <Route path={RoutesConst.CATEGORIES} element={<OffersCategories />} />
          <Route path={RoutesConst.CONSULTING} element={<OffersCategories />} />
          <Route path={RoutesConst.IT} element={<OffersCategories />} />
          <Route path={RoutesConst.LOGISTICS} element={<OffersCategories />} />
          <Route path={RoutesConst.MANUFACTURING} element={<OffersCategories />} />
          <Route path={RoutesConst.OTHER} element={<OffersCategories />} />
          <Route path={RoutesConst.NOT_FOND} element={<NotFoundPage />} />
          {/*<Route*/}
          {/*    path="*"*/}
          {/*    element={<Navigate to={RoutesConst.NOT_FOND} replace />}*/}
          {/*/>*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
