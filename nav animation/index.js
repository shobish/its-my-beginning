
const nav=document.querySelector(".navmain");
const topNav=nav.offsetTop;

function navchange() {

	if (window.scrollY >= topNav) {
		document.body.style.paddingTop = nav.offsetHeight + 'px';
		document.body.classList.add('fixed-nav');
	}else{
		
		document.body.classList.remove('fixed-nav');
		   document.body.style.paddingTop = 0;
	}
	
}
window.addEventListener('scroll', navchange); 


 
jQuery("P").click(function(){
	jQuery(this).fadeOut(2000);

});




