$(document).ready(function(){    
    var firebaseConfig = {
        apiKey: "AIzaSyANiD_9uRn8TBjDJb2RuG3Q5HZDRtZAI1Q",
        authDomain: "frontend-devrev-515f5.firebaseapp.com",
        databaseURL: "https://frontend-devrev-515f5-default-rtdb.firebaseio.com/",
        projectId: "frontend-devrev-515f5",
        storageBucket: "gs://frontend-devrev-515f5.appspot.com",
        messagingSenderId: "234590277024",
      };
    firebase.initializeApp(firebaseConfig);
    var db = firebase.firestore();

    $("#login-form").submit(function(e) {
        e.preventDefault();
    });

    $('#submit_data').click(function() {
      login();
    });

    $('#back_button').click(function()
    {
        logout();
    });

    firebase.auth().onAuthStateChanged(user => {
        if(user) {
            window.location = 'admin_portal.html';     
            }
        });

  });
  
function login(){
    var email = document.getElementById("username").value;
    var password = document.getElementById("password").value;

        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            window.alert(errorMessage);
        });
    
}
function logout()
{
    firebase.auth().signOut().then(function() {
    }).catch(function(error) {
    });
}
