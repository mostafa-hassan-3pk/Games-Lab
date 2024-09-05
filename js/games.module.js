import { Details } from "./details.module.js";
import { Ui } from "./ui.module.js";
export class Games {
	constructor() {
		this.ui = new Ui()
		this.getGames("MMORPG")
		const a = document.querySelectorAll(".navbar .nav-link");
		a.forEach(element => {
			element.addEventListener('click', () => {
				document.querySelector(".nav-link.active").classList.remove("active")
				element.classList.add("active")
				this.getGames(`${element.innerHTML}`)
			})
		});
	}
	async getGames(category) {
		const loading = document.querySelector(".loading");
		loading.classList.remove("d-none");
		const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
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
			this.showGames(result)
			loading.classList.add("d-none");
		} catch (error) {
			console.error(error);
		}
	}
	showGames(data) {
		this.ui.desplayGames(data)
		this.setEventOnCard()
	}
	setEventOnCard() {
		const cards = document.querySelectorAll(".card")
		cards.forEach(element => {
			element.addEventListener("click", (e) => {
				this.showGameDetails(e.currentTarget.id)
			})
		});
	}
	showGameDetails(id) {
		const details = new Details(id)
		document.querySelector(".games").classList.add("d-none")
		document.querySelector(".details").classList.remove("d-none")
	}
}