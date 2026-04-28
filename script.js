const movies = [
  {
    "cím": "Eredet",
    "eredeti cím": "Inception",
    "rendező": "Christopher Nolan",
    "stúdió": "Warner Bros.",
    "leírás": "Egy tolvaj, aki az álmok világában lop információkat, veszélyes küldetést kap: ültessen el egy ötletet valaki elméjében.",
    "megjelenés éve": 2010,
    "plakát kép url": "https://m.media-amazon.com/images/M/MV5BY2I5NWQxYmUtYTVkYy00YjUwLWEyM2YtNDczNzUxMTM3ZmI2XkEyXkFqcGc@._V1_.jpg",
    "korhatár": "12",
    "játékidő": 148,
    "vetítések dátumai": ["2026-05-01 18:30", "2026-05-03 20:00", "2026-05-05 17:45"]
  },
  {
    "cím": "A sötét lovag",
    "eredeti cím": "The Dark Knight",
    "rendező": "Christopher Nolan",
    "stúdió": "Warner Bros.",
    "leírás": "Batman szembeszáll Jokerrel, aki káoszba taszítja Gothamet.",
    "megjelenés éve": 2008,
    "plakát kép url": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
    "korhatár": "16",
    "játékidő": 152,
    "vetítések dátumai": ["2026-05-02 19:00", "2026-05-06 21:15"]
  },
  {
    "cím": "Avatar",
    "eredeti cím": "Avatar",
    "rendező": "James Cameron",
    "stúdió": "20th Century Fox",
    "leírás": "Egy katona egy idegen bolygón találja magát, ahol döntést kell hoznia hűségről és erkölcsről.",
    "megjelenés éve": 2009,
    "plakát kép url": "https://m.media-amazon.com/images/M/MV5BMDEzMmQwZjctZWU2My00MWNlLWE0NjItMDJlYTRlNGJiZjcyXkEyXkFqcGc@._V1_.jpg",
    "korhatár": "12",
    "játékidő": 162,
    "vetítések dátumai": ["2026-05-04 18:00", "2026-05-07 20:30"]
  },
  {
    "cím": "Titanic",
    "eredeti cím": "Titanic",
    "rendező": "James Cameron",
    "stúdió": "Paramount Pictures",
    "leírás": "Egy tragikus szerelmi történet a Titanic fedélzetén.",
    "megjelenés éve": 1997,
    "plakát kép url": "https://m.media-amazon.com/images/M/MV5BYzYyN2FiZmUtYWYzMy00MzViLWJkZTMtOGY1ZjgzNWMwN2YxXkEyXkFqcGc@._V1_.jpg",
    "korhatár": "12",
    "játékidő": 195,
    "vetítések dátumai": ["2026-05-08 17:30", "2026-05-10 19:45"]
  },
  {
    "cím": "Csillagok között",
    "eredeti cím": "Interstellar",
    "rendező": "Christopher Nolan",
    "stúdió": "Paramount Pictures",
    "leírás": "Egy csapat űrhajós az emberiség túléléséért utazik a galaxisban.",
    "megjelenés éve": 2014,
    "plakát kép url": "https://m.media-amazon.com/images/M/MV5BNzllYzMxMzgtODM1YS00OThjLWE0MmUtZjExMDYyYWFhZTgzXkEyXkFqcGc@._V1_.jpg",
    "korhatár": "12",
    "játékidő": 169,
    "vetítések dátumai": ["2026-05-09 18:15", "2026-05-11 21:00"]
  },
  {
    "cím": "Mátrix",
    "eredeti cím": "The Matrix",
    "rendező": "Lana Wachowski, Lilly Wachowski",
    "stúdió": "Warner Bros.",
    "leírás": "Egy hacker felfedezi a valóság mögötti igazságot.",
    "megjelenés éve": 1999,
    "plakát kép url": "https://m.media-amazon.com/images/M/MV5BZDJkYzdkN2YtZDI1MS00MTE2LWE3OTgtYjcwNzEzYTYxYzhhXkEyXkFqcGc@._V1_.jpg",
    "korhatár": "16",
    "játékidő": 136,
    "vetítések dátumai": ["2026-05-12 20:00", "2026-05-14 22:10"]
  },
  {
    "cím": "Gladiátor",
    "eredeti cím": "Gladiator",
    "rendező": "Ridley Scott",
    "stúdió": "DreamWorks Pictures",
    "leírás": "Egy római hadvezér bosszút esküszik családja halála után.",
    "megjelenés éve": 2000,
    "plakát kép url": "https://m.media-amazon.com/images/M/MV5BYzFjZmNmMDItZGIxZi00MTE2LWE1MTAtM2IyMDU3YzI1YmNiXkEyXkFqcGc@._V1_.jpg",
    "korhatár": "16",
    "játékidő": 155,
    "vetítések dátumai": ["2026-05-15 18:45", "2026-05-18 21:20"]
  },
  {
    "cím": "A Gyűrűk Ura: A Gyűrű Szövetsége",
    "eredeti cím": "The Lord of the Rings: The Fellowship of the Ring",
    "rendező": "Peter Jackson",
    "stúdió": "New Line Cinema",
    "leírás": "Egy hobbit útnak indul, hogy elpusztítson egy hatalmas gyűrűt.",
    "megjelenés éve": 2001,
    "plakát kép url": "https://m.media-amazon.com/images/M/MV5BNDZlYjgwOTYtNDcyMi00ZTQwLWFhMjEtZGE5YjkwYmQzYmJjXkEyXkFqcGc@._V1_.jpg",
    "korhatár": "12",
    "játékidő": 178,
    "vetítések dátumai": ["2026-05-16 17:00", "2026-05-20 20:15"]
  },
  {
    "cím": "Forrest Gump",
    "eredeti cím": "Forrest Gump",
    "rendező": "Robert Zemeckis",
    "stúdió": "Paramount Pictures",
    "leírás": "Egy különleges férfi élete és kalandjai az amerikai történelemben.",
    "megjelenés éve": 1994,
    "plakát kép url": "https://m.media-amazon.com/images/M/MV5BNDYwNzVjMTItZmU5YS00YjQ5LTljYjgtMjY2NDVmYWMyNWFmXkEyXkFqcGc@._V1_FMjpg_UY695_.jpg",
    "korhatár": "12",
    "játékidő": 142,
    "vetítések dátumai": ["2026-05-17 18:30", "2026-05-21 20:00"]
  },
  {
    "cím": "Harcosok klubja",
    "eredeti cím": "Fight Club",
    "rendező": "David Fincher",
    "stúdió": "20th Century Fox",
    "leírás": "Egy férfi titkos klubot alapít, ahol a résztvevők harcolnak.",
    "megjelenés éve": 1999,
    "plakát kép url": "https://m.media-amazon.com/images/M/MV5BNzg1NTM0ZDUtODI2Mi00YmQ2LThjMjQtODQ4ZmU1OGEzYzgwXkEyXkFqcGc@._V1_.jpg",
    "korhatár": "18",
    "játékidő": 139,
    "vetítések dátumai": ["2026-05-22 21:00", "2026-05-24 23:15"]
  },
  {
    "cím": "Ponyvaregény",
    "eredeti cím": "Pulp Fiction",
    "rendező": "Quentin Tarantino",
    "stúdió": "Miramax",
    "leírás": "Több egymásba fonódó történet Los Angeles alvilágából.",
    "megjelenés éve": 1994,
    "plakát kép url": "https://m.media-amazon.com/images/M/MV5BMjkzMDgzZTktMTNhMC00YTYwLWE5ZGEtNmMyYjNmYzYzMDQzXkEyXkFqcGc@._V1_.jpg",
    "korhatár": "18",
    "játékidő": 154,
    "vetítések dátumai": ["2026-05-25 20:30", "2026-05-27 22:45"]
  },
  {
    "cím": "A Keresztapa",
    "eredeti cím": "The Godfather",
    "rendező": "Francis Ford Coppola",
    "stúdió": "Paramount Pictures",
    "leírás": "Egy maffiacsalád története és hatalmi harcai.",
    "megjelenés éve": 1972,
    "plakát kép url": "https://m.media-amazon.com/images/M/MV5BYmNhN2MxNmItOTYzNS00MDZjLTliZTUtYmE0Y2I4NzcyY2Y3XkEyXkFqcGc@._V1_.jpg",
    "korhatár": "16",
    "játékidő": 175,
    "vetítések dátumai": ["2026-05-28 18:00", "2026-05-30 21:30"]
  },
  {
    "cím": "Whiplash",
    "eredeti cím": "Whiplash",
    "rendező": "Damien Chazelle",
    "stúdió": "Sony Pictures",
    "leírás": "Egy fiatal dobos és tanára közötti feszült kapcsolat története.",
    "megjelenés éve": 2014,
    "plakát kép url": "https://m.media-amazon.com/images/M/MV5BMDFjOWFkYzktYzhhMC00NmYyLTkwY2EtYjViMDhmNzg0OGFkXkEyXkFqcGc@._V1_.jpg",
    "korhatár": "12",
    "játékidő": 106,
    "vetítések dátumai": ["2026-06-01 19:00", "2026-06-03 21:10"]
  },
  {
    "cím": "Élősködők",
    "eredeti cím": "Parasite",
    "rendező": "Bong Joon-ho",
    "stúdió": "CJ Entertainment",
    "leírás": "Egy szegény család beépül egy gazdag család életébe.",
    "megjelenés éve": 2019,
    "plakát kép url": "https://m.media-amazon.com/images/M/MV5BZWM1MDA5YmEtZTYyOS00MTIyLTg1NzQtZGU2MzdlYWE4YmM1XkEyXkFqcGc@._V1_.jpg",
    "korhatár": "16",
    "játékidő": 132,
    "vetítések dátumai": ["2026-06-05 18:20", "2026-06-07 20:40"]
  },
  {
    "cím": "Mad Max: A harag útja",
    "eredeti cím": "Mad Max: Fury Road",
    "rendező": "George Miller",
    "stúdió": "Warner Bros.",
    "leírás": "Posztapokaliptikus világban zajló akciódús menekülés.",
    "megjelenés éve": 2015,
    "plakát kép url": "https://m.media-amazon.com/images/M/MV5BNWJjOWU3ZjItZTllZS00ODA2LTg0ZTUtZDFmZGFkYTQzNTNkXkEyXkFqcGc@._V1_.jpg",
    "korhatár": "16",
    "játékidő": 120,
    "vetítések dátumai": ["2026-06-08 19:30", "2026-06-10 21:50"]
  }
]

