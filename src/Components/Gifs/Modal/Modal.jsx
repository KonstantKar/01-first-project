import React, { useState } from "react";
import s from "./Modal.module.scss";
const Modal = ({ title, img }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {
        <div className={s.gifsBoard}>
          <button className={s.openModalBtn} onClick={() => setOpen(true)}>
            ✨ {title}
          </button>
          <div className={`${s.overlay} ${s.animated} ${open ? s.show : ""}`}>
            <div className={s.modal}>
              <svg height="200" viewBox="0 0 200 200" width="200">
                <title />
                <path
                  d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z"
                  onClick={() => setOpen(false)}
                />
              </svg>
              <img src={img} />
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default Modal;
