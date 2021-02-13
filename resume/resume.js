// Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAQLQ_lgc9japqgy4u8S6Mq-X0wpdb9y4o",
  authDomain: "resume-b728a.firebaseapp.com",
  projectId: "resume-b728a",
  storageBucket: "resume-b728a.appspot.com",
  messagingSenderId: "301251047445",
  appId: "1:301251047445:web:cd636e5fd4660fc6041e1c"
};
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

/* Get a reference to the storage service, 
which is used to create references in your storage bucket*/
var storage = firebase.storage();

// Create a storage reference from our storage service
var storageRef = storage.ref();

var resume = storageRef.child("resume.pdf");


(()=>{resume.getDownloadURL()
  .then((url) => {
    const downloadBtn = document.querySelector(".download-btn");
    downloadBtn.href=url;
    downloadBtn.target="blank";
    console.log(downloadBtn);
  })
  .catch((error) => {
    // Handle any errors
    console.log(error);})
})();

(()=>{
  const downloadPopUp = document.querySelector(".download-popup");
  setTimeout(()=>{downloadPopUp.style.display="block"},0);
  setTimeout(()=>{downloadPopUp.style.display="none"},2000);
})();


