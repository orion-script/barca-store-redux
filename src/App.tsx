import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import AppRoutes from "./Routes";
import { checkUserSession } from "./store/user/user.action";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);
  return <AppRoutes />;
}

export default App;
