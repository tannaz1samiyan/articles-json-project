import { Link, useNavigate, useParams } from "react-router-dom"
import MyNavabar from "../../components/mynavbar/MyNavbar"
import { useEffect, useState } from "react"
import axios from "axios"
import {Row,Col, Container} from "react-bootstrap"
import { FaRegEdit } from "react-icons/fa";
import { BiTimeFive, BiCategoryAlt } from "react-icons/bi";
import Swal from "sweetalert2"
import './Article.css'
function Article(){
    const [articleInfo ,setArticleInfo]=useState({})
    const articleId=useParams().articleId
    const navigate=useNavigate()
    useEffect(()=>{
     axios.get(`http://localhost:3003/articles/${articleId}`)
     .then(response=>setArticleInfo(response.data))
    },[])

      const deleteArticleHandler = (articleId) => {
    Swal.fire({
      title: "مطمئنی میخوای مقاله رو حذف کنی؟",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "آره حذفش کن",
      cancelButtonText: "نه",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "مقاله با موفقیت حذف شد",
          icon: "success",
        });
        axios.delete(`http://localhost:3003/articles/${articleId}`);
        navigate('/')
      }
    });
  };

    return(
        <>
        <MyNavabar/>
        <Container>
            <Row>
              <Col className="col-12 col-md-5">
              <div className="cardContaner" 
               
              >
              <div className="cardHeader text-center ">
                <img src={articleInfo.image} className="img-fluid"/>
              </div>
                 <div className="cardTitle text-center my-2">{articleInfo.title}</div>
                   <div className="cardBody ">
                 <p>
                     <span><FaRegEdit /></span>
                    <span>نویسنده:</span>
                    <span>{articleInfo.writter}</span>
                 </p>
          <p>
            <BiTimeFive size="20px" />
          <span>مدت زمان مطالعه:</span>
          <span>{articleInfo.readingTime}</span>
         </p>
         <p>
          <BiCategoryAlt size="20px" />
         <span>دسته بندی:</span>
                 <span>{articleInfo.category}</span>
                  </p>
                   
                   </div>
                      <div className="cardFooter px-5 py-2 d-flex justify-content-between">
                  
                      <button type="button" class="btn btn-outline-danger" onClick={()=>deleteArticleHandler(articleId)}>حذف مقاله</button>
                     <button type="button" class="btn btn-outline-primary"><Link to={`/editeArticle/${articleId}`}>ویرایش مقاله</Link></button>
                     </div>
                 
              </div>
            </Col>
            <Col className="col-12 col-md-7 my-5">
            <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
            </Col>
        </Row>
        </Container>
        </>
    )
}
export default Article 