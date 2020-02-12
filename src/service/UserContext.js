const userContext = {
  email(){
    if(window.sessionStorage['currentUser'])
      return JSON.parse(window.sessionStorage.getItem('currentUser')).email;

      return null;
  },
  userType(){
    if(window.sessionStorage['currentUser'])
      return JSON.parse(window.sessionStorage.getItem('currentUser')).role;

      return null;
  },
  loggedIn(){
    if(window.sessionStorage['currentUser'])
      return true;

      return false;
  },

  onUserLogIn(userData) {
    this.email = userData.email;
    this.userType = userData.userType;
    this.loggedIn = true;
  },

  onUserLogOut() {
    this.email = "";
    this.userType = "";
    this.loggedIn = false;
  }
};

export default userContext;
