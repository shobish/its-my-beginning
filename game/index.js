const pit=document.querySelectorAll('.pit');
const score=document.querySelector('.score');
const jango=document.querySelectorAll('.jango');
let lastHole;
timeUp=false;
let scoreBord=0;

function timeSet (min, max){
	return Math.round(Math.random()*(max-min)+min);
	 
}
function randomHole(pit){ 
	const idx=Math.floor(Math.random()*pit.length);
	const pits=pit[idx];
	if (pits===lastHole) {
		console.log("jjhjhb");
		return randomHole(pit);
}

	lastHole=pits;
	return pits;

}	
function popUp () {
	const time=timeSet(200, 1000);
	const pitUp=randomHole(pit);
	console.log(time, pitUp);
	pitUp.classList.add('up');
setTimeout(()=>{
	pitUp.classList.remove('up');
	if(!timeUp) popUp();
	
},time);

}
function startGame () {
	score.textContent=0;
	timeUp=false;
	scoreBord=0
	popUp();
	setTimeout(() => timeUp=true,10000)
	// body...
}

function scoreChange (e) {
	if(!e.isTrusted) return;
	scoreBord++;
	this.classList.remove('up');
	score.textContent=scoreBord;	// body...
}
jango.forEach(jango=>jango.addEventListener('click',scoreChange));





















