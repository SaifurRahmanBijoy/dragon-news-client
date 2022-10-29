import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";
import NewsSummaryCard from "../../Shared/NewsSummaryCard/NewsSummaryCard";

const Home = () => {
  const allNews = useLoaderData();

  useTitle("Home");

  return (
    <div>
      <h2>Dragon News Home ({allNews.length} news so far)</h2>
      {allNews.map((news) => (
        <NewsSummaryCard key={news._id} news={news} />
      ))}
    </div>
  );
};

export default Home;
