importScripts("https://www.gstatic.com/firebasejs/10.11.0/firebase-app-compat.js");importScripts("https://www.gstatic.com/firebasejs/10.11.0/firebase-messaging-compat.js");const s={apiKey:"AIzaSyCzaizV5zcQ0GGLwKnA4IS5K8u7nGVe8rE",authDomain:"fir-96785.firebaseapp.com",projectId:"fir-96785",storageBucket:"fir-96785.appspot.com",messagingSenderId:"910581735460",appId:"1:910581735460:web:0b2c8cf204b55fc4ddb8b1",measurementId:"G-3641HK13M4"},a=firebase.initializeApp(s),o=a.messaging();o.onBackgroundMessage({next:e=>console.log("background",e),error:e=>console.log(e),complete(){console.log("ewrg")}});
