function show3() {
    var f=1;
    var username = document.getElementById("username").value;
    var comment= document.getElementById("comment").value;
    // var cpassword= document.getElementById("cpassword").value;


     firebase.database().ref('Comment/' + username).set({
        username : username,
       comment: comment
        // password : password
          }, function(error) {
            if (error) {
              // The write failed...
            } else {
                alert("DONE");
                // location.replace("reviewcomment.html")
              f=0;
              if(f==0){
                location.replace("review2.html");
              }
           
            }
          });

          
           
 } 


 
