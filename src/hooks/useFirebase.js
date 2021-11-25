import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut
} from "firebase/auth";
import firebaseApp from '../Firebase/firebase.init';
firebaseApp();

const useFirebase = () => {
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // SIGN IN WITH GOOGLE

  const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider)
  };

  // GET THE SIGNED IN USER

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (signedInUser) => {
      if(signedInUser) {
        setUser(signedInUser);
      } else {
        setUser([]);
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, []);

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser([]);
      })
      .finally(() => setIsLoading(false))
  }
  return {
    user,
    isLoading,
    signInUsingGoogle,
    logOut
  }
}

export default useFirebase;