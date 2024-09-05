export class Ui {
    desplayGames(games) {
        let row = ""
        for (let i = 0; i < games.length; i++) {
            row += `
            <div class="col-md-6 col-lg-4 col-xl-3">
                        <div id=${games[i].id} class="card bg-transparent h-100">
                            <div class="card-body p-3">
                                <figure>
                                    <img src="${games[i].thumbnail}"
                                        class="card-img-top" alt="...">
                                </figure>
                                <figcaption>
                                    <div class="fig d-flex justify-content-between">
                                        <h5 class="card-title">${games[i].title}</h5>
                                        <span class="badge text-bg-primary p-2">free</span>
                                    </div>
                                    <p class="card-text small text-center opacity-50">
                                        ${games[i].short_description}
                                    </p>
                                </figcaption>
                            </div>
                            <div class="card-footer d-flex justify-content-between ">
                                <span class="badge ">${games[i].genre}</span>
                                <span class="badge "> ${games[i].platform}</span>
                            </div>
                        </div>
                    </div>
                    `
        }
        document.getElementById("gameslist").innerHTML = row;
    }
    desplayGameDetails(game) {
        let row = ` 
          <div class="col-md-4">
                    <img src="${game.thumbnail}" class="w-100" alt="">
                </div>
                <div class="col-md-8">
                    <h3>Title: ${game.title}
                    </h3>
                    <p>
                        Category:
                        <span class="badge text-bg-info">${game.genre}</span>
                    </p>
                    <p>
                        Platform:
                        <span class="badge text-bg-info">${game.platform}</span>
                    </p>
                    <p>
                        Status:
                        <span class="badge text-bg-info">${game.status}</span>
                    </p>
                    <P>${game.description}</P>
                    <a class="btn btn-outline-warning" target="_blank"
                        href="${game.game_url}">Show Game</a>
                </div>
                `;
                document.getElementById("gameDetails").innerHTML = row;
    }
}
