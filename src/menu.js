import jollof from './jollof-rice.jpg';
import './menu.css';
import pounded from './pounded-yam.jpg';
import puff from './puff-puff.jpg';
let createMenu = function () {
	let main = document.createElement('div');
	main.setAttribute('class', 'main');
	let menuContainer = document.createElement('div');
	menuContainer.setAttribute('id', 'menu-container');
	for (let i = 0; i < 3; i++) {
		let menuItem = document.createElement('div');
		menuItem.setAttribute('id', 'menu-item');
		let imageArea = document.createElement('img');
		let text = document.createElement('p');
		if (i == 0) {
			imageArea.src = `${jollof}`;
			// imageArea.style.width = '150px';
			text.textContent = 'Jollof Rice';
			menuItem.appendChild(imageArea);
			menuItem.appendChild(text);
		}
		if (i == 1) {
			imageArea.src = `${pounded}`;
			// imageArea.style.width = '150px';
			text.textContent = 'Pounded Yam';
			menuItem.appendChild(imageArea);
			menuItem.appendChild(text);
		}
		if (i == 2) {
			imageArea.src = `${puff}`;
			// imageArea.style.width = '150px';
			text.textContent = 'Puff Puff';
			menuItem.appendChild(imageArea);
			menuItem.appendChild(text);
		}
		menuContainer.appendChild(menuItem);
		main.appendChild(menuContainer);
	}

	return main;
};
export default createMenu;
