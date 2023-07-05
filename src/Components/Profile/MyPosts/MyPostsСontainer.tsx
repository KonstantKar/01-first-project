import React, { useRef } from "react";
import { Button, Input, List, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  addPost,
  deletePost,
  updateNewPostText,
} from "../../../Redux/profileReducer";
import { RootState } from "../../../Redux/redux-store";
import Post from "./Post/Post";

const { TextArea } = Input;
const { Title } = Typography;

const MyPostsContainer: React.FC = () => {
  const dispatch = useDispatch();
  const postData = useSelector((state: RootState) => state.profile.postData);
  const newPostText = useSelector(
    (state: RootState) => state.profile.newPostText
  );

  const onAddPost = () => {
    dispatch(addPost());
  };

  const newPostTextArea = useRef<any>(null);

  const onPostChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    dispatch(updateNewPostText(text));
  };

  return (
    <div>
      <Title level={3}>My Posts</Title>
      <div>
        <TextArea
          onChange={onPostChange}
          ref={newPostTextArea}
          value={newPostText}
          autoSize={{ minRows: 2, maxRows: 6 }}
        />
      </div>
      <div>
        <Button type="primary" onClick={onAddPost}>
          Add Post
        </Button>
      </div>
      <div>
        <List
          itemLayout="vertical"
          size="large"
          dataSource={postData}
          renderItem={(el) => (
            <List.Item>
              <Post
                key={el.id}
                message={el.message}
                like={el.likes}
                deletePost={() => dispatch(deletePost(el.id))}
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

//Так было до введения antd
/* 
let postElement = postData.map((el) => {
  return (
    <Post
      key={el.id}
      message={el.message}
      like={el.likes}
      deletePost={() => dispatch(deletePost(el.id))}
    />
  );
}); */

export default MyPostsContainer;
