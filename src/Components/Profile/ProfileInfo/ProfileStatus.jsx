import { produceWithPatches } from "immer";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProfileStatus = (props) => {
  const [editMode, setEditMode] = useState(false);
  const dispatch = useDispatch();
  const status = useSelector((state) => state.profile.status);

  const onStatusChange = (e) => {
    props.updateStatus(e.target.value);
  };
  return (
    <div>
      {!editMode ? (
        <div>
          <span onClick={() => setEditMode(true)}>
            {status || "Введите статус"}
          </span>
        </div>
      ) : (
        <div>
          <input
            onChange={onStatusChange}
            autoFocus={true}
            onBlur={() => setEditMode(false)}
            value={status}
          />
        </div>
      )}
    </div>
  );
};
export default ProfileStatus;
