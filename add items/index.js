const additems= document.querySelector('.formclass');
const itemlist=document.querySelector('.ullist');
const  datasheet=[];
function additem (e) {
	e.preventDefault();
	

	const textinside=(this.querySelector('[name=textarea]')).value;

	const item={
		text:textinside,
		done:false
	};
	datasheet.push(item);
	listpopulation(datasheet,itemlist);
	// console.log(item);
	this.reset();

	// body...
}
function listpopulation (ullist=[] ,plateList) {
	plateList.innerHTML=ullist.map((plate,i)=>{
		return `
		<li>
			<input type='checkbox' data-index=${i} id="item${i}" checked  />
			<label for="">${plate.text}</label>
		</li>	

		`;

	}).join('');
	// body...
}






additems.addEventListener('submit', additem);



// window.SpeechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition;