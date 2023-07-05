import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateStatusTC } from "../../../Redux/profileReducer";
import { RootState } from "../../../Redux/redux-store";
import { Input } from "antd";

const ProfileStatus: React.FC = () => {
  const [editMode, setEditMode] = useState(false);
  const dispatch = useDispatch();
  const status = useSelector((state: RootState) => state.profile.status);

  const onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch<any>(updateStatusTC(e.target.value));
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
          <Input
            onChange={onStatusChange}
            autoFocus
            onBlur={() => setEditMode(false)}
            value={status}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatus;
