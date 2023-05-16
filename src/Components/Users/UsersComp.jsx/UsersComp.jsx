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
        <div>{"props.location.country"}</div>
        <div>{"props.location.city"}</div>
      </span>
    </div>
  );
};
export default UsersComp;
