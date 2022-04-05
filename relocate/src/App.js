import "./App.scss";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import MainPage from "./pages/Main/Mainpage";
import AdminPage from "./pages/Admin/AdminPage";
import { RoutesConst } from "./common/Routes";
import SendOffer from "./pages/SendOffer/OffersCategories";
import OffersCategories from "./pages/OffersCategories/SendOffer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={RoutesConst.MAIN} element={<MainPage />} />
          <Route path={RoutesConst.ADMIN} element={<AdminPage />} />
          <Route path={RoutesConst.SEND_OFFER} element={<SendOffer />} />
          <Route path={RoutesConst.OFFERS} element={<OffersCategories />} />
          <Route path='*' element={<OffersCategories />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
