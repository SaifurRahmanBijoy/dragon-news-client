import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import { FaRegBookmark, FaShareAlt, FaStar, FaEye } from "react-icons/fa";

const NewsSummaryCard = ({ news }) => {
  const { _id, title, total_view, thumbnail_url, rating, author, details } =
    news;
  console.log(news);
  return (
    <Card className="my-4 shadow">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <Image
            className="me-2 my-1"
            roundedCircle
            src={author?.img}
            style={{ height: "60px" }}
          ></Image>
          <div>
            <p className="mb-0">{author?.name}</p>
            <small className="mb-0">{author?.published_date}</small>
          </div>
        </div>
        <div>
          <FaRegBookmark className="me-2"></FaRegBookmark>
          <FaShareAlt></FaShareAlt>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="" src={thumbnail_url} />
        <Card.Text>
          {details.length > 200 ? (
            <p>
              {details.slice(0, 200) + "..."}{" "}
              <Link to={`/news/${_id}`}>Read more</Link>
            </p>
          ) : (
            <p>{details}</p>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between px-3">
        <div>
          <p className="d-flex align-items-center m-0">
            <FaStar className="me-1 text-warning"></FaStar>
            <small className="m-0">{rating.number}</small>
          </p>
        </div>
        {total_view !== null && (
          <>
            <p className="d-flex align-items-center m-0">
              <FaEye className="me-1 text-primary"></FaEye>
              <small className="m-0">{total_view}</small>
            </p>
          </>
        )}
      </Card.Footer>
    </Card>
  );
};

export default NewsSummaryCard;
