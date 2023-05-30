import SingleNews from "./SingleNews";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const SingleNewsContainer = () => {
  //Вместо Selectora и Dispatcha я использую локальный state чтобы при возврате из определённой новости правильно map-ился массив данных, ибо если использовать их, то при выходе из новости будет говориться, что News не массив
  //const news = useSelector((state) => state.news.news);
  const [state, setState] = useState([]);
  const { newsId } = useParams();
  const getNews = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${newsId}`)
      .then((response) => response.json())
      .then((data) => setState(data));
  };

  useEffect(() => {
    getNews();
  }, []);

  return <SingleNews state={state} />;
};
export default SingleNewsContainer;
