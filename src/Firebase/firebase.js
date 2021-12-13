// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHnn2taaz1kdgJkynvuQfqtWCot9XfWUk",
  authDomain: "burger-queen-ecf81.firebaseapp.com",
  projectId: "burger-queen-ecf81",
  storageBucket: "burger-queen-ecf81.appspot.com",
  messagingSenderId: "53553539515",
  appId: "1:53553539515:web:ffc5d0f54b3a935622bc9e",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
