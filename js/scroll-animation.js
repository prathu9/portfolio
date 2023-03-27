//changing border of navigation item in nav bar, when moved to that navigation item section
const focusOnScroll = (item, index)=>{
	item[0].className = index === 0?"active":"";
	item[1].className = index === 1?"active":"";
	item[2].className = index === 2?"active":"";
	item[3].className = index === 3?"active":"";
}

(function(){
	let navUl=document.querySelector(".nav_bar ul");
	let navList=document.querySelectorAll(".nav_list a");
	let mobilenavList=document.querySelectorAll(".mobile_nav a");
	let smallDesktop=window.matchMedia("(max-width:1120px)");
	let bigMobile=window.matchMedia("(max-width:784px)");
	let mobile=window.matchMedia("(max-width:700px)");
	/*changing border of the navigation item in nav bar, 
	when scrolled to that navigation item section 
	*/
	window.onscroll=function(){
		console.log(document.documentElement.scrollTop)
		if(document.body.scrollTop>50||
			document.documentElement.scrollTop>50){
				navUl.className="nav_onscroll";
		}else{
			navUl.className="nav_list";
		}

		if((document.body.scrollTop>0||
			document.documentElement.scrollTop>0)
			&&!mobile.matches){
			focusOnScroll(navList, 0);
		}

		if((document.body.scrollTop>700||
			document.documentElement.scrollTop>700)
			&&!mobile.matches){
			focusOnScroll(navList, 1);
		}
		if((document.body.scrollTop>1750||
			document.documentElement.scrollTop>1750)
			&&!mobile.matches){
			focusOnScroll(navList, 2);
		}
		if((document.body.scrollTop>2150||
			document.documentElement.scrollTop>2150)
			&&!mobile.matches){
			focusOnScroll(navList, 3);
		}

		//Small screen Desktop
		if((document.body.scrollTop>0||
			document.documentElement.scrollTop>0)
			&&smallDesktop.matches&&!mobile.matches){
			focusOnScroll(navList, 0);
		}

		if((document.body.scrollTop>700||
			document.documentElement.scrollTop>700)
			&&smallDesktop.matches&&!mobile.matches){
			focusOnScroll(navList, 1);
		}
		if((document.body.scrollTop>2043||
			document.documentElement.scrollTop>2043)
			&&smallDesktop.matches&&!mobile.matches){
			focusOnScroll(navList, 2);
		}
		if((document.body.scrollTop>2678||
			document.documentElement.scrollTop>2678)
			&&smallDesktop.matches&&!mobile.matches){
			focusOnScroll(navList, 3);
		}

		//Big size mobile
		if((document.body.scrollTop>0||
			document.documentElement.scrollTop>0)
			&&bigMobile.matches&&!mobile.matches){
			focusOnScroll(mobilenavList, 0);
		}

		if((document.body.scrollTop>700||
			document.documentElement.scrollTop>700)
			&&bigMobile.matches&&!mobile.matches){
			focusOnScroll(mobilenavList, 1);
		}
		if((document.body.scrollTop>2043||
			document.documentElement.scrollTop>2043)
			&&bigMobile.matches&&!mobile.matches){
			focusOnScroll(mobilenavList, 2);
		}
		if((document.body.scrollTop>2678||
			document.documentElement.scrollTop>2678)
			&&bigMobile.matches&&!mobile.matches){
			focusOnScroll(mobilenavList, 3);
		}

		//mobile
		if((document.body.scrollTop>0||
			document.documentElement.scrollTop>0)
			&&mobile.matches){
			focusOnScroll(mobilenavList, 0);
		}

		if((document.body.scrollTop>700||
			document.documentElement.scrollTop>700)
			&&mobile.matches){
			focusOnScroll(mobilenavList, 1);
		}
		if((document.body.scrollTop>2160||
			document.documentElement.scrollTop>2160)
			&&mobile.matches){
			focusOnScroll(mobilenavList, 2);
		}
		if((document.body.scrollTop>3000||
			document.documentElement.scrollTop>3000)
			&&mobile.matches){
			focusOnScroll(mobilenavList, 3);
		}

	}
})();

