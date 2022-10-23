import React from "react";
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
import BrandCarousel from "../BrandCarousel/BrandCarousel";

const RightSideNav = () => {
  return (
    <div>
      <ButtonGroup vertical className="mb-3">
        <Button variant="outline-primary" className="mb-2">
          {" "}
          <FaGoogle></FaGoogle> Login with Google{" "}
        </Button>
        <Button variant="outline-dark">
          {" "}
          <FaGithub></FaGithub> Login with GitHub
        </Button>
      </ButtonGroup>
      <div className="mb-3">
        <h5>Find us on</h5>
        <ListGroup>
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
      <div>
        <BrandCarousel></BrandCarousel>
      </div>
    </div>
  );
};

export default RightSideNav;
