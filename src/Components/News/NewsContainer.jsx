import { useDispatch, useSelector } from "react-redux";
import News from "./News";
import { setNewsAC } from "../../Redux/newsReducer";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const NewsContainer = () => {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news.news);
  const { newsId } = useParams();

  const getNews = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setNews(data)); // Ограничение до первых 30 элементов до тех пор, пока не пойму ПОЧЕМУ НЕ РАБОТАЕТ useParams
  };

  useEffect(() => {
    getNews();
  }, []); // Обновление профиля при изменении значения параметра

  const setNews = (loadNews) => {
    dispatch(setNewsAC(loadNews));
  };
  return <News news={news} />;
};
export default NewsContainer;
