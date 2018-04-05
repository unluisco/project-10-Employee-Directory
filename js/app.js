const OVERLAY = document.getElementById('overlay');
const DIRECTORY = document.getElementById('directory');

const DIRECTORYEMPLOYEE = DIRECTORY.getElementsByClassName('employee-box');
const OVERLAYEMPLOYEE = OVERLAY.getElementsByClassName('employee-box')[0];
const CLOSEICON = document.getElementById('overlayClose');

let EmployeeData = [];

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://randomuser.me/api/?results=12&nat=us&inc=name,location,login,dob,cell,picture');

xhr.onload = function () {
	const DONE = 4;
	const OK = 200;

	if (xhr.readyState === DONE) {
		if (xhr.status === OK) {
			let randomEmployee = JSON.parse(xhr.responseText);
			randomEmployee = randomEmployee.results;

			for (let i = 0; i < DIRECTORYEMPLOYEE.length; i++) {
				let data = {};
				EmployeeData.push(data);

				EmployeeData[i].photo = randomEmployee[i].picture.large; // Photo
				EmployeeData[i].name = `${randomEmployee[i].name.first} ${randomEmployee[i].name.last}`; // Name
				EmployeeData[i].username = randomEmployee[i].login.username; // Username
				EmployeeData[i].city = randomEmployee[i].location.city; // City
				EmployeeData[i].phone = randomEmployee[i].cell; // Phone
				EmployeeData[i].address = `${randomEmployee[i].location.street}, ${randomEmployee[i].location.city} ${randomEmployee[i].location.postcode}`; // Address
				EmployeeData[i].birthday = `Birthday: ${randomEmployee[i].dob.substring(0, 10)}`; // Birthday
			}

		} else { console.log('Error: ' + xhr.status) }

			addDataDirectory();
	}
}

xhr.send();

function addDataDirectory() {
	for (let i = 0; i < DIRECTORYEMPLOYEE.length; i++) {
		DIRECTORYEMPLOYEE[i].children[0].src = EmployeeData[i].photo; // Photo
		DIRECTORYEMPLOYEE[i].children[1].children[0].textContent = EmployeeData[i].name; // Name
		DIRECTORYEMPLOYEE[i].children[1].children[1].textContent = EmployeeData[i].username; // Username
		DIRECTORYEMPLOYEE[i].children[1].children[2].textContent = EmployeeData[i].city; // City
	}
}

function addDataOverlay(target) {
	let employeeNumber;

	if (target.className === 'employee-name' || target.className === 'employee-username' || target.className === 'employee-city') {
		employeeNumber = target.parentElement.parentElement.getAttribute('employee');
	} else if (target.className === 'employee-photo' || target.className === 'employee-info') {
		employeeNumber = target.parentElement.getAttribute('employee');
	} else {
		employeeNumber = target.getAttribute('employee');
	}

	employeeNumber--;

	OVERLAYEMPLOYEE.children[1].src = EmployeeData[employeeNumber].photo // Photo
	OVERLAYEMPLOYEE.children[2].children[0].textContent = EmployeeData[employeeNumber].name // Name
	OVERLAYEMPLOYEE.children[2].children[1].textContent = EmployeeData[employeeNumber].username // Username
	OVERLAYEMPLOYEE.children[2].children[2].textContent = EmployeeData[employeeNumber].city // City
	OVERLAYEMPLOYEE.children[3].children[0].textContent = EmployeeData[employeeNumber].phone // Phone
	OVERLAYEMPLOYEE.children[3].children[1].textContent = EmployeeData[employeeNumber].address // Address
	OVERLAYEMPLOYEE.children[3].children[2].textContent = EmployeeData[employeeNumber].birthday // Birthday
}

function showOverlay() {
	OVERLAY.style.display = 'flex';
}

function hideOverlay() {
	OVERLAY.style.display = 'none';
}

for (let iterator of DIRECTORYEMPLOYEE) {
	iterator.addEventListener('click', function (event) {
		addDataOverlay(event.target);
		showOverlay();
	});
}

CLOSEICON.addEventListener('click', hideOverlay);
