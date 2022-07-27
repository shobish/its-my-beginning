const secondHand=document.querySelector(".second");
const minuteHand=document.querySelector(".minute");
const hourHand=document.querySelector(".hour");



function setdate () {
	const now= new Date();
	const seconds=now.getSeconds();
	const minute=now.getMinutes();
	const hour=now.getHours();


	const secondsDegrees=((seconds/60)*360)+90;
	const minutesDegrees=((minute/60)*360)+90;
	const hoursDegrees=((hour/12)*360)+90;

	secondHand.style.transform=`rotate(${secondsDegrees}deg)`;
	minuteHand.style.transform=`rotate(${minutesDegrees}deg)`;
	hourHand.style.transform=`rotate(${hoursDegrees}deg)`;



	console.log(seconds);
	console.log(hour);
	console.log(minute);

}










setInterval(setdate,1000);