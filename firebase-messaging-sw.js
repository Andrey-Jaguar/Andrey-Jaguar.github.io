importScripts("https://www.gstatic.com/firebasejs/10.11.0/firebase-app-compat.js");importScripts("https://www.gstatic.com/firebasejs/10.11.0/firebase-messaging-compat.js");importScripts("https://www.gstatic.com/firebasejs/10.11.0/firebase/init.js");const t=firebase.messaging();t.onBackgroundMessage(function(s){console.log("[firebase-messaging-sw.js] Received background message ",s);const i="Background Message Title",e={body:"Background Message body.",icon:"/firebase-logo.png"};self.registration.showNotification(i,e)});