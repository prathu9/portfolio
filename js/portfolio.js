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
	let mobile=window.matchMedia("(max-width:784px)");
	window.onscroll=function(){
		
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
		if((document.body.scrollTop>1350||
			document.documentElement.scrollTop>1350)
			&&!mobile.matches){
			focusOnScroll(navList, 2);
		}
		if((document.body.scrollTop>1750||
			document.documentElement.scrollTop>1750)
			&&!mobile.matches){
			focusOnScroll(navList, 3);
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
		if((document.body.scrollTop>2590||
			document.documentElement.scrollTop>2590)
			&&mobile.matches){
			focusOnScroll(mobilenavList, 3);
		}
	}
})();

let menuIcon=document.querySelector(".menu_icon_bar");
let mobileNav=document.querySelector(".mobile_nav_overlay");
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

(function(){
	let x=window.matchMedia("(min-width:784px)");
	function changeScreen(x){
		menuIcon.setAttribute("class","menu_icon_bar");
		document.body.style.overflow="initial";
		mobileNav.style.width="0";
	}
	x.addListener(changeScreen);

})();
