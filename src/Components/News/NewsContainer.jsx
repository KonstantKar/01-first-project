import { useDispatch, useSelector } from "react-redux";
import News from "./News";
import { setNewsAC } from "../../Redux/newsReducer";
import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";

const NewsContainer = () => {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news.news);
  const isAuth = useSelector((state) => state.auth.isAuth);
  const { newsId } = useParams();

  const getNews = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setNews(data));
  };

  useEffect(() => {
    getNews();
  }, []); // Обновление профиля при изменении значения параметра

  const setNews = (loadNews) => {
    dispatch(setNewsAC(loadNews));
  };

  if (isAuth === false) return <Navigate to={"/Login"} />;

  return <News news={news} />;
};
export default NewsContainer;
