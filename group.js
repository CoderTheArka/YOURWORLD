const firebaseConfig = {
    apiKey: "AIzaSyBQ7uPLr9i23Vva0yBzz3YQ4cgIywRRNmA",
    authDomain: "registration-310c5.firebaseapp.com",
    databaseURL: "https://registration-310c5-default-rtdb.firebaseio.com",
    projectId: "registration-310c5",
    storageBucket: "registration-310c5.appspot.com",
    messagingSenderId: "98589376762",
    appId: "1:98589376762:web:a8eab52be264c69c020943"
  };
  
 firebase.initializeApp(firebaseConfig);



 window.oncontextmenu=function(){
  alert('Right Click Is Disable');
  return false;
}


function addGroupRoom(){

   var username = localStorage.getItem('username');
   var room = document.getElementById('kjkj').value
    console.log(username);
    firebase.database().ref("GROUP"+username+"/"+ '/').child(room).update({
     
    });
    firebase.database().ref("GROUP"+room+"/" + username + '/').update({
      member:username
    });

      firebase.database().ref("GROUP"+username+ '/' + document.getElementById('kjkj').value).push({
         name:localStorage.getItem('username'),
         group:"Owner",
         CraetedBy:username,

   



});
alert('DONE');

  } 
  var username = localStorage.getItem('username');
  function getData() {firebase.database().ref("GROUP"+username+ '/').on('value', function(snapshot) {document.getElementById("sender").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room Name - "+ Room_names);
   row = "<div class='room_name' id="+Room_names+" onclick='redirecttoRoomName(this.id)' >#"+Room_names+"</div><hr>";
   document.getElementById("sender").innerHTML += row;
  //End code
   });});}
getData();

function getData() {firebase.database().ref("GROUP"+username+ '/').on('value', function(snapshot) {document.getElementById("sender").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
  console.log("Room Name - "+ Room_names);
  row = "<div class='room_name' id="+Room_names+" onclick='redirecttoRoomName(this.id)' >#"+Room_names+"</div><hr>";
  document.getElementById("sender").innerHTML += row;
 //End code
  });});}
getData();

function redirecttoRoomName(name){
   console.log(name);
   localStorage.setItem("GROUP_ROOM_NAME", name);
   window.location = "group_chat.html"
}
