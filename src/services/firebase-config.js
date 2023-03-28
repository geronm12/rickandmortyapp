import { initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBrjcwp57mDBQ7I7zt9OwV77Rd8EEnIxw8",
  authDomain: "rickandmortyapp-381922.firebaseapp.com",
  projectId: "rickandmortyapp-381922",
  storageBucket: "rickandmortyapp-381922.appspot.com",
  messagingSenderId: "627948066632",
  appId: "1:627948066632:web:eb620b02a0d2ab7bfac57d",
};

const app = initializeApp(firebaseConfig);

export async function SignInWithGitHub() {
  const githubProvider = new GithubAuthProvider();
  githubProvider.setCustomParameters(firebaseConfig);
  const auth = getAuth();
  return await signInWithPopup(auth, githubProvider);
}
