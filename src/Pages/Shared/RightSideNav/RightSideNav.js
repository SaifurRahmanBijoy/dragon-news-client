import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ListGroup from "react-bootstrap/ListGroup";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaWhatsapp,
  FaTwitch,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import BrandCarousel from "../BrandCarousel/BrandCarousel";

const RightSideNav = () => {
  const { providerLogin } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((res) => {
        const user = res.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <ButtonGroup vertical className="mb-4">
        <Button
          onClick={handleGoogleSignIn}
          variant="outline-primary"
          className="mb-3 rounded shadow-sm"
        >
          {" "}
          <FaGoogle></FaGoogle> Login with Google{" "}
        </Button>
        <Button className="shadow-sm rounded" variant="outline-dark">
          {" "}
          <FaGithub></FaGithub> Login with GitHub
        </Button>
      </ButtonGroup>
      <div className="mb-3">
        <h5>Find us on</h5>
        <ListGroup className="shadow-sm">
          <ListGroup.Item className="mb-">
            <FaFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item className="mb-">
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item className="mb-">
            <FaTwitch /> Twitch
          </ListGroup.Item>
          <ListGroup.Item className="mb-">
            <FaWhatsapp /> Whatsapp
          </ListGroup.Item>
          <ListGroup.Item className="mb-">
            <FaLinkedin /> Linkedin
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div className="shadow-sm">
        <BrandCarousel></BrandCarousel>
      </div>
    </div>
  );
};

export default RightSideNav;
