import './homeContent.css';
import restaurant from './restaurant.jpg';

function createHomeContent() {
	let homeContentMain = document.createElement('div');
	homeContentMain.setAttribute('class', 'home-content-main');
	let homeContent = document.createElement('div');
	homeContent.setAttribute('class', 'home-content');

	let textHeader = document.createElement('h2');
	let textparagraph = document.createElement('p');
	let textImage = document.createElement('img');

	textHeader.textContent = 'Welcome To Nigerian Meals';
	textparagraph.textContent =
		'With Under 30 minutes of delivery, Order from Our Menu.';
	textImage.src = `${restaurant}`;
	homeContent.appendChild(textHeader);
	homeContent.appendChild(textparagraph);
	homeContent.appendChild(textImage);
	homeContentMain.appendChild(homeContent);

	return homeContentMain;
}

export default createHomeContent;
