$(document).ready(function() {
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
    
    $("#book-form").submit(function(e) {
        e.preventDefault();
    });

    $('#submit').click(function() {
      add_this();
    });

    firebase.auth().onAuthStateChanged(user => {
        if(!user) {
            window.location = 'index.html';
            }
    });

});

function add_this()
{
    var BookCode = document.getElementById("book_code").value;
    var BookName = document.getElementById("book_name").value;
    var Author1 = document.getElementById("author1").value;
    var Author2 = document.getElementById("author2").value;
    var Subject = document.getElementById("Subject").value;
    var tags = document.getElementById("tags").value;
    var db = firebase.firestore();
 
    db.collection("books").doc(BookCode).set({
        bookcode: BookCode,
        bookname : BookName,
        author1: Author1,
        author2: Author2,
        subject : Subject,
        tags : tags
    })
    .then(function() {
        console.log("Document successfully written!");
        window.alert("Successfully Book Added");
        window.location = 'admin_portal.html';
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
}
