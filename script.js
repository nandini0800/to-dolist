const input = document.getElementById('userInput');
const enter = document.getElementById('addButton');
const ul = document.querySelector('ul');

const deleteNode = (event) => event.target.parentNode.remove();

const createElement = () => {

	var li =  document.createElement('li');
	var p =  document.createElement('p');
	p.setAttribute('id','taskName');
	p.appendChild(document.createTextNode(input.value));
	li.appendChild(p);
	ul.appendChild(li);
	input.value = '';

	var button =  document.createElement('button');
	button.appendChild(document.createTextNode('Done'));
	button.setAttribute('id','doneBtn');
	li.appendChild(button);
	const doneNode = () => p.style = "text-decoration: line-through";
	button.onclick = doneNode;

	var button =  document.createElement('button');
	button.appendChild(document.createTextNode('Delete'));
	button.setAttribute('id','deleteBtn');
	li.appendChild(button);
	button.onclick = deleteNode;
}

const onClick = () => {
	if(input.value.length > 0) {
		createElement();
	}
}

const onKeyPress = (event) => {
	if(input.value.length > 0 && event.keyCode === 13) {
		createElement();
	}
}
enter.addEventListener('click', onClick);
input.addEventListener('keypress', onKeyPress);
