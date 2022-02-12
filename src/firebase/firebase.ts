import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from "./Config";

import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getDatabase } from 'firebase/database';




// Initialize Firebase

export const app = initializeApp({
    // The database URL depends on the location of the database
    databaseURL: "https://wowmounts-default-rtdb.europe-west1.firebasedatabase.app/",
    ...firebaseConfig
  });
  
//   // As an admin, the app has access to read and write all data, regardless of Security Rules
//   var db = getDatabase(app);
//   var ref = db.ref("restricted_access/secret_document");
//   ref.once("value", function(snapshot) {
//     console.log(snapshot.val());
//   });

//export const db = getDatabase();

export const analytics = getAnalytics(app);