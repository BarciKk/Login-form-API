interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  adress: Object;
  phone: string;
  webside: string;
  company: Object;
}

interface IPhoto {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

interface IAlbum {
  userId: number;
  id: number;
  title: string;
}
interface DataBase {
users: IUser[],
albums: IAlbum[],
photos: IPhoto[],
}
export enum Entity {
  users = "users",
  albums = "albums",
  photos = "photos"
}

export type { IUser, IAlbum, IPhoto,DataBase};
