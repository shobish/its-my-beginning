const inputs=document.querySelectorAll('.mainindex input');

function handleValues() {
	const suffix=this.dataset.sizing || "";

	document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix);
}

inputs.forEach(input=>input.addEventListener("change",handleValues));
inputs.forEach(input=>input.addEventListener("mousemove",handleValues)); 