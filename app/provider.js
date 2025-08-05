"use client";
import React, { useEffect, useState, useContext } from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/configs/firebaseConfig';
import { AuthContext } from './_context/AuthContext';
import { ConvexProvider, ConvexReactClient, useMutation } from "convex/react";
import { api } from '@/convex/_generated/api';

  function Provider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const CreateUser = useMutation(api.users.CreateNewUser);

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, async (user) => {
        setUser(user);
        setLoading(false);

        const result = await CreateUser ({
          name: user?.displayName,
          email: user?.email,
          photoURL: user?.photoURL,
        })
      });
      return () => unsubscribe();
    }, []);

    return (
      <div>
          <AuthContext.Provider value={{ user, loading }}>
            <NextThemesProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </NextThemesProvider>
          </AuthContext.Provider>
      </div>

    );
  }

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export default Provider;
