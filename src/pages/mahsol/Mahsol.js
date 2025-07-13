import { Outlet } from "react-router-dom"
import MyNavabar from "../../components/mynavbar/MyNavbar"

function Mahsol(){

    return(
        <>
        <MyNavabar/>
        
         <Outlet/>
        </>
       
    )
}
export default Mahsol