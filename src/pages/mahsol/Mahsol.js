import { Outlet } from "react-router-dom"
import MyNavabar from "../../components/mynavbar/MyNavbar"
import Footer from "../../components/footer/Footer"
function Mahsol(){

    return(
        <>
        <MyNavabar/>
        
         <Outlet/>
         <Footer/>
        </>
       
    )
}
export default Mahsol