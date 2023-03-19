// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAug2XVEdh4r6FdNExZBxqxXV1eM7rTEWY",
    authDomain: "typing-speed-49f7b.firebaseapp.com",
    projectId: "typing-speed-49f7b",
    storageBucket: "typing-speed-49f7b.appspot.com",
    messagingSenderId: "379250107002",
    appId: "1:379250107002:web:9d79ddb26a1835bd8e51c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;