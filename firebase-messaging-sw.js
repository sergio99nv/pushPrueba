importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

    var config = {
        apiKey: "AIzaSyBFHIses2lmVT5kPS795dO3gzLCL2ZRQMs",
        authDomain: "push-657ef.firebaseapp.com",
        databaseURL: "https://push-657ef.firebaseio.com",
        projectId: "push-657ef",
        storageBucket: "push-657ef.appspot.com",
        messagingSenderId: "67805460551"
      };
    
      
    firebase.initializeApp(config);
     
  
    
    const messaging = firebase.messaging();

 
    messaging.setBackgroundMessageHandler(function(payload) {
        console.log('[firebase-messaging-sw.js] Received background message ', payload);
        // Customize notification here
        var notificationTitle = 'hellow';
        var notificationOptions = {
          body: 'hellowBackground Message body. ',
          icon: '/firebase-logo.png'
        };
      
        return self.registration.showNotification(notificationTitle,
          notificationOptions);
      });
      


 