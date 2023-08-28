//your JS code here. If required.
function generateText(){
	return new Promise(resolve=>{
		setTimeout(()=>{
			resolve('Hello, World!');
		}, 1000)
	})
}

async function updateHTML(){
	const text = await generateText();
	document.getElementById('output').innerHTML = text;
}

updateHTML();