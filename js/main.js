import { sentencize, replaceAll } from './tools.js';

const btnInfoElem = document.querySelector('.btnInfo');

btnInfoElem.addEventListener('click', () => {
	const messageElem = document.querySelector('.message');
	messageElem.innerText = sentencize(replaceAll('this is a test and it is a good test', 'test', 'example'));
});