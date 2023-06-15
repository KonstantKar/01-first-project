import React, { useEffect, useState } from "react";
import SingleNews from "./SingleNews";
import { useParams } from "react-router-dom";
import Loader from "../../Loader/Loader";

const SingleNewsContainer: React.FC = () => {
  const [state, setState] = useState<null>(null);
  const { newsId } = useParams<{ newsId: string }>();

  const getNews = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${newsId}`)
      .then((response) => response.json())
      .then((data) => setState(data));
  };

  useEffect(() => {
    getNews();
  }, [newsId]);

  if (!state) {
    // Показываем загрузочный индикатор или другой компонент ожидания
    return <Loader />;
  }

  return <SingleNews state={state} />;
};

export default SingleNewsContainer;
