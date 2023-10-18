import * as tools from './tools.js';

const btnInfoElem = document.querySelector('.btnInfo');

btnInfoElem.addEventListener('click', () => {
	const messageElem = document.querySelector('.message');
	messageElem.innerText = tools.sentencize('this is a test');
});
