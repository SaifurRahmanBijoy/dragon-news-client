import React, { useContext } from "react";
import { Button, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import LeftSideNav from "../LeftSideNav/LeftSideNav";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <Navbar
      className="mb-3 shadow-sm sticky-top"
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
    >
      <Container>
        <Navbar.Brand>
          <Link className="text-decoration-none btn-outline" to="/">
            Dragon News
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>All News</Nav.Link>
          </Nav>
          <Nav className="my-2 align-items-center">
            <Nav className="text-dark mb-0">
              {user?.uid ? (
                <>
                  <Button
                    onClick={handleLogOut}
                    variant="outline-danger py-0"
                    className="mx-4"
                  >
                    Logout
                  </Button>
                  <span>{user?.displayName}</span>
                </>
              ) : (
                <>
                  <Link
                    className="text-decoration-none mx-2 text-success"
                    to="/login"
                  >
                    Login
                  </Link>
                  <Link
                    className="text-decoration-none mx-2 text-primary"
                    to="/register"
                  >
                    Register
                  </Link>
                </>
              )}
            </Nav>
            <Link to='/profile' className="ms-3">
              {user?.photoURL ? (
                <Image
                  style={{width: "30px", border: "1px solid black" }}
                  roundedCircle
                  src={user?.photoURL}
                />
              ) : (
                <FaUser></FaUser>
              )}
            </Link>
          </Nav>
          <div className="d-lg-none">
            <LeftSideNav></LeftSideNav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
