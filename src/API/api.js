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
    return instance.post(`/follow/${id}`, {}).then((responce) => {
      return responce.data;
    });
  },
};

export const unFollowAPI = {
  getAxiosUnfollow(id) {
    return instance.delete(`/follow/${id}`).then((responce) => {
      return responce.data;
    });
  },
};

export const authAPI = {
  getAxiosMyAccount() {
    return instance.get(`/auth/me`).then((responce) => {
      return responce.data;
    });
  },
};

export const profileAPI = {
  getAxiosProfile(userId) {
    return instance.get(`/profile/${userId}`).then((responce) => {
      return responce.data;
    });
  },
  getStatus(userId) {
    return instance.get(`/profile/status/${userId}`).then((responce) => {
      return responce.data;
    });
  },
  updateStatus(status) {
    return instance
      .put(`/profile/status`, { status: status })
      .then((responce) => {
        return responce.data;
      });
  },
};
