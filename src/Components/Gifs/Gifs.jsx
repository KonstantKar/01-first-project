import React, { useState } from "react";
import s from "./Gifs.module.scss";
import Modal from "./Modal/Modal";

const Gifs = () => {
  const [gifsData, setGifsData] = useState([
    {
      id: 1,
      title: "Гифка",
      img: "https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif",
    },
    {
      id: 2,
      title: "И ещё одна",
      img: "https://media.giphy.com/media/l0NwHXQy3kUSfFF60/giphy.gif",
    },
    {
      id: 3,
      title: "И ещё одна",
      img: "https://media.giphy.com/media/4esVwBJzJA2Vq/giphy.gif",
    },
  ]);

  const gifsElements = gifsData.map((el) => {
    return <Modal key={el.id} id={el.id} title={el.title} img={el.img} />;
  });

  return <div>{gifsElements}</div>;
};

export default Gifs;
