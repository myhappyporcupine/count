function getNumber() {
	const numberElement = document.getElementById('number');
	const numberTextContent = numberElement.textContent;
	const numberCast = Number(numberTextContent);
	return numberCast;
}

function setNumber(newNumber) {
	const numberElement = document.getElementById('number');
	numberElement.textContent = newNumber;
}

function incrementNumber() {
	const oldNumber = getNumber();
	const newNumber = oldNumber + 1;
	setNumber(newNumber);
}

setInterval(incrementNumber, 1000);
