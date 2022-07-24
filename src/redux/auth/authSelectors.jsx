const getIsLoggedIn = state => state?.auth.isLoggedIn;

const getUsername = state => state?.auth.user.name;

const getToken = state => state?.auth.token;

const getIsRefresh = state => state?.auth.isRefresh;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getToken,
  getIsRefresh,
};
export default authSelectors;
