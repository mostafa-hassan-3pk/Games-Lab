import { Ui } from "./ui.module.js";
export class Details {
	constructor(id) {
		this.getGameDetails(id)
		const btn = document.querySelector(".btn-close");
		btn.addEventListener('click', () => {
			document.querySelector(".games").classList.remove("d-none")
			document.querySelector(".details").classList.add("d-none")
		})
	}
	async getGameDetails(id) {
		const loading = document.querySelector(".loading");
		loading.classList.remove("d-none");
		const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
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
			this.showDetails(result)
			loading.classList.add("d-none");
		} catch (error) {
			console.error(error);
		}
	}
	showDetails(data) {
		this.ui = new Ui()
		this.ui.desplayGameDetails(data)
	}
}
