import { loginButton } from './domElements/domElements';
import { fetchData } from './fetchData';
import { DataBase, IUser, IAlbum, IPhoto, Entity } from './fetchedDataTypes';
import { findUser } from './findUser';

export class Server {
  private _dataBase: DataBase = {
    [Entity.users]: [],
    [Entity.albums]: [],
    [Entity.photos]: [],
  };
  private _findUser = (email: string) => {
    return new Promise<IUser | undefined>(resolve => {
      const user = this._dataBase.users.find(user => user.email === email);
      
      resolve(user);
    });
  };

  public async connect() {
    const [users, albums, photos] = await Promise.all([
      fetchData<IUser[]>(Entity.users),
      fetchData<IAlbum[]>(Entity.albums),
      fetchData<IPhoto[]>(Entity.photos),
    ]);
  

    if (!!users.length && !!albums.length && !!photos.length) {
      this._dataBase = {
        users,
        albums,
        photos,
      };
      return true;
    }
    return false;
  }

  public async login(email: IUser['email'], password: IUser['username']) {
    const user = await this._findUser(email);
    
    if (!user || user.username !== password)
      return { isValid: false, message: 'Unauthorized' };
  
      
    document.cookie = `User = ${user.email};max-age =86400;path=/;`;
    return {
      user,
      isValid: true,
      message:"Logged"
    };
  }
  
  public getAlbums(userId: IUser['id']) {
    return new Promise<IAlbum[]>(resolve => {
      const albums = this._dataBase.albums.filter(
        album => album.userId === userId,
      );

      resolve(albums);
    });
  }

  public getPhotos(albumId:IAlbum['id']) {
    return new Promise<IPhoto[]>(resolve => {
      const photos = this._dataBase.photos.filter(
        photo => photo.albumId === albumId,
      );

      resolve(photos);
    });
  }
}

/* type Test = "dupa" | "typescript"

const tst: Record<Test,number> = {
  dupa: 20,
  typescript: 20
}


enum TstEnum {
  dupa = "dupa",
  typescript = "typescript"
}

const tst2:{[key in Test]: number} = {
  dupa: 20,
  typescript:321
}
 */