import profileReducer, { addPost, deletePost } from "./profileReducer";

let state = {
  postData: [
    { id: 1, message: "Hi,how are you", likes: "10" },
    { id: 2, message: "MY FIRST POST", likes: "20" },
    { id: 3, message: "Yop,Yan", likes: "20" },
    { id: 4, message: "LMAO KEK", likes: "20" },
  ],
};

test(" length of new-post should be incremented", () => {
  // test data
  let action = addPost("Текст поста");
  //action
  let newState = profileReducer(state, action);
  //expectation
  expect(newState.postData.length).toBe(5);
});

test(" likes of new-post should be incremented", () => {
  // test data
  let action = addPost("Текст поста");
  //action
  let newState = profileReducer(state, action);
  //expectation
  expect(newState.postData[4].likes).toBe(0);
});

test(" text of new-post should be -", () => {
  // test data
  let action = addPost();
  //action
  let newState = profileReducer(state, action);
  //expectation
  expect(newState.postData[4].message).toBe();
});

test("after deleting length of postData should be decrement ", () => {
  // test data
  let action = deletePost(1);
  //action
  let newState = profileReducer(state, action);
  //expectation
  expect(newState.postData.length).toBe(3);
});
