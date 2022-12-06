import { Server } from './server';
import { checkIfUserIsLogIn, showLoginForm, showMainContent } from './helpers';
import type { IUser, IAlbum, IPhoto, DataBase } from './fetchedDataTypes';

import {
  container,
  mainContent,
  loginButton,
  loginForm,
  loginInput,
  passwordInput,
  loginInfo,
  logOutButton,
  userDataWrapper,
  userAlbumsWrapper,
  displayUserName,
  userPhotosWrapper,
} from './domElements/domElements';

const server = new Server();

const connectWithServer = async () => {
  const connected = await server.connect();

  return connected;
};

const greetingUser = (username: string) => {
  if (username) {
    if (displayUserName != null) {
      displayUserName.children[0].textContent = `Hey ${username}`;
    }
  }
};

const renderPhotos = (photos: IPhoto[]) => {
  const backButton = document.createElement('button');
  backButton.className = 'back-to-albums-button';
  backButton.textContent = 'Back to albums';

  backButton.addEventListener('click', () => {
    if (userAlbumsWrapper && userPhotosWrapper != null)
      userAlbumsWrapper.style.display = 'block';
      
  });

  userPhotosWrapper?.appendChild(backButton);

  for (const photo of photos) {
    const photoEl = document.createElement('img');

    photoEl.classList.add('photo');
    photoEl.src = photo.url;

    userPhotosWrapper?.appendChild(photoEl);

    if (userAlbumsWrapper != null) {
      userAlbumsWrapper.style.display = 'none';
    }
  }
};

export const renderAlbums = async (userId: number) => {
  const albums = await server.getAlbums(userId);

  const albumsHeader = document.createElement('div');
  albumsHeader.textContent = 'Your albums';
  albumsHeader.classList.add('albums-header');

  userAlbumsWrapper?.appendChild(albumsHeader);

  for (const album of albums) {
    const albumEl = document.createElement('div');
    albumEl.classList.add('album');
    albumEl.textContent = album.title;

    albumEl.addEventListener('click', async () => {
      const photos = await server.getPhotos(album.id);
      renderPhotos(photos);
    });
    userAlbumsWrapper?.appendChild(albumEl);
  }
};

const toggleDashboard = ({
  id,
  username,
}: {
  id: IUser['id'];
  username: IUser['username'];
}) => {
  if (userAlbumsWrapper?.classList.contains('hide')) {
    userAlbumsWrapper.classList.toggle('hide');
    userAlbumsWrapper.style.display = 'none';
  }

  renderAlbums(id);
  greetingUser(username);
};

const handleLogin = async (e: Event) => {
  e.preventDefault();
  const connected = await connectWithServer();

  if (connected) {
    if (loginInput && passwordInput) {
      const { isValid, user, message } = await server.login(
        loginInput.value,
        passwordInput.value,
      );

      if (isValid && user) {
        const { username, id } = user;
        showMainContent();
        toggleDashboard({ id, username });
      } else {
        loginInfo ? (loginInfo.textContent = message) : null;
      }
    }
  }
};
const handleLoggout = () => {
  document.cookie = 'User=; max-age=-; path=/;';
  showLoginForm();
};

window.addEventListener('load', checkIfUserIsLogIn);
logOutButton?.addEventListener('click', handleLoggout);
loginButton?.addEventListener('click', handleLogin);
