import jollof from './jollof-rice.jpg';
import pounded from './pounded-yam.jpg';
import puff from './puff-puff.jpg';
let createMenu = function () {
	let menuContainer = document.createElement('div');
	menuContainer.setAttribute('id', 'menu-container');
	for (let i = 0; i < 3; i++) {
		let menuItem = document.createElement('div');
		let imageArea = document.createElement('div');
		let text = document.createElement('p');
		if (i == 0) {
			imageArea.style.backgroundImage = `url(${jollof})`;
			imageArea.style.width = '150px';
			text.textContent = 'Jollof Rice';
			menuItem.appendChild(imageArea);
			menuItem.appendChild(text);
		}
		if (i == 1) {
			imageArea.style.background = `url(${pounded})`;
			text.textContent = 'Pounded Yam';
			menuItem.appendChild(imageArea);
			menuItem.appendChild(text);
		}
		if (i == 2) {
			imageArea.style.background = `url(${puff})`;
			text.textContent = 'Puff Puff';
			menuItem.appendChild(imageArea);
			menuItem.appendChild(text);
		}
		menuContainer.appendChild(menuItem);
	}

	return menuContainer;
};
export default createMenu;
