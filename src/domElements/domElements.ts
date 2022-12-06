const container = document.querySelector<HTMLDivElement>('.container');
const mainContent = document.querySelector<HTMLDivElement>('.main-content');
const loginForm = document.querySelector<HTMLFormElement>('.login-form');
const loginInput = document.querySelector<HTMLInputElement>('.login-input');
const passwordInput = document.querySelector<HTMLInputElement>('.password-input');
const loginButton = document.querySelector<HTMLButtonElement>('.login-button');
const loginInfo = document.querySelector<HTMLParagraphElement>('.show-login-info');
const logOutButton = document.querySelector<HTMLButtonElement>('.log-out-button');
const userDataWrapper = document.querySelector<HTMLDivElement>('.user-data')
const userAlbumsWrapper = document.querySelector<HTMLDivElement>(".user-albums-wrapper");
const userPhotosWrapper = document.querySelector<HTMLDivElement>(".user-photos-wrapper")
const displayUserName = document.querySelector<HTMLDivElement>(".display-user-name");
const userDataHolder = document.querySelector<HTMLDivElement>(".user-data-holder");
const greetingUserHolder = document.querySelector<HTMLDivElement>(".user-data");
export {
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
  userPhotosWrapper,
  displayUserName,
  greetingUserHolder,
  userDataHolder,
  
};
