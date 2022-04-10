import React from "react";
import { encryptStorageAdmin } from "../encryptStorage";
import { Navigate, Outlet } from "react-router-dom";
import { RoutesConst } from "../../common/Routes";

const PrivateRoute = () => {
  const user = encryptStorageAdmin.getItem("au");
  return  user ? <Outlet /> : <Navigate to={RoutesConst.MAIN} replace />
};

export default PrivateRoute;
