import React, { useContext, useEffect } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google"; //ContextApi
import jwt_decode from "jwt-decode";
import { SignInWithGitHub } from "../services/firebase-config";
import { CONSTANTS } from "../configurations/constants";
import { AddItem, GetItem } from "../services/local-storage";
import { DataProvider } from "../context/DataContext";
import { useLocation, useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const { sesion } = useContext(DataProvider);
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    const item = GetItem(CONSTANTS.USER_KEY);
    if (item) {
      sesion.setIsLogged(true);
      navigate(state ? state.pathname : "/");
    }
  }, []);

  return (
    <GoogleOAuthProvider clientId={CONSTANTS.GOOGLE_CLIENT}>
      <button
        onClick={() => {
          SignInWithGitHub()
            .then((result) => {
              AddItem(CONSTANTS.USER_KEY, result);
              sesion.setIsLogged(true);
              navigate(state ? state.pathname : "/");
            })
            .catch((err) => console.log(err));
        }}
      >
        Iniciar Sesion Con Github
      </button>
      <GoogleLogin
        onSuccess={({ credential }) => {
          const resultado = jwt_decode(credential);
          AddItem(CONSTANTS.USER_KEY, resultado);
          sesion.setIsLogged(true);
          navigate(state ? state.pathname : "/");
        }}
        onError={() => {
          sesion.setIsLogged(false);

          console.log("Login Failed");
        }}
      />
    </GoogleOAuthProvider>
  );
};
