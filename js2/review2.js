var k=0;

firebase.database().ref('Comment/').once('value').then(function(snapshot) {
    snapshot.forEach(function(child) {
        // var m= child.val().username;
        // var n= child.val().comment;
        // var names =[];
        // var comms=[];
        
       
        // alert(m);
        // alert(n);
        // names[k]=child.val().username;
        // comms[k]=child.val().comment;
        // alert(names[k]);
        // alert(comms[k]);
        k=k+1;
        var line3 = document.createElement("textarea");
        line3.className="txtarea";
        line3.rows=6;
        line3.cols=150;
        // var line4 = document.createElement("br");
          line3.innerHTML ="Username: "+child.val().username+ "\nComment: "+child.val().comment ;
          document.getElementById("rev2").appendChild(line3);
        //   document.getElementById("rev2").appendChild("\n");
       
     


    })
       



}, function(error) {
        if (error) {
        } else {

        }
      });

      // alert(names[0]);
      // document.getElementById('p1').innerHTML='This is first';
    //   for(var i=0;i<9;i++)
    //   {
          // alert(names[0]);
          // var line3 = document.createElement("p");
          // line3.innerHTML = 'This is a paragraph  tag and it is working';
          // document.getElementById("rev2").appendChild(line3);

    //   }
      //  for ( var i=0; i < 5; i++) { 
      //   var line1 = document.createElement("div");
      //   var line2 = document.createElement("div");
      //   var line3 = document.createElement("p");
      //   line1.className = "swiper-slide";
      //   line2.className = "testimonial-item";
      //   line2.id="col1";
      //   line3.id="hmm2";
      //   line1.id="hmm1";
      //   line3.innerHTML = 'This is a paragraph  tag and it is working';
       


       
       
      //   document.getElementById("hmm").appendChild(line1);
      //   document.getElementById("hmm1").appendChild(line2);
      //   document.getElementById("col1").appendChild(line3);
        
         
        
      // }