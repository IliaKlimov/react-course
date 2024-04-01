import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar.jsx";
const MainLayout = () => (
    <>
        <NavBar/>
        <Outlet />
    </>
);

export default MainLayout;