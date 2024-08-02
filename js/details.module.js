class Details{

	
	
}

async function getGameDetails(){
	const url = 'https://free-to-play-games-database.p.rapidapi.com/api/game?id=452';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '2d7e246c4fmsh1eed0627a67ff95p18f703jsnd5100c5f40a0',
		'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result)
} catch (error) {
	console.error(error);
}
}
getGameDetails()