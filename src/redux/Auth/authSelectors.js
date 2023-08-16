// ----------------- TOKENS -------------
export const getAccessToken = state => state.auth.accessToken;

// ---------------- USER INFO -------------
export const getEmail = state => state.auth.email;
export const getUserId = state => state.auth.userData.id;

//  --------------- ADDITIONAL ------------
export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getIsUserFetching = state => state.auth.isUserFetching;
export const isModalOpen = (state) => state.auth.isModalOpen;