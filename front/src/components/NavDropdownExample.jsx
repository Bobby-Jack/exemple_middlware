import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function NavDropdownExample(props) {
  const navigate = useNavigate()

  function logout(){

  }


  const handleSelect = (eventKey) => navigate(eventKey);

  return (
    <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
      <Nav.Item>
        <Nav.Link eventKey="/" >
          HOME
        </Nav.Link>
      </Nav.Item>
     
        <Nav.Item>
          <Nav.Link eventKey="/login" >
            LOGIN
          </Nav.Link>
        </Nav.Item>
      
      
      <Nav.Item>
        <Nav.Link eventKey="/vip" >
          VIP PAGE
        </Nav.Link>
      </Nav.Item>
      
    </Nav>
  );
}

export default NavDropdownExample;