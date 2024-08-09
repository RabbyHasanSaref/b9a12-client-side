import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth, onAuthStateChanged, signInWithEmailAndPassword,
    signInWithPopup, signOut,
    updateProfile
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import axios from "axios";

export const authContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const provider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const createGoogleUser = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const createUpdateProfile = (displayName, photoURL) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName,
            photoURL,
        });
    }

    const createLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const createLogout = () => {
        setLoading(true);
        return signOut(auth);
    }


    // -----------------------------------------
    const getToken = async email => {
        const { data } = await axios.post(`https://online-edu-bd-server-side.vercel.app/jwt`,{ email },{ withCredentials: true })
        return data;
    }

    const saveUser = async user => {
        const currentUser = {
            // image: user?.photoURL,
            email: user?.email,
            name: user?.displayName || user?.email.split('@')[0],
            role: 'student',
            status: 'accepted',
        };
        const { data } = await axios.put(
            'https://online-edu-bd-server-side.vercel.app/user',
            currentUser
        );
        return data;
    }

    // ------------------------------------------------


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('onAuthStateChanged', currentUser);
            setUser(currentUser);
            if (currentUser) {
                getToken(currentUser.email)
                saveUser(currentUser)
            }
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }, []);

    const authinfo = {
        createUser,
        createGoogleUser,
        createUpdateProfile,
        createLogin,
        createLogout,
        user,
        loading
    }

    return (
        <authContext.Provider value={authinfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;
