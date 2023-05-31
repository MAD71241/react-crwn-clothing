import { Outlet } from "react-router-dom";

import { Directory } from "../../components/directory/directory.component.jsx";

export const Home = () => {
  return (
    <div>
      <Directory />
      <Outlet />
    </div>
  );
};
