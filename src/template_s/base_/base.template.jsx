import { Category } from "./components_/catelogy";
import { Footer } from "./components_/footer";
import { Header } from "./components_/header";
import { Outlet} from "react-router";
import { ScrollRestoration } from "react-router";
export function BaseTemplate() {

    
    return (
        <>
        {/* khi nào thay đổi chạy về trang  đầu */}
        <ScrollRestoration/>
        <Header/>
        <Category/>
        <Outlet/>
        <Footer/>
        
        </>
    )
}
