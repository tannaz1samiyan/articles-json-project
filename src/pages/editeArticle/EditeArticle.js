import { useParams } from "react-router-dom"
import MyNavabar from "../../components/mynavbar/MyNavbar"
import './EditeArticle.css'
import { useEffect, useState } from "react"
import Form from 'react-bootstrap/Form';
import axios, { Axios } from "axios"
import Swal from "sweetalert2";
import { FaOtter } from "react-icons/fa";
import Footer from "../../components/footer/Footer";
function EditArticle(){
  const articleId=useParams().articleId
  const [article,setArticle]=useState({})
  useEffect(()=>{
  axios.get(`http://localhost:3003/articles/${articleId}`)
  .then(response=>setArticle(response.data))
  },[])
  const formHandler=(e)=>{
    setArticle({...article,[e.target.name]:e.target.value})
  }
  const editArticleHandler=()=>{
    axios.put(`http://localhost:3003/articles/${articleId}`,article)
      Swal.fire({
        title : 'مقاله با موفقیت ویرایش شد',
        timer: 1500,
        timerProgressBar : true,
        showConfirmButton : false
    })
  }

    return(
       <>
       <MyNavabar/>
         <div className="formcontaner " style={{fontFamily:'yekan'}}>
          <Form.Label htmlFor="inputPassword5" >عنوان مقاله</Form.Label>
      <Form.Control
      className="p-2"
        type="text"
        name="title"
        value={article.title}
        onChange={formHandler}
         placeholder="عنوان مقاله را وارد کنید"
      />

            <Form.Label htmlFor="inputPassword5">توضیح کوتاه</Form.Label>
      <Form.Control
         className="p-2"
        type="text"
        name="desc"
        value={article.desc}
          onChange={formHandler}
         placeholder="یه توضیح کوتاه در مورد مقاله وارد کنید"
        
      />

            <Form.Label htmlFor="inputPassword5">نویسنده مقاله</Form.Label>
      <Form.Control
         className="p-2"
        type="text"
        name="writter"
        value={article.writter}
         onChange={formHandler}
         placeholder="نام نویسنده مقاله را وارد کنید"
      />

            <Form.Label htmlFor="inputPassword5">موضوع مقاله</Form.Label>
      <Form.Control
         className="p-2"
        type="text"
           name="category"
           value={article.category}
           onChange={formHandler}
         placeholder="موضوع مقاله را وارد کنید"
      />

            <Form.Label htmlFor="inputPassword5">عکس مقاله</Form.Label>
      <Form.Control
         className="p-2"
        type="text"
        name="image"
        value={article.image}
           onChange={formHandler}
           placeholder="عکس مقاله را وارد کنید"
      />

            <Form.Label htmlFor="inputPassword5">مدت زمان خواندن</Form.Label>
      <Form.Control
         className="p-2"
        type="number"
         onChange={formHandler}
         value={article.readingTime}
         name="readingTime"
        placeholder=""
      />
      <button className="m-4 border rounded" onClick={editArticleHandler}>ویرایش مقاله</button>
     </div>
     <Footer/>
       </>
    )
}
export default EditArticle