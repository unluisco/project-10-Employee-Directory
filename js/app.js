const CLOSEICON = document.getElementById('overlayClose');
const OVERLAY = document.getElementById('overlay');
const DIRECTORY = document.getElementById('directory');
const EMPLOYEE = DIRECTORY.getElementsByClassName('employee-box');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://randomuser.me/api/?results=12');
xhr.send();

xhr.onload = function () {
	let DONE = 4;
	let OK = 200;

	if (xhr.readyState === DONE) {
		if (xhr.status === OK) {
			let randomEmployee = JSON.parse(xhr.responseText);
			console.log(randomEmployee.results);
		} else {
			console.log('Error: ' + xhr.status);
		}
	}
}

function showOverlay() {
	OVERLAY.style.display = 'flex';
}

function hideOverlay() {
	OVERLAY.style.display = 'none';
}

for (let iterator of EMPLOYEE) {
	iterator.addEventListener('click', showOverlay);
}

CLOSEICON.addEventListener('click', hideOverlay);
