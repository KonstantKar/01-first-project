//-------------------------------------------------------authReducer----------------------------------------------------
export interface AuthState {
  data: UserData;
  isAuth: boolean;
  isInitialized: boolean;
}

export interface UserData {
  id: number | null;
  email: string | null;
  login: string | null;
}

//------------------------------------------------------dialogsReducer---------------------------------------------
export interface dialogState {
  dialogsData: DialogData[];
  messageData: MessageData[];
  newMessageText: any;
}
export interface DialogData {
  id: number;
  name: string;
}

export interface MessageData {
  id: number;
  message: string;
}

//-----------------------------------------------------musicReducer-------------------------------------------------
export interface musicState {
  songs: songs[];
}
export interface songs {
  id: number;
  songName: string;
  artist: string;
  followed: boolean;
}
//-------------------------------------------------------newsReducer----------------------------------------------
export interface newsState {
  news: newsData[];
}
export interface newsData {
  userId: number;
  id: number;
  title: string;
  body: string;
}

//-------------------------------------------------------profileTypes--------------------------------------------
export interface ProfileState {
  postData: PostData[];
  newPostText: string;
  profile: Profile | null;
  status: string;
}

export interface PostData {
  id: number;
  message: string;
  likes: string;
}
export interface Profile {
  photos: Photos; // Type of `photos` should be defined
}

//-------------------------------------------------------sideBarReducer--------------------------------------------
export interface sidebarState {
  navBarData: navBarData[];
}
export interface navBarData {
  id: string;
  navName: string;
  to: string;
}

//--------------------------------------------------------usersTypes-----------------------------------------------
export interface UsersState {
  users: User[];
  hideButton: boolean;
  currentPage: number;
}

export interface User {
  id: number;
  name: string;
  status: string;
  photos: Photos;
  followed: boolean;
}

//Также используется в profileReducer для получения фотографии
export interface Photos {
  small: null;
  large: null;
}

//----------------------------------------------------shopTypes----------------------------------------------
export interface ShopState {
  catalog: ShopItem[];
}
export interface ShopItem {
  id: number;
  productName: string;
  img: any;
  price: number;
  description: string;
}
