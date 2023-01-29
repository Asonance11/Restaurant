import './contact.css';
let content = document.getElementById('content');

let createForm = function () {
	const form = document.createElement('form');
	let name = document.createElement('input');
	name.setAttribute('type', 'text');
	name.setAttribute('placeholder', 'Name');
	name.setAttribute('maxLength', '20');
	name.setAttribute('required', '');
	name.setAttribute('name', 'name');
	name.setAttribute('id', 'name');

	let message = document.createElement('textarea');
	message.setAttribute('placeholder', 'Message');
	message.setAttribute('required', '');
	message.setAttribute('id', 'message');
	message.setAttribute('rows', '5');

	let send = document.createElement('button');
	send.setAttribute('type', 'submit');
	send.setAttribute('id', 'submit');
	send.textContent = 'Send';

	form.appendChild(name);
	form.appendChild(message);
	form.appendChild(send);

	return form;
};

export default createForm;
