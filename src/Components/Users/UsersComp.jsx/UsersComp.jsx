import s from "./UsersComp.module.css";
import userPhoto from "../../../assets/images/ava.png";
const UsersComp = (props) => {
  let follow = () => {
    props.follow(props.id);
  };
  let unFollow = () => {
    props.unFollow(props.id);
  };
  return (
    <div className={s.item}>
      <img
        src={props.fotoURL != null ? props.fotoURL : userPhoto}
        alt="error"
      ></img>
      <div>
        {props.followed ? (
          <button onClick={unFollow}>Follow</button>
        ) : (
          <button onClick={follow}>Unfollow</button>
        )}
      </div>
      <span>
        <span>
          <div>{props.fullName}</div>
          <div>{props.status}</div>
        </span>
      </span>
      <span>
        <div>{"Страна: - "}</div>
        <div>{"Город: -"}</div>
      </span>
    </div>
  );
};
export default UsersComp;