function LoadMovies(){
    const moviesContainer = document.getElementById('lista');
    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `
            <img src="${movie['plakát kép url']}" alt="${movie['cím']} plakátja">
            <h3>${movie['cím']}</h3>
            <p class="title-time"><strong>Eredeti cím:</strong> ${movie['eredeti cím']}</p>
            <p class="title-time"><strong>Korhatár:</strong> ${movie['korhatár']}</p>
            <p class="title-time"><strong>Játékidő:</strong> ${movie['játékidő']} perc</p>
            <p class="title-time"><strong>Rendező:</strong> ${movie['rendező']}</p>
            <p class="title-time"><strong>Stúdió:</strong> ${movie['stúdió']}</p>
            <p class="title-time"><strong>Megjelenés éve:</strong> ${movie['megjelenés éve']}</p>
            <div class="details">
            <p><strong>Leírás:</strong> ${movie['leírás']}</p>
            <h4>Vetítések dátumai:</h4>
            <ul>
                ${movie['vetítések dátumai'].map(date => `<li>${date}</li>`).join('')}
            </ul>
            </div>
        `;
        moviesContainer.appendChild(movieElement);
    });
}

document.addEventListener('DOMContentLoaded', LoadMovies());
document.addEventListener('DOMContentLoaded', function () {
    const movies = document.querySelectorAll('.movie');

    movies.forEach(movie => {
        movie.addEventListener('click', () => {
            movie.classList.toggle('expanded');
        });
    });
});