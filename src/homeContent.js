import './homeContent.css';

function createHomeContent() {
	let homeContentMain = document.createElement('div');
	homeContentMain.setAttribute('class', 'home-content-main');
	let homeContent = document.createElement('div');
	homeContent.setAttribute('class', 'home-content');

	let textHeader = document.createElement('h2');
	let textparagraph = document.createElement('p');

	textHeader.textContent = 'Welcome Tom Nigerian Meals';
	textparagraph.textContent =
		'With Under 30 minutes of delivery, Order from Our Menu.';
	homeContent.appendChild(textHeader);
	homeContent.appendChild(textparagraph);

	homeContentMain.appendChild(homeContent);

	return homeContentMain;
}

export default createHomeContent;
