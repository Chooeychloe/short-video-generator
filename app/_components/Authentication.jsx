"use client";
import React from "react";
import { auth } from "@/configs/firebaseConfig";

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function Authentication({ children }) {
  const provider = new GoogleAuthProvider();

  const onSignInClick = () => {
    console.log("zzz");

    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  return (
    <div
      onClick={() => {

        signInWithPopup(auth, provider)
          .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log(errorMessage)
          });
      }}
    >
      {children}
    </div>
  );
}

export default Authentication;
