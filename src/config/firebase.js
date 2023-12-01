// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCUW_psRZ3bmQ6IIatfGzybMWSmdcmVtTQ",
    authDomain: "projectlamnp.firebaseapp.com",
    projectId: "projectlamnp",
    storageBucket: "projectlamnp.appspot.com",
    messagingSenderId: "478029508617",
    appId: "1:478029508617:web:3583c710710a0d807e08d8",
    measurementId: "G-8H0Y6YV92K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage= getStorage(app)
// const analytics = getAnalytics(app);