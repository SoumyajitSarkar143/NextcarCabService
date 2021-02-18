var formApp = {};
(function(){
       var uid = null;
       var mainContainer = document.getElementById("container");

       var logtout = function(){
           firebase.auth().signOut().then(function(){
               console.log('success');
               window.location.replace("login.html");
           },function(){})
       }

       var init = function(){

           firebase.auth().onAuthStateChanged(function(user) {
               if (user) {
                 // User is signed in.
                 console.log("stay");
                 uid = User.uid;
                 mainContainer.style.display = "block";
               }else{
                   uid = null;
                   mainContainer.style.display = "none";
                   console.log("redirect");
                   window.location.replace("login.html");
       
               }
    
            });

       }
    
    
       init(); 
         
       formApp.logOut = logtout;
    
    })();
    
     