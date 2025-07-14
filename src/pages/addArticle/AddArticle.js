
import MyNavabar from "../../components/mynavbar/MyNavbar"
import Form from 'react-bootstrap/Form';
import './AddArticle.css'
import { useState } from "react";
import axios from "axios";

import Swal from "sweetalert2";
import Footer from "../../components/footer/Footer";
function AddAticle(){

const [formData,setFormData]=useState({})
 
const resetHandler=()=>{
      setFormData({
        title : '',
        desc : '',
        image : '',
        writter : '',
        category : '',
        readingTime : ''
    })
}
const formHandler=(e)=>{
 setFormData({...formData,[e.target.name]:e.target.value})

}
const addArticleHandler=()=>{
   axios.post('http://localhost:3003/articles/',formData)
  .then(responce=>{
   if(responce.status==201){
      
            Swal.fire({
                title : 'مقاله جدید با موفقیت ساخته شد',
                timer : 1500,
                timerProgressBar : true,
                showConfirmButton : false
            })
        
   }
  }
 
   
  ).catch(error=>{
     Swal.fire({
            title : 'مقاله ساخته نشد',
            timer : 1500,
            icon : 'error',
            timerProgressBar : true,
            showConfirmButton : false
        })
  });
  
 
 resetHandler()
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
        value={formData.title}
        onChange={formHandler}
         placeholder="عنوان مقاله را وارد کنید"
      />

            <Form.Label htmlFor="inputPassword5">توضیح کوتاه</Form.Label>
      <Form.Control
         className="p-2"
        type="text"
        name="desc"
        value={formData.desc}
          onChange={formHandler}
         placeholder="یه توضیح کوتاه در مورد مقاله وارد کنید"
        
      />

            <Form.Label htmlFor="inputPassword5">نویسنده مقاله</Form.Label>
      <Form.Control
         className="p-2"
        type="text"
        name="writter"
        value={formData.writter}
         onChange={formHandler}
         placeholder="نام نویسنده مقاله را وارد کنید"
      />

            <Form.Label htmlFor="inputPassword5">موضوع مقاله</Form.Label>
      <Form.Control
         className="p-2"
        type="text"
           name="category"
           value={formData.category}
           onChange={formHandler}
         placeholder="موضوع مقاله را وارد کنید"
      />

            <Form.Label htmlFor="inputPassword5">عکس مقاله</Form.Label>
      <Form.Control
         className="p-2"
        type="text"
        name="image"
        value={formData.image}
           onChange={formHandler}
           placeholder="عکس مقاله را وارد کنید"
      />

            <Form.Label htmlFor="inputPassword5">مدت زمان خواندن</Form.Label>
      <Form.Control
         className="p-2"
        type="number"
         onChange={formHandler}
         value={formData.readingTime}
         name="readingTime"
        placeholder=""
      />
      <button className="m-4 border rounded" onClick={addArticleHandler}>ارسال مقاله</button>
     </div>
     <Footer/>
       </>
    )
}
export default AddAticle