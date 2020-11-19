
(function(){
	const toggleSwitch = document.querySelector("input[type='checkbox']");
	const toggleIcon =  document.getElementById("toggle-icon");
	const logo = document.querySelector(".logo");

	//Dark Mode Styles
	const darkMode = ()=>{
	    toggleIcon.children[0].textContent = "Dark";
	    toggleIcon.children[1].classList.replace("fa-sun","fa-moon");
	    imageMode("dark");
	}

	//Light Mode Styles
	const lightMode = ()=>{
	    toggleIcon.children[0].textContent = "Light";
	    toggleIcon.children[1].classList.replace("fa-moon","fa-sun");
	    imageMode("light");
	}

	const imageMode = (color)=>{
		if(logo.getAttribute("data-isMain")==="false"){
			logo.src=`../images/ps_logo_${color}.jpg`;
		}else{
			logo.src=`./images/ps_logo_${color}.jpg`;
		}   
	}

	//Check Local Storage for Theme
	(()=>{
	    const currentTheme = localStorage.getItem("theme");
	    if(currentTheme){
	        document.documentElement.setAttribute("data-theme", currentTheme);
	        if(currentTheme==="dark"){
	            toggleSwitch.checked = true;
	            darkMode();
	        }
	    }
	})();

	//Change Theme Dynamically
	const changeTheme = (event)=>{
	    if(event.target.checked){
	        document.documentElement.setAttribute("data-theme", "dark");
	        darkMode();
	        localStorage.setItem("theme","dark");
	    }
	    else{
	        document.documentElement.setAttribute("data-theme", "light");
	        lightMode();
	        localStorage.setItem("theme","light");
	    }   
	}

	//Event Listener
	toggleSwitch.addEventListener("change", changeTheme);
})();