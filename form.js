var firebaseConfig = {
    apiKey: "AIzaSyBxvKuM0jPtIa9001yo3N4OWz9snhhDmto",
    authDomain: "nextcar-cab-service.firebaseapp.com",
    databaseURL: "https://nextcar-cab-service-default-rtdb.firebaseio.com",
    projectId: "nextcar-cab-service",
    storageBucket: "nextcar-cab-service.appspot.com",
    messagingSenderId: "730563542427",
    appId: "1:730563542427:web:b0ea0adfb7ab0e9fc0353e",
    measurementId: "G-RDGLG7NJZC"
  };
  // Initialize Firebase
 
  firebase.initializeApp(firebaseConfig);
  firebase.analytics(); 

  let bookingInfo = firebase.database().ref("bookings");

window.onload = function(){
    document.querySelector(".bookingForm").addEventListener("submit", submitForm);

    function submitForm(e){
        e.preventDefault();
        
        //Get Input Values
        let cars = document.querySelector(".cars", value =("Not selected","Mini","GO Sedan","XL Rental","Bikes","Auto-Ricksaw")).value;
        let pickup = document.querySelector(".pickup").value;
        let date = document.querySelector(".date").value;
        let drop = document.querySelector(".drop").value;
        let name = document.querySelector(".name").value;
        let email = document.querySelector(".email").value;
        let phone = document.querySelector(".phone").value;
    // ------------------------------------------------------------------
      

    // ---------------------------------------------------------------------------    
        // console.log(cars, pickup, date, drop, name, email, phone);

        saveBookingInfo(cars, pickup, date, drop, name, email, phone);

     //show alert
     document.querySelector(".alert1").style.display = "block";
         setTimeout(function(){
             document.querySelector(".alert1").style.display = "none";
         }, 2000)
 
         document.querySelector(".bookingForm").reset();

    }

    //save bookings to firebase

    function saveBookingInfo(cars, pickup, date, drop, name, email, phone){
        let newBookingInfo = bookingInfo.push();
        newBookingInfo.set({
            cars:cars,
            pickup:pickup,
            date:date,
            drop:drop,
            name:name,
            email:email,
            phone:phone,
        });

        retriveBookings();      
    }
 


    function retriveBookings(){
        let Ref = firebase.database().ref("bookings")
        Ref.on("value", gotData);
        
    }

    function gotData(data){
        let booking = data.val();
        let keys = Object.keys(booking);

        

        for(let i = keys.length-1; i>=0; i--){
            let infoData = keys[i];
            let name = booking[infoData].name;
            let email = booking[infoData].email;
            let phone = booking[infoData].phone;
            let pickup = booking[infoData].pickup;
            let drop = booking[infoData].drop;
            let cars = booking[infoData].cars;
            let date = booking[infoData].date;
            console.log(name, email, phone);

            let bookingResults = document.querySelector(".results");

            bookingResults.innerHTML += `<div>
            <p><strong>Name: </strong>${name} <br>
            <a><strong>Phone: </strong>${phone}</a> <br>
            <a><strong>Pickup: </strong>${pickup}</a> <br>
            <a><strong>Drop: </strong>${drop}</a> <br>
            <a><strong>Vehicle: </strong>${cars}</a> <br>
            <a><strong>Date: </strong>${date}</a> <br>
            <a><strong>Email: </strong>${email}</a><br>
            <a><strong>Vehicle No: </strong>WB 2K7J 2501</a>
            </p>
            </div>`;

    }   
    
 }
 
 
}

function refresh(){
    if(confirm("Are you sure? ")){
        location.reload();
    }
}


