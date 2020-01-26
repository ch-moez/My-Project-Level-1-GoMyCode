

// Initialize Cloud Firestore through Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBmprI6ulwlEolPkV4A5V_MUJrbZb0aZig",
    authDomain: "gomycode-fe24d.firebaseapp.com",
    databaseURL: "https://gomycode-fe24d.firebaseio.com",
    projectId: "gomycode-fe24d",
    storageBucket: "gomycode-fe24d.appspot.com",
    messagingSenderId: "34156132864",
    appId: "1:34156132864:web:7cb93da92c5f4f014e76e5",
    measurementId: "G-8T46E9TEQC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  


document.getElementById('contactForm').addEventListener('submit',sumbitForm);
var messagersRef = firebase.database().ref('myDatabase');


//save message in firebase
function saveMessage (name,email,phone){
    var newMessageRef = messagersRef.push();
    newMessageRef.set({
        name : name,
        email : email,
        phone : phone

    });

  console.log("from submited");
	alert("Merci pour votre message. Nous allons vous contacter dans la courte délais possible");
	//window.open('index.html');
	window.location.href="index.html"
	
}

function sumbitForm(e){
    e.preventDefault();
    var name = document.getElementById('name').value;
    //var track = document.getElementById('track').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;

    saveMessage(name,email,phone);
	
	
    
}

