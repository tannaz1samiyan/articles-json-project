import { Container, Row , Col } from "react-bootstrap"
import ArticleItem from "../../components/article/ArticleItem"
import MyNavabar from "../../components/mynavbar/MyNavbar"
import axios from "axios"
import './Home.css'
import { useEffect, useState } from "react"

function Home(){
    const [articles,setArticles]=useState([])
    useEffect(()=>{
      axios.get('http://localhost:3003/articles') 
      .then(response=>setArticles(response.data)) 
    }

    ,[])
    return(
        <>
        <MyNavabar/>
       <Container>
        <Row>
             {
            articles.map(article=>
            <Col key={article.id} className="col-12 col-md-6 col-md-4 col-lg-3 gy-4">
            <ArticleItem  {...article}/> 
            </Col>
               
            )
         }
        </Row>
        
       </Container>
        </>
    )
}
export default Home