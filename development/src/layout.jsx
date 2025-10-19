import { Outlet } from "react-router-dom";
import NavBar from "./navbar";
import FooterSection from "./footer";

export default function Layout(){

    return(
        <>
        <NavBar />
        <Outlet />
        <FooterSection />
        </>
    );
}