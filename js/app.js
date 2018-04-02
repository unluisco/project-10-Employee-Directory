const CLOSEICON = document.getElementById('overlayClose');
const OVERLAY = document.getElementById('overlay');

function showOverlay() {
	OVERLAY.style.display = '';
}

function hideOverlay() {
	OVERLAY.style.display = 'none';
}

CLOSEICON.addEventListener('click', hideOverlay);
