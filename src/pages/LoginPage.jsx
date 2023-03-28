import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google"; //ContextApi
import jwt_decode from "jwt-decode";
import { SignInWithGitHub } from "../services/firebase-config";
import { CONSTANTS } from "../configurations/constants";
import { AddItem } from "../services/local-storage";

export const LoginPage = ({ setIsLogged }) => {
  return (
    <GoogleOAuthProvider clientId={CONSTANTS.GOOGLE_CLIENT}>
      <button
        onClick={() => {
          SignInWithGitHub()
            .then((result) => {
              AddItem(CONSTANTS.USER_KEY, result);
              setIsLogged(true);
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
          setIsLogged(true);
        }}
        onError={() => {
          setIsLogged(false);
          console.log("Login Failed");
        }}
      />
    </GoogleOAuthProvider>
  );
};
