// firebase.js
// contains the Firebase context and provider

import React, { createContext, useEffect } from 'react'
import {firebaseConfig} from './Config';
import {initializeApp} from 'firebase/app'
import { useDispatch } from 'react-redux';
import { getDatabase, ref, onValue} from "firebase/database";
import { saveMounts } from '../state/actions/mount-actions';


// we create a React Context, for this to be accessible
// from a component later
const FirebaseContext = createContext(null)
export { FirebaseContext }

export default ({ children }) => {
    let firebase = {
        app: null,
        database: null
    }

    const dispatch = useDispatch();

    // check if firebase app has been initialized previously
    // if not, initialize with the config we saved earlier
        const app = initializeApp(firebaseConfig);
        firebase = {
            api: {
                getMounts
            }
        }

        function getMounts() {
            const db = getDatabase();
            const starCountRef = ref(db, '/');
            onValue(starCountRef, (snapshot) => {
              const data = snapshot.val();
              console.log(data)
              dispatch(saveMounts(data));
            });
        }
    

    return (
        <FirebaseContext.Provider value={firebase}>
            {children}
        </FirebaseContext.Provider>
    )
}