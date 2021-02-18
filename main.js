
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
  firebase.analytics();  

//Reference Contactinfo collection
  let ContactInfo = firebase.database().ref("infos");  

//listiner for form submit
window.onload = function(){
    document.querySelector(".contactForm").addEventListener("submit", submitForm);
    
    function submitForm(e) {
        e.preventDefault(); 
        

        //Get Input Values
        let name = document.querySelector(".name").value;
        let email = document.querySelector(".email").value;
        let phone = document.querySelector(".phone").value;
        let message = document.querySelector(".message").value;
        console.log(name , email, phone, message);

        saveContactInfo(name , email, phone, message);

        //show alert
        document.querySelector(".alert").style.display = "block";

        setTimeout(function(){
            document.querySelector(".alert").style.display = "none";
        }, 2000)

        document.querySelector(".contactForm").reset();

    }

    //save infos to firebase
    function saveContactInfo(name, email, phone, message){
        let newContactInfo = ContactInfo.push();
        newContactInfo.set({
            name: name,
            email: email,
            phone: phone,
            message: message,
        })
    }
    // ------------------------------login--------------------------
    
}   







