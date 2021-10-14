import * as firebase from 'firebase/app';
import 'firebase/firestore';
const app = firebase.initializeApp({
    apiKey: "AIzaSyBsUviO36DzssVx2RktcE81TeamlebuADE",
    authDomain: "react-coder-972ae.firebaseapp.com",
    projectId: "react-coder-972ae",
    storageBucket: "react-coder-972ae.appspot.com",
    messagingSenderId: "510846164127",
    appId: "1:510846164127:web:0d3437c1dad7a16de956aa",
    measurementId: "G-FMYY5PJQQH"
  });
export function getFirebase() {
    return app;
}
export function getFirestore() {
    return firebase.firestore(app);
}
