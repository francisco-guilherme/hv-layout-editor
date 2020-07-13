const AuthActions = {
  SET_IS_AUTHED: "@@auth/SET_IS_AUTHED",
  SET_AUTH_STATUS: "@@auth/SET_AUTH_STATUS"
};

const setIsAuthed = isAuthed => ({
  type: AuthActions.SET_IS_AUTHED,
  isAuthed
});

const setAuthStatus = authStatus => ({
  type: AuthActions.SET_AUTH_STATUS,
  authStatus
});

export { AuthActions, setIsAuthed, setAuthStatus };
