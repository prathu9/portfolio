(()=>{
  // Firebase configuration
  var firebaseConfig = {
        apiKey: "AIzaSyArBm5el849hwEozoGHd67XMGt2N7miXv8",
        authDomain: "portfolio-project-608d1.firebaseapp.com",
        databaseURL: "https://portfolio-project-608d1.firebaseio.com",
        projectId: "portfolio-project-608d1",
        storageBucket: "portfolio-project-608d1.appspot.com",
        messagingSenderId: "53294103964",
        appId: "1:53294103964:web:ffb1fa7426d39ca0b25c59"
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
})();

