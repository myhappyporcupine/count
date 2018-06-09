themes = {
	evil    : { background: 'black',
	             foreground: 'red'           },
	good    : { background: 'lavenderblush',
	            foreground: 'steelblue'      },
	hacker  : { background: 'black',
	            foreground: 'lime'           },
	regular : { background: 'white',
	            foreground: 'black'          },
	aquatic : { background: 'aqua',
	            foreground: 'white'          },
	lusty   : { background: 'maroon',
	            foreground: 'black'          },
	filthy  : { background: 'yellow',
	            foreground: 'lime'           } };

adjectives = [];
for (theme in themes) { adjectives.push(theme) };

things = [
	'robots', 'yogurts', 'human beings', 'pictish warriors', 'puppies',
	'ping pong balls', 'hard-boiled eggs', 'git commits', 'things',
	'rubs around the ear', 'concussions'
];

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

function changeTheme(themeName) {
	const themeObject = themes[themeName];
	document.body.style.backgroundColor = themeObject.background;
	document.body.style.color = themeObject.foreground;
}

function setThing(newThing) {
	const thingElement = document.getElementById('thing');
	thingElement.textContent = newThing;
}

function countThing(number) {
	const adjectiveIndex = Math.floor(Math.random() * adjectives.length);
	const adjective = adjectives[adjectiveIndex];
	const thingIndex = Math.floor(Math.random() * things.length);
	const thing = things[thingIndex];
	const count = number + ' ' + adjective + ' ' + thing;

	changeTheme(adjective);
	setThing(count);
}

function step() {
	incrementNumber();
	const number = getNumber();
	if (number % 5 == 0) { countThing(number); }
}

setInterval(step, 1000);
