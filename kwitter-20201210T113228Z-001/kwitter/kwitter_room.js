
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBF5LuvQwINxVylw2aGG8q16FMsFFxQCfE",
      authDomain: "kwitterdatabase-19946.firebaseapp.com",
      projectId: "kwitterdatabase-19946",
      storageBucket: "kwitterdatabase-19946.appspot.com",
      messagingSenderId: "567978834620",
      appId: "1:567978834620:web:c76a300b9f840ce1492eb9",
      measurementId: "G-68PJLE38X7"
    };

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_name);
      row = "< div class='rooom_name'id="+Room_name+" onclick='redirectToRoomName(this.id)' >3"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}
