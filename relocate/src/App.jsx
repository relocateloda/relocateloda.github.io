import styles from "./App.module.scss";
import { Route, Routes, Navigate, HashRouter } from "react-router-dom";
import MainPage from "./pages/Main/Mainpage";
import { RoutesConst } from "./common/Routes";
import "rsuite/dist/rsuite.min.css";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import AdminLoginPage from "./pages/AdminLogin/AdminLoginPage";
import SendOffer from "./pages/SendOffer/SendOffer";
import OffersCategories from "./pages/OffersCategories/OffersCategories";
import PrivateRoute from "./utils/HOC/PrivateRoute";
import AdminProposals from "./pages/AdminProposals/AdminProposals";
import CategoryPage from "./pages/CategoryPage/CategoryPage";

const App = () => {
  return (
    <div className={styles.app}>
      <HashRouter>
        <Routes>
          <Route path={RoutesConst.MAIN} element={<MainPage />} />
          <Route path={RoutesConst.ADMIN_LOGIN} element={<AdminLoginPage />} />
          <Route element={<PrivateRoute />}>
            <Route
              path={RoutesConst.ADMIN_PROPOSALS}
              element={<AdminProposals />}
            />
          </Route>
          <Route path={RoutesConst.SEND_OFFER} element={<SendOffer />} />
          <Route path={RoutesConst.CATEGORIES} element={<OffersCategories />} />

          <Route
            path={RoutesConst.CONSULTING}
            element={<CategoryPage category="consulting" />}
          />
          <Route
            path={RoutesConst.IT}
            element={<CategoryPage category="it" />}
          />
          <Route
            path={RoutesConst.LOGISTICS}
            element={<CategoryPage category="logistics" />}
          />
          <Route
            path={RoutesConst.MANUFACTURING}
            element={<CategoryPage category="manufacturing" />}
          />
          <Route
            path={RoutesConst.OTHER}
            element={<CategoryPage category="other" />}
          />
          <Route path={RoutesConst.NOT_FOND} element={<NotFoundPage />} />
          <Route
            path="*"
            element={<Navigate to={RoutesConst.NOT_FOND} replace />}
          />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
