const firebaseConfig = {
  apiKey: "AIzaSyCM5ILyogw0l7nfyJYGpziChWmtAewOWvA",
  authDomain: "testing-firebase-233aa.firebaseapp.com",
  databaseURL: "https://testing-firebase-233aa.firebaseio.com",
  projectId: "testing-firebase-233aa",
  storageBucket: "testing-firebase-233aa.appspot.com",
  messagingSenderId: "164495182737",
  appId: "1:164495182737:web:5fdfe90f29a17f11d1e830"
}

firebase.initializeApp(firebaseConfig)

const register = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    console.log(error)
  })
}

const login = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    console.log(error)
  })
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#registration-form').addEventListener('submit', event => {
    event.preventDefault()
    const email = document.querySelector('#registration-form input[type="email"]').value
    const password = document.querySelector('#registration-form input[type="password"]').value
    register(email, password)
  })
  
  document.querySelector('#login-form').addEventListener('submit', event => {
    event.preventDefault()
    const email = document.querySelector('#login-form input[type="email"]').value
    const password = document.querySelector('#login-form input[type="password"]').value
    login(email, password)
  })
})

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log(user)
    
    if (user != null) {
      user.providerData.forEach(function (profile) {
        console.log("Sign-in provider: " + profile.providerId)
        console.log("  Provider-specific UID: " + profile.uid)
        console.log("  Name: " + profile.displayName)
        console.log("  Email: " + profile.email)
        console.log("  Photo URL: " + profile.photoURL)
      });
    }
  } else {
    console.log('Logged off')
  }
})