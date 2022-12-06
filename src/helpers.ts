import { renderAlbums } from 'src';
import {
  mainContent,
  loginInput,
  passwordInput,
  logOutButton,
  userAlbumsWrapper,
  greetingUserHolder,
  userDataHolder,
  displayUserName,
  userPhotosWrapper
  
} from './domElements/domElements';

export const showMainContent = () => {
  if (mainContent && loginInput && passwordInput&& logOutButton && userAlbumsWrapper && userDataHolder && displayUserName && userPhotosWrapper != null) {
    mainContent.style.display = 'none';
    displayUserName.style.display= 'flex';

    userAlbumsWrapper.style.display = 'block';
    userPhotosWrapper.style.display = 'block'
    logOutButton.style.display = 'block';

    loginInput.value = '';
    passwordInput.value = '';
  }
};

export const showLoginForm = () => {
  if (mainContent && loginInput && passwordInput&& logOutButton && userAlbumsWrapper&& greetingUserHolder && userPhotosWrapper != null) {
    mainContent.style.display = 'block';
    logOutButton.style.display = "none";
    
    userAlbumsWrapper.style.display = 'none';
    userPhotosWrapper.style.display = 'none';

    greetingUserHolder.textContent = '';
    loginInput.value = '';
    passwordInput.value = '';
  }
};


export const checkIfUserIsLogIn = () => {
  const userCookie = document.cookie;
  const elementsOfCookie = userCookie.split('=');
  const emptyValueCookie = elementsOfCookie[1];

  if (emptyValueCookie) {
    showMainContent();
  } else {
    showLoginForm();
  }
};
