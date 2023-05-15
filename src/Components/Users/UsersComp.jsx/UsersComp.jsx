import s from "./UsersComp.module.css";
const UsersComp = (props) => {
  let followAC = () => {
    props.followAC(props.id);
  };
  let unFollowAC = () => {
    props.unFollowAC(props.id);
  };
  return (
    <div className={s.item}>
      <img src={props.fotoURL} alt="error"></img>
      <div>
        {props.followed ? (
          <button onClick={unFollowAC}>Follow</button>
        ) : (
          <button onClick={followAC}>Unfollow</button>
        )}
      </div>
      <span>
        <span>
          <div>{props.fullName}</div>
          <div>{props.status}</div>
        </span>
      </span>
      <span>
        <div>{props.location.country}</div>
        <div>{props.location.city}</div>
      </span>
    </div>
  );
};
export default UsersComp;
