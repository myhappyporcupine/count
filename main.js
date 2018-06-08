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

function addComment(commentString) {
	const commentParagraph = document.createElement('p');
	commentParagraph.textContent = commentString;
	const commentsDiv = document.getElementById('comments');
	commentsDiv.appendChild(commentParagraph);
}

const comments = [
	{text: 'This counts numbers...', time: 5},
	{text: 'Look at it go!', time: 12},
	{text: 'What do you think it\'s counting?', time: 22},
	{text: 'What?', time: 28},
];

function timeComments() {
	const time = getNumber();
	for (comment of comments) {
		if (comment.time == time) {
			const commentText = comment.text;
			addComment(commentText);
		}
	}
}

function step() {
	incrementNumber();
	timeComments();
}

setInterval(step, 1000);
