"use client";
import React from "react";
import { auth } from "@/configs/firebaseConfig";

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function Authentication({ children }) {
  const provider = new GoogleAuthProvider();

  const onSignInClick = () => {

    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log("User:"+user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log("Error: "+errorMessage)
      });
  };

  return (
    <div
      onClick={onSignInClick}
    >
      {children}
    </div>
  );
}

export default Authentication;
