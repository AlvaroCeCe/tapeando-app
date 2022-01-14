import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, set } from "firebase/database";

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

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getDatabase();

export function getData() {
  const reference = ref(db, "ZONAS/");
  onValue(reference, (snapshot) => {
    console.log(snapshot.val());
  });
}
