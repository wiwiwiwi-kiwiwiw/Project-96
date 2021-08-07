//ADD YOUR FIREBASE LINKS HERE



var firebaseConfig = {
    apiKey: "AIzaSyDitN6VfvlHskA1kIS8Z_UJX-vLcR-6HaU",
    authDomain: "class95kwitter.firebaseapp.com",
    databaseURL: "https://class95kwitter-default-rtdb.firebaseio.com",
    projectId: "class95kwitter",
    storageBucket: "class95kwitter.appspot.com",
    messagingSenderId: "212708808496",
    appId: "1:212708808496:web:1201d542e38487e3f45af5",
    measurementId: "G-Q4E4GYLHX8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code
            console.log("Room Name -" + Room_names);
            row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;

            //End code
        });
    });
}
getData();

function addRoom() {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });

    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}