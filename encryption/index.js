//firebase configuration
var config = {
  apiKey: "AIzaSyDg0QAvYiMddFBSIiQXWJN1a8TsTg1UOT0",
  authDomain: "car-rental-azrul.firebaseapp.com",
  databaseURL: "https://car-rental-azrul.firebaseio.com",
  projectId: "car-rental-azrul",
  storageBucket: "",
  appId: "1:777051705036:android:6cad93b4fb420ece27fc69"
};

//initialize firebase
firebase.initializeApp(config);

//set cache to unlimited
firebase.firestore().settings({
  cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED
});

//enable offline database
firebase.firestore().enablePersistence();




function login() {
  var userPass = document.getElementById("password_field").value;
  var userEmail = document.getElementById("email_field").value;
  var resetButton = document.getElementById("resetBtn").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);
  });
}

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    user = firebase.auth().currentUser;
    var uid = user.uid;

    if(user != null) {
      this.userEmail = document.getElementById("email_field").value;
      window.location.href ="encrypt.html";
      
    }
  } 
  else {
    // No user is signed in.
    document.getElementById("login_div").style.display = "block";
  }
});

function logout() {
  firebase.auth().signOut();
}


//logout upon browser refresh
window.hashchange = logout();