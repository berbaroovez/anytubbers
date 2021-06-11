import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  FC,
} from "react";
import firebase from "./firebase";
import Router from "next/router";
import { createUser } from "./db";

type userType = {
  uid: any;
  email: any;
};

const authContext = createContext<firebase.User | null>(null);

export const AuthProvider: FC = ({ children }) => {
  const auth = useProviderAuth();
  return <authContext.Provider value={null}>{children}</authContext.Provider>;
};

export const useAuth = () => {
  return useContext(authContext);
};

function useProviderAuth() {
  const [user, setUser] = useState<userType | null>(null);

  const handleUser = async (rawUser: firebase.User | null) => {
    if (rawUser) {
      const user = await formatUser(rawUser);
      const { ...userWithoutToken } = user;
      //   const { token, ...userWithoutToken } = user;
      createUser(user.uid, userWithoutToken);

      setUser(user);
      return user;
    } else {
      setUser(null);
      return false;
    }
  };

  const signin = async (email: string, password: string) => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(async (response) => {
        // handleUser(response.user);
        Router.push("/dashboard");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const signup = (email: string, password: string) => {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        if (response.user != null) {
          handleUser(response.user);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const signout = () => {
    Router.push("/");
    return firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(null);
      });
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(handleUser);

    return () => unsubscribe();
  }, []);

  return {
    user,
    signin,
    signup,
    signout,
  };
} // end of useAuthProvider

const formatUser = async (user: firebase.User) => {
  console.log(user);
  return {
    uid: user.uid,
    email: user.email,
    // token: user.ya,
  };
};
