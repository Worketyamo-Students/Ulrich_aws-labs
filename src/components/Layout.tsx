import { Outlet } from "react-router-dom";
import Aside from "./Aside";

export default function Layout() {
  return (
    <div className="flex lg:px-[4vw] lg:pt-[3vh] overflow-y-hidden">
      <Aside />
      <Outlet />
    </div>
  );
}
