import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const News = () => {
  const news = useLoaderData();
  console.log(news);
  const { title, details, image_url, category_id } = news;
  return (
    <Card className="shadow">
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title className="text-primary">{title}</Card.Title>
        <Card.Text className="text-secondary">{details}</Card.Text>
        <Link to={`/category/${category_id}`}>
          <Button className="w-100" variant="primary">All news in this category</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default News;
