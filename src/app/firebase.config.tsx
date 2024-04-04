// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyCFrT1i7axsl67ic7Ll3bQVZFW5BwTKzG0",
    authDomain: "fg-organizer.firebaseapp.com",
    databaseURL: "https://fg-organizer-default-rtdb.firebaseio.com",
    projectId: "fg-organizer",
    storageBucket: "fg-organizer.appspot.com",
    messagingSenderId: "960923830810",
    appId: "1:960923830810:web:0aaedbcce81e21d0355fa3",
    measurementId: "G-N30D65845T",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);

