export const TOKEN_KEY = '@jobsdone-token';
export const ID_KEY = '@jobsdone-id';

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const login = (token, id) => {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(ID_KEY, id);
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(ID_KEY);
};
