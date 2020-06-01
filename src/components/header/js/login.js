const googleUser = {};

function attachSignin(element) {
  auth2.attachClickHandler(element, {},
    (googleUser) => {
      document.getElementById('gUserName').innerText = googleUser.getBasicProfile().getName();
      document.getElementById('customBtn').classList.add('custom-google-button_disable');
      document.getElementById('sign-out').classList.add('header__button_able');
    }, (error) => {
      alert(JSON.stringify(error, undefined, 2)); // eslint-disable-line no-alert
    });
}

const startApp = function fn() {
  gapi.load('auth2', () => {
    auth2 = gapi.auth2.init({
      client_id: '183597621477-535vqiqt8qujkug1hhdr95te2sqcnbli.apps.googleusercontent.com',
      cookiepolicy: 'single_host_origin',
    });
    attachSignin(document.getElementById('customBtn'));
  });
};

function signOut() {
  const auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(() => {
    document.getElementById('customBtn').classList.remove('custom-google-button_disable');
    document.getElementById('sign-out').classList.remove('header__button_able');
  });
}

document.getElementById('sign-out').addEventListener('click', signOut);

startApp();
