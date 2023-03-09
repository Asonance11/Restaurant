import { default as createHomeContent } from './homeContent';
import { default as navCreation } from './nav';
import './styles.css';
let content = document.getElementById('content');

navCreation();
content.appendChild(createHomeContent());
