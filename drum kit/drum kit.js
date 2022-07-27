const keys=document.querySelectorAll('.key');

function change (e) {

const audio=document.querySelector(`audio[data-key='${e.keyCode}']`);	
const key=document.querySelector(`.key[data-key='${e.keyCode}']`);
	if (!audio) return;
	audio.currentTime=0;
	audio.play();
	key.classList.add('keychange');
	
}
function removeeffect (e) {
	if (e.propertyName!=="transform")return; 
		this.classList.remove('keychange');
		// body...
}

keys.forEach(key=>key.addEventListener('transitionend',removeeffect));















window.addEventListener('keydown', change);
