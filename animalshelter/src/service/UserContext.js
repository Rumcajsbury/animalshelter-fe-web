const userContext = {
  email: "",
  userType: "",
  loggedIn: false,

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
