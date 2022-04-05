import "./App.scss";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import MainPage from "./pages/Main/Mainpage";
import AdminPage from "./pages/Admin/AdminPage";
import { RoutesConst } from "./common/Routes";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={RoutesConst.MAIN} element={<MainPage />} />
          <Route path={RoutesConst.ADMIN} element={<AdminPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
