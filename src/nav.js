import { default as createForm } from './contact';
import { default as createMenu } from './menu';
let content = document.getElementById('content');

let navCreation = function () {
	let nav = document.createElement('nav');
	let ul = document.createElement('ul');
	let navlinks = ['HOME', 'MENU', 'CONTACT'];
	let li;
	for (let i = 0; i < navlinks.length; i++) {
		li = document.createElement('li');
		li.textContent = navlinks[i];
		if (i == 1) {
			li.addEventListener('click', () => {
				content.innerHTML = '';
				navCreation();
				content.appendChild(createMenu());
			});
		}
		if (i == 2) {
			li.addEventListener('click', () => {
				content.innerHTML = '';
				navCreation();
				content.appendChild(createForm());
			});
		}
		ul.appendChild(li);
	}
	nav.appendChild(ul);
	content.appendChild(nav);
};
export default navCreation;
