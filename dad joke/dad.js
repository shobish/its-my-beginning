const button=document.querySelector(".button");
const joketext=document.querySelector(".joke p"); 

const buttonjokes=[
'next',
'omg',
'you can',
'why next',
'ok next',

];

async function fetchJoke() {
	const response= await fetch('https://icanhazdadjoke.com',{
	headers:{
		Accept:'application/json',
	},

	});
	
	const box=await response.json()
	return box;
	// body...
}

function change (arr, not) {
	const listitems=arr[Math.floor(Math.random()*arr.length)];
	if (listitems===not) {
		console.log('try next');
		return change(arr,not);
	};
	return listitems;
	// body...
}




async function clickop(){
	const {joke}=await fetchJoke();
	joketext.textContent=joke;
	console.log(joke);
	button.textContent=change(buttonjokes, joketext.textContent);
}
button.addEventListener('click', clickop);


 