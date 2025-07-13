  
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
function ArticleItem(props){

    return(
        <>
         <Card >
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
        {props.desc}
        </Card.Text>
        <Link to={`/article/${props.id}`}>
         <p>
             <span>ادامه مقاله</span>
          <span style={{padding:'0 10px' , fontWeight:'bold'}}><FaArrowLeft size='25px' /></span>
         </p>
       
        </Link>
    
       
      </Card.Body>
          <Card.Footer style={{fontSize:'13px'}} className='d-flex justify-content-between py-3'>
           <div> 
            <span>نویسنده:</span>
            <span>{props.writter}</span>
            </div>
            <div>
                <span className='px-2'><CiClock2 /></span>
                <span >{props.readingTime}</span>
            </div>
        
        </Card.Footer>

    </Card>
        </>
    )
}
export default ArticleItem