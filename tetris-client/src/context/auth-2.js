export const setLocalStorageUser = (user) => {
  localStorage.setItem("user", user?.email);
};

export const logoutUser = () => {
  localStorage.removeItem("user");
};

export const getLocalStorageUser = () => {
  return localStorage.getItem("user");
};
