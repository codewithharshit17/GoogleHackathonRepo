
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig= {
    apiKey: "AIzaSyCmRRnBSGIW 0Y54zXK71tW2hEhgXUh9f4",
    authDomain: "medivillage-d7307.firebaseapp.com",
    projectId: "medivillage-d7307",
    storageBucket: "medivillage-d7307.firebasestorage.app",
    messagingSenderId: "518292247337",
    appId: "1:518292247337:web:6b397f4ab1928f28411d38",
    measurementId: "G-R0ZPPS9RW6"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
