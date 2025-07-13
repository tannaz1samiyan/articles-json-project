
import { BrowserRouter,Routes,Route } from "react-router-dom";
import AddAticle from "./pages/addArticle/AddArticle";
import EditArticle from "./pages/editeArticle/EditeArticle";
import Home from "./pages/home/Home"
import Aboute from "./pages/aboute/Aboute";
import Article from "./pages/article/Article";
import Mahsol from "./pages/mahsol/Mahsol";
import Giyahi from "./pages/giyahi/Giyahi";
import './App.css'
import Shimiyai from "./pages/shimiyai/Shimiyai";
function App() {
  return (
   <BrowserRouter>
  <Routes>

    <Route path="/" element={<Home/>}/>
    <Route path="/aboute" element={<Aboute/>}/>
    <Route path="/addArticle" element={<AddAticle/>}/>
    <Route path="/article/:articleId" element={<Article/>}/>
    <Route path="/editeArticle/:articleId" element={<EditArticle/>}/>
     <Route path="/mahsol/*" element={<Mahsol/>}>
      <Route path="giyahi" element={<Giyahi/>}/>
      <Route path="shimiyai" element={<Shimiyai/>}/>
     </Route>
     
    {/* <Route path="/mahsol/*" element={<Mahsol/>}/>  */}
     
     
  </Routes>
  </BrowserRouter>
  );
}

export default App;
