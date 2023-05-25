import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0`,
  headers: {
    "API-KEY": "6b6ecac8-d7f7-4477-87bb-015031017fed",
  },
});

export const usersAPI = {
  getAxiosUsers(page, pageSize) {
    return instance
      .get(`/users?page=${page}&count=${pageSize}`)
      .then((responce) => {
        return responce.data;
      });
  },
};

export const followAPI = {
  getAxiosFollow(id) {
    return instance
      .post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {})
      .then((responce) => {
        return responce.data;
      });
  },
};

export const unfollowAPI = {
  getAxiosUnfollow(id) {
    return instance
      .delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
      .then((responce) => {
        return responce.data;
      });
  },
};