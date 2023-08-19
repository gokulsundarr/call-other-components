import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link } from "react-router-dom";

function NAVreact() {
  return (
    // <>
      
    //   <br />
    //   <Navbar bg="primary" data-bs-theme="dark">
    //     {/* <Container> */}
    //       {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
    //       <Nav className="me-auto">
    //         <Nav.Link href="/home">Home</Nav.Link>
    //         <Nav.Link href="/features">Features</Nav.Link>
           
    //       </Nav>
    //     {/* </Container> */}
    //   </Navbar>
      

    //  <h2> An antivirus is a software that helps keep a computer system healthy and free of viruses and other types of malware. Some famous examples of antivirus software are McAfee, Kapersky, Avira and more.</h2>
    // </>

<>
<nav>
  <ul>
    <li>
      <Link to="/home">Home</Link>
    </li>
    <li>
      <Link to="/features">features</Link>
    </li>
  </ul>
</nav>

<Outlet />
</>

  );
}

export default NAVreact;