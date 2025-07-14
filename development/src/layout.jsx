import { Outlet } from "react-router-dom";
import NavBar from "./navbar";

export default function Layout(){

    return(
        <>
        <NavBar />
        <Outlet />
        </>
    );
}