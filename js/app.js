const CLOSEICON = document.getElementById('overlayClose');
const OVERLAY = document.getElementById('overlay');
const DIRECTORY = document.getElementById('directory');
const EMPLOYEE = DIRECTORY.getElementsByClassName('employee-box');

function showOverlay() {
	OVERLAY.style.display = '';
}

function hideOverlay() {
	OVERLAY.style.display = 'none';
}

for (let iterator of EMPLOYEE) {
	iterator.addEventListener('click', showOverlay);
}

CLOSEICON.addEventListener('click', hideOverlay);
