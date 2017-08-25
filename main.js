// Initialize Firebase
var config = {
  apiKey: "AIzaSyC6q9tpSsY4Vp1bXCnpOM76TDaOwACaWjA",
  authDomain: "contact-form-b4dca.firebaseapp.com",
  databaseURL: "https://contact-form-b4dca.firebaseio.com",
  projectId: "contact-form-b4dca",
  storageBucket: "",
  messagingSenderId: "454089807744"
};
firebase.initializeApp(config);

// Referance messages collection
let messagesRef = firebase.database().ref('messages');
// Listen for form submit

document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit Form
function submitForm(e){
  e.preventDefault();

  // get values
  let name = getInputVal('name');
  let company = getInputVal('company');
  let email = getInputVal('email');
  let phone = getInputVal('phone');
  let message = getInputVal('message');

  // Save Message
  saveMessage(name, company, email, phone, message);

  // Show Alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 5 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  }, 5000);

  // clear form
  document.getElementById('contactForm').reset();
}

// function to get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// save message to firebase
function saveMessage(name, company, email, phone, message){
  let newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company: company,
    email: email,
    phone: phone,
    message: message
  });
}
