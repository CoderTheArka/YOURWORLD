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

 function add2121() {
  var get_name = document.getElementById('username').value;
setTimeout(() => {
      if(document.getElementById('hide').innerHTML == 'ok'){ 
     var room = localStorage.getItem('GROUP_ROOM_NAME');
      firebase.database().ref("GROUP"+room+"/" + get_name + '/').update({
    member:get_name
      });   
      firebase.database().ref("GROUP"+get_name + '/' + localStorage.getItem('GROUP_ROOM_NAME') + '/').push({
        name:get_name,
        group:"member"
});
    }else{
        alert('USER IS NOT IN OUR DATA');
    }

  }, "5000");
  document.getElementById('username').innerHTML = "";
 
    } 

    
      
      


    
 function send(){

    if(document.getElementById('message').value != ''){
        var room_name = localStorage.getItem('GROUP_ROOM_NAME');
       
        firebase.database().ref("/").child("CHAT OF GROUP" + '/' + room_name).update({
        purpose : "adding room name"
    
        
    
        });
    
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var dateTime = date;
        msg = document.getElementById('message').value ;
        firebase.database().ref("CHAT OF GROUP" + '/' + room_name).push({
              name:localStorage.getItem('username'),
              message:msg,
              time:dateTime
    
    
    
        });
    document.getElementById("message").value = "";
  
    
    }else{
        alert("WE WILL NOT ALLOW YOU TO SEND EMPTY STRING");
    }
    document.getElementById('hide').innerHTML == '';
}
    


var room_name = localStorage.getItem('GROUP_ROOM_NAME');
function getData() { firebase.database().ref("CHAT OF GROUP" + '/' + room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
  var firebase_message_id = childKey;
  var message_data = childData;


//Start code
console.log(firebase_message_id);
console.log(message_data);
name1 = message_data['name'];
message = message_data['message'];
time = message_data['time'];
if (name1 == localStorage.getItem('username')){
  create_message_sender = "<div class='outgoing_msg'><div class='sent_msg'><p id='ddff'>"+message+"</p><span class='time_date'>"+time+"</span></div></div>";
  document.getElementById("output").innerHTML += create_message_sender;
}else{
  create_message_reciver = "<div class='incoming_msg'><div class='incoming_msg_img'></div><div class='received_msg'><div class='received_withd_msg'><p id='ddff'>"+name1+" : "+message+"</p><span class='time_date'>"+time+"</span></div></div></div>"
  document.getElementById("output").innerHTML += create_message_reciver;
}


//End code
} });  }); }


getData();


var room_name = localStorage.getItem('GROUP_ROOM_NAME');

function wgdu() {firebase.database().ref("GROUP"+localStorage.getItem('GROUP_ROOM_NAME')+"/").on('value', function(snapshot) {  document.getElementById("result").innerHTML=''; snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code
 console.log("Room Name - "+ Room_names);
 row = "<div class='room_name' id='group' >"+ "GROUP MEMBER: " +Room_names+"</div><hr>";
  
  document.getElementById("result").innerHTML += row;
//End code
 });});}
wgdu();

function seek(){

  if(document.getElementById('result').style.display == 'none'){
    document.getElementById('result').style.display = 'block'
  
  }else{
    document.getElementById('result').style.display = 'none'
  }
}
function wgdu2() { firebase.database().ref("GROUP"+localStorage.getItem('username') + '/'+ localStorage.getItem('GROUP_ROOM_NAME')).on('value', function(snapshot) { snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
  var firebase_message_id = childKey;
  var message_data = childData;


//Start code
console.log(firebase_message_id);
console.log(message_data);
GetAdmin = message_data['CraetedBy'];
if(localStorage.getItem('username') == GetAdmin){
document.getElementById('remove').style.display = 'block';
document.getElementById('addf').style.display = 'block';
}

} });  }); }
wgdu2();

function remove(){
  var get_name1 = document.getElementById('username1').value;
  setTimeout(() => {
        if(document.getElementById('hide1').innerHTML == 'ok'){ 
       var room = localStorage.getItem('GROUP_ROOM_NAME');
        firebase.database().ref("GROUP"+room+"/" + get_name1 + '/').remove();
        firebase.database().ref("/GROUP"+get_name1 + '/' + localStorage.getItem('GROUP_ROOM_NAME')).remove();
      }else{
          alert('USER IS NOT IN OUR DATA');
      }
  
    }, "5000");
    document.getElementById('username').innerHTML = "";
}
 
