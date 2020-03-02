import Firebase from 'firebase/firebase';

let config = {
    apiKey: "AIzaSyA2pBUfZtkZZK4XMyrzrC99rdZ0MRHaXng",
    authDomain: "css-playground-a4d99.firebaseapp.com",
    databaseURL: "https://css-playground-a4d99.firebaseio.com",
    projectId: "css-playground-a4d99",
    storageBucket: "css-playground-a4d99.appspot.com",
    messagingSenderId: "122023337180",
    appId: "1:122023337180:web:ac2f69ebf017510388a819",
    measurementId: "G-TM4SYMPPZF"
};

const app = Firebase.initializeApp(config);

export const db = app.database();