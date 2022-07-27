const canvas=document.querySelector('#draw');
const ctx=canvas.getContext('2d');

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

ctx.strokeStyle='BADA55';
ctx.lineJoin="round";
ctx.lineCap="round";

let drawing=true;
let X=-0;
let Y=0;
let hue=0;

function draw(e) {
	if(drawing) return
	console.log(e);
ctx.strokeStyle=`hsl(${hue},100%,50%)`;
ctx.beginPath(); 
ctx.moveTo(X,Y);
ctx.lineTo(e.offsetX, e.offsetY);
ctx.stroke();
ctx.lineWidth=7;
hue++;


[X,Y]=[e.offsetX,e.offsetY];	// body...
}

canvas.addEventListener('mousemove',draw);
canvas.addEventListener('mouseup',() => drawing=true);
canvas.addEventListener('mousedown',(e) => {
	drawing=false;
	[X,Y]=[e.offsetX , e.offsetY];

	});
canvas.addEventListener('mouseout',() => drawing=true);	