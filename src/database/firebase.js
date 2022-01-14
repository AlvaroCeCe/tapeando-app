import * as firebase from "firebase";
import { Alert } from "react-native";

var firebaseConfig = {
  apiKey: "AIzaSyAbmovoqiTx73HBiJdDdkkULYzksu0DbZw",
  authDomain: "tapeando-762cd.firebaseapp.com",
  databaseURL:
    "https://tapeando-762cd-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tapeando-762cd",
  storageBucket: "tapeando-762cd.appspot.com",
  messagingSenderId: "315147524772",
  appId: "1:315147524772:web:3a46b070e1ebdf055fa431",
  measurementId: "G-VHKEM57W4T",
};

export default firebase;

// Initialize Firebase
export async function initialize() {
  if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
}
