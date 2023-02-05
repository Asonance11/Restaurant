let createMenu = function () {
	let menuContainer = document.createElement('div');
	menuContainer.setAttribute('id', 'menu-container');
	for (let i = 0; i < 3; i++) {
		let menuItem = document.createElement('div');
		let imageArea = document.createElement('div');
		let text = document.createElement('p');
		if (i == 0) {
			imageArea.style.background = `url(${jollof})`;
			text.textContent = 'Jollof Rice';
			menuContainer.appendChild(imageArea);
			menuItem.appendChild(text);
		}
		if (i == 1) {
			text.textContent = 'Pounded Yam';
			menuContainer.appendChild(imageArea);
			menuItem.appendChild(text);
		}
		if (i == 2) {
			text.textContent = 'Puff Puff';
			menuContainer.appendChild(imageArea);
			menuItem.appendChild(text);
		}
	}
};
