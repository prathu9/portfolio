//For mobile view
let menuIcon=document.querySelector(".menu_icon_bar");
let mobileNav=document.querySelector(".mobile_nav_overlay");

/*Changing hamburger icon (menu icon bar) to close and 
revert it and displaying mobile nav, when clicked on menu icon and 
nav item in mobile view respectively.
*/
function change(){
	if(menuIcon.getAttribute("class")==="menu_icon_bar"){
		menuIcon.setAttribute("class","menu_icon_bar_change");
		// mobileNav.style.display="block";
		mobileNav.style.width="100%";
		document.body.style.overflow="hidden";
	}
	else{
		menuIcon.setAttribute("class","menu_icon_bar");
		mobileNav.style.width="0";
		document.body.style.overflow="initial";
		
	}
}

//checking if view is changed to desktop view and hidding mobile nav.
(function(){
	let x=window.matchMedia("(min-width:784px)");
	function changeScreen(x){
		menuIcon.setAttribute("class","menu_icon_bar");
		document.body.style.overflow="initial";
		mobileNav.style.width="0";
	}
	x.addEventListener('change',changeScreen);

})();


(function(){
	const toggleSwitch = document.querySelector("input[type='checkbox']");
	const skillsLogo = document.querySelectorAll(".skills");

	//function for changing logo of skills
	const skillsLogoChange = (index, logo, color)=>{
		skillsLogo[index].src=`./images/${logo}_${color}.svg`; 
	}

	//changing logo according to theme color
	const imageMode = (color)=>{
		skillsLogoChange(0, "html5Logo", color);
		skillsLogoChange(1, "css3Logo", color);
		skillsLogoChange(2, "jsLogo", color);
		skillsLogoChange(4, "tailwindCSSLogo", color);
		// skillsLogoChange(4, "reduxLogo", color);
		skillsLogoChange(5, "reactRouterLogo", color);
		skillsLogoChange(6, "nextjsLogo", color);
		skillsLogoChange(7, "nodeLogo", color);
	}

	const changeLogo = _modifyLogo; //Assiging logo change function to changeLogo from logo library
	changeLogo(imageMode); //changing logo when page is refreshed

	//Event Listener
	//change logo when light and dark mode switch is toggled
	toggleSwitch.addEventListener("change", ()=>{changeLogo(imageMode)}); 
})();

//Submitting form
(function(){

	// Your web app's Firebase configuration
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
	//Reference messages collection
	const messageRef = firebase.database().ref("messages");
	const form = document.getElementById("contact_form");
	const name = document.getElementById("name");
	const email = document.getElementById("email");
	const message = document.getElementById("message");
	const formOkBtn = document.querySelector(".form_popup_ok_btn");
	const formPopUp = document.querySelector(".popup_overlay");
	const submitBtn = document.getElementById('submit_btn'); 

	const submitForm = (e)=>{
		e.preventDefault();
		
		if(sessionStorage.getItem("submitted")){
			alert("Message Already Sent");
			form.reset();
			return;
		}

		//Get values
		const nameValue = name.value;
		const emailValue = email.value;
		const messageValue = message.value;

		//Save message
		saveMessage(nameValue, emailValue, messageValue);

		//Clear All input fields in form
		form.reset();
		sessionStorage.setItem("submitted", true);
		//Display Pop Up
		formPopUp.style.display = "flex";
		document.body.style.overflow = "hidden";
	}

	// save messages to firebase
	const saveMessage = (name, email, message)=>{
		const newMessageRef = messageRef.push();

		newMessageRef.set({
			name:name, email:email, message:message
		});
	}

	
	form.addEventListener("submit", submitForm);
	//Click ok button to hide Pop Up
	formOkBtn.addEventListener("click", function(){
		formPopUp.style.display = "none";
		document.body.style.overflow = "initial";
	});

	submitBtn.addEventListener('mousedown', (e) => {
		e.target.style.boxShadow = "none";
	})

	function addboxShadow(e){
		e.target.style.boxShadow = 
		`1px 1px 2px rgba(0 0 0/70%),
		-1px -1px 5px rgba(0 0 0/20%),
		-1px 1px 5px rgba(0 0 0/20%),
		 1px -1px 5px rgba(0 0 0/20%)`;
	}

	submitBtn.addEventListener('mouseup', addboxShadow);
	submitBtn.addEventListener('mouseout', addboxShadow);
})();

(function(){
	const header = document.querySelector("header");
	const headerImg = document.querySelector(".header_img");
	const midPointX = header.clientWidth/2;
	const midPointY = header.clientHeight/2;
	let mousePoint = {
		x: 0,
		y: 0
	}
	header.addEventListener("mousemove", (e)=>{
		mousePoint.x = - (e.clientX - midPointX);
		mousePoint.y = - (e.clientY - midPointY);
		headerImg.style.transform = 
		`translate(${mousePoint.x/20}px, ${mousePoint.y/20}px)`;
	})
})();

