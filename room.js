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






function addRoom(){

   var username = localStorage.getItem('username');
   var username1 = localStorage.getItem('User');
    console.log(username);
    firebase.database().ref("Rooms/" + username + '/' + username1 + '/' ).child(document.getElementById('kjkj').value).update({
    purpose : "adding room name"

    });
    document.getElementById('kjkj').innerHTML = '';
  }
  var user = localStorage.getItem('User'); 
  var username = localStorage.getItem('username');
  function getData() {firebase.database().ref("Rooms/" + user + '/' + username + '/').on('value', function(snapshot) {document.getElementById("reciver").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room Name - "+ Room_names);
   row = "<div class='room_name' id="+Room_names+" onclick='redirecttoRoomName(this.id)' >#"+Room_names+"</div><hr>";
   document.getElementById("reciver").innerHTML += row;
  //End code
   });});}
getData();
var username = localStorage.getItem('username');
var user = localStorage.getItem('User'); 
function getData1() {firebase.database().ref("Rooms/" + username + '/' + user + '/').on('value', function(snapshot) {document.getElementById("sender").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey1  = childSnapshot.key;
    Room_names1 = childKey1;
   //Sta
   console.log("Room Name - "+ Room_names1);
   row = "<div class='room_name' id="+Room_names1+" onclick='redirecttoRoomName1(this.id)' >#"+Room_names1+"</div><hr>";
   document.getElementById("sender").innerHTML += row;
  //End code
   });});}
getData1();

function redirecttoRoomName(name){
   console.log(name);
   localStorage.setItem("ROOM_NAME", name);
   window.location = "chat.html"
}
function redirecttoRoomName1(name){
    console.log(name);
    localStorage.setItem("ROOM_NAME", name);
    window.location = "chat.html"
 }
