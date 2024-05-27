importScripts("https://www.gstatic.com/firebasejs/10.11.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.11.0/firebase-messaging-compat.js");

const firebaseConfig = {
  // to cut the chase, just copy it from your Firebase Project settings
  apiKey: "AIzaSyCzaizV5zcQ0GGLwKnA4IS5K8u7nGVe8rE",
  authDomain: "fir-96785.firebaseapp.com",
  projectId: "fir-96785",
  storageBucket: "fir-96785.appspot.com",
  messagingSenderId: "910581735460",
  appId: "1:910581735460:web:0b2c8cf204b55fc4ddb8b1",
  measurementId: "G-3641HK13M4"
};

const app = firebase.initializeApp(firebaseConfig);
const messaging = app.messaging();
messaging.onMessage((payload) => console.log('message received', payload));