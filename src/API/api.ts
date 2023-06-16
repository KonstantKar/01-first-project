import axios, { AxiosInstance, AxiosResponse } from "axios";
import { User } from "../Redux/types";

interface ResponseData<T> {
  data: T;
  resultCode: ResultCodesEnum;
  // Дополнительные свойства ответа
}

//Перечисление строк или чисел - enum
export enum ResultCodesEnum {
  Success = 0,
  Error = 1,
}

const instance: AxiosInstance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0`,
  headers: {
    "API-KEY": "6b6ecac8-d7f7-4477-87bb-015031017fed",
  },
});

export const usersAPI = {
  getAxiosUsers(page: number, pageSize: number) {
    return instance
      .get(`/users?page=${page}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
};

export const followAPI = {
  getAxiosFollow(id: number): Promise<ResponseData<{}>> {
    return instance
      .post(`/follow/${id}`, {})
      .then((response: AxiosResponse<ResponseData<{}>>) => {
        return response.data;
      });
  },
};

export const unFollowAPI = {
  getAxiosUnfollow(id: number): Promise<ResponseData<{}>> {
    return instance
      .delete(`/follow/${id}`)
      .then((response: AxiosResponse<ResponseData<{}>>) => {
        return response.data;
      });
  },
};

export const authAPI = {
  getAxiosMyAccount(): Promise<ResponseData<User>> {
    return instance
      .get(`/auth/me`)
      .then((response: AxiosResponse<ResponseData<User>>) => {
        return response.data;
      });
  },
};

export const profileAPI = {
  getAxiosProfile(userId: number): Promise<ResponseData<User>> {
    return instance
      .get(`/profile/${userId}`)
      .then((response: AxiosResponse<ResponseData<User>>) => {
        return response.data;
      });
  },
  getStatus(userId: number): Promise<ResponseData<string>> {
    return instance
      .get(`/profile/status/${userId}`)
      .then((response: AxiosResponse<ResponseData<string>>) => {
        return response.data;
      });
  },
  updateStatus(status: string): Promise<ResponseData<{}>> {
    return instance
      .put(`/profile/status`, { status: status })
      .then((response: AxiosResponse<ResponseData<{}>>) => {
        return response.data;
      });
  },
  savePhoto(photoFile: File): Promise<ResponseData<any>> {
    const formData = new FormData();
    formData.append("image", photoFile);
    return instance
      .put(`/profile/photo`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response: AxiosResponse<ResponseData<{}>>) => {
        return response.data;
      });
  },

  changeContacts(profile: any): Promise<ResponseData<{}>> {
    return instance
      .put(`/profile`, profile)
      .then((response: AxiosResponse<ResponseData<{}>>) => {
        return response.data;
      });
  },
};

export const loginAPI = {
  getAxiosLogin(values: {
    username: string;
    password: string;
  }): Promise<AxiosResponse<ResponseData<{}>>> {
    return instance.post(`/auth/login`, {
      email: values.username,
      password: values.password,
      rememberMe: true,
    });
  },
};

export const unLoginAPI = {
  deleteAxiosLogin(): Promise<AxiosResponse<ResponseData<{}>>> {
    return instance.delete(`/auth/login`);
  },
};
