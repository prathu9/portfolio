(function(){
	const isAlertDisplayed = sessionStorage.getItem("isAlertDisplayed");
	if(!isAlertDisplayed){
		alert("Currently working on a React project!");
	}
	
	sessionStorage.setItem("isAlertDisplayed", true);
})();