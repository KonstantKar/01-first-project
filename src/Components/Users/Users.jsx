import s from "./Users.module.css";
import React from "react";
import UsersComp from "./UsersComp.jsx/UsersComp";

const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        fotoURL:
          "http://cdn.vole.io/user/118935/3d328209-f2d9-4ca6-90db-026dd7c3ba6c.jpg",
        followed: false,
        fullName: "Dmitry",
        status: "am boss",
        location: { city: "Minks", country: "Belarus" },
      },
      {
        id: 2,
        fotoURL:
          "http://cdn.vole.io/user/118935/3d328209-f2d9-4ca6-90db-026dd7c3ba6c.jpg",
        followed: false,
        fullName: "Sacha",
        status: "am boss too",
        location: { city: "Kiev", country: "Ukraine" },
      },
      {
        id: 3,
        fotoURL:
          "http://cdn.vole.io/user/118935/3d328209-f2d9-4ca6-90db-026dd7c3ba6c.jpg",
        followed: true,
        fullName: "Kostya",
        status: "am dungeon master",
        location: { city: "Moscow", country: "Russia" },
      },
      {
        id: 4,
        fotoURL:
          "http://cdn.vole.io/user/118935/3d328209-f2d9-4ca6-90db-026dd7c3ba6c.jpg",
        followed: false,
        fullName: "Dmitry",
        status: "am boss",
        location: { city: "Minks", country: "Belarus" },
      },
      {
        id: 5,
        fotoURL:
          "http://cdn.vole.io/user/118935/3d328209-f2d9-4ca6-90db-026dd7c3ba6c.jpg",
        followed: false,
        fullName: "Dmitry",
        status: "am boss",
        location: { city: "Minks", country: "Belarus" },
      },
      {
        id: 6,
        fotoURL:
          "http://cdn.vole.io/user/118935/3d328209-f2d9-4ca6-90db-026dd7c3ba6c.jpg",
        followed: false,
        fullName: "Dmitry",
        status: "am boss",
        location: { city: "Minks", country: "Belarus" },
      },
      {
        id: 7,
        fotoURL:
          "http://cdn.vole.io/user/118935/3d328209-f2d9-4ca6-90db-026dd7c3ba6c.jpg",
        followed: false,
        fullName: "Dmitry",
        status: "am boss",
        location: { city: "Minks", country: "Belarus" },
      },
    ]);
  }
  let usersElements = props.users.map((el) => {
    return (
      <UsersComp
        id={el.id}
        status={el.status}
        followed={el.followed}
        fullName={el.fullName}
        location={el.location}
        fotoURL={el.fotoURL}
        followAC={props.follow}
        unFollowAC={props.unfollow}
      />
    );
  });
  return (
    <div className={s.usersBlock}>
      <div className={s.users}>{usersElements}</div>
    </div>
  );
};
export default Users;
