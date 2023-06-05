import { useDispatch, useSelector } from "react-redux";
import News from "./News";
import { setNews } from "../../Redux/newsReducer";
import { useEffect } from "react";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";

const NewsContainer = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);

  const getNews = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => dispatch(setNews(data)));
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <PrivateRoute isAuth={isAuth} fallback={"/Login"}>
      <News />
    </PrivateRoute>
  );
};
export default NewsContainer;
