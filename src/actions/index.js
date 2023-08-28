import { auth, provider } from '../firebase';
import { GoogleAuthProvider,signInWithPopup, getAuth } from "firebase/auth";
import { browserPopupRedirectResolver } from "firebase/auth";
import { SET_USER } from "../actions/actionType";


export const setUser = (payload) => ({
    type: SET_USER,
    user: payload,
})
export function signInAPI() {

    return (dispatch) => {
            signInWithPopup(auth, provider, browserPopupRedirectResolver)
            .then((payload) => {
                dispatch(setUser(payload.user))
                console.log(payload);
            })
            .catch((error) => alert(error));
    }
}