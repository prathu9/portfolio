const _modifyLogo = (()=>{
	const logo = document.querySelector(".logo");

	//Check local storage for theme and change logo according to theme
	return ((imageMode)=>{
		const currentTheme = localStorage.getItem("theme")||"light";
		if(currentTheme==="dark" && imageMode){
			imageMode("dark");
		}else if(currentTheme==="light" && imageMode){
			imageMode("light");
		}
		if(logo.getAttribute("data-isMain")==="false"){
			logo.src=`../images/ps_logo_${currentTheme}.jpg`;
		}else{
			logo.src=`./images/ps_logo_${currentTheme}.jpg`;
		}
	})
})();
