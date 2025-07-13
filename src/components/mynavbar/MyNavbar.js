
import Container from 'react-bootstrap/Container';
import './MyNavbar.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink,Link } from 'react-router-dom';

import Dropdown from 'react-bootstrap/Dropdown';
function MyNavabar(){
    const expand='md'
    return(
       <>
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3" >
          <Container >
            <Navbar.Brand href="#" style={{fontFamily:'lalezar',fontSize:'30px', }}>بلاگ نکست وان کد</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavLink to="/" class="nav-link">صفحه اصلی</NavLink>
                  <NavLink  to='/addArticle' class='nav-link'>ساخت مقاله</NavLink>
                 
                    <NavLink to="/aboute" class="nav-link">درباره ما</NavLink>
                       <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
         <NavLink to="/mahsol" class="nav-link">محصولات</NavLink>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1"><Link to="giyahi">گیاهی</Link></Dropdown.Item>
        <Dropdown.Item href="#/action-2"><Link to='shimiyai'>شیمیایی</Link></Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
                      
                 
                </Nav>
              
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
       </>
    )
}
export default MyNavabar