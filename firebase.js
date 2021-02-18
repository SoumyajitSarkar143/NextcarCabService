var app_firebase = {};
(function(){

    //Firebase Config
    var firebaseConfig = {
        apiKey: "AIzaSyBxvKuM0jPtIa9001yo3N4OWz9snhhDmto",
        authDomain: "nextcar-cab-service.firebaseapp.com",
        projectId: "nextcar-cab-service",
        storageBucket: "nextcar-cab-service.appspot.com",
        messagingSenderId: "730563542427",
        appId: "1:730563542427:web:4f89b248f434680cc0353e",
        measurementId: "G-96ST5BGGNE"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
       
      app_firebase = firebase;
})()