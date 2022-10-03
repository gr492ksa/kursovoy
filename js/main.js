const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'a131e33293msh3fc0ecc3602ae04p16acc9jsn6ee06c4df638',
        'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
    }
};

let input;
document.querySelector('.btn-search').addEventListener('click',function() {
    input = document.querySelector('.form-search').value;
    document.querySelector('.movies').innerHTML = '';
    document.querySelector('.title-top').innerHTML = '';

    fetch(`https://online-movie-database.p.rapidapi.com/title/find?q=${input}`, options)
        .then(response => response.json())
        .then(data => {
            const list = data.results;
            list.map((item) => {
                    const id = item.id;
                const title = item.title;
                const poster = item.image.url;
                const movie = `<li><a class="find-poster" href="https://www.imdb.com/${id}"><img src="${poster}" alt="">${title}</h2></a></li>`;
                document.querySelector('.movies').innerHTML += movie;
            });
        })
        .catch(err => console.error(err));
});

fetch('https://online-movie-database.p.rapidapi.com/title/get-top-rated-movies', options)
    .then(response => response.json())
    .then(data => {
        const list = data;
        list.map((item) => {
            const rat = item.chartRating;
            let id = item.id;
            const poster = `<li><img class="img-poster"
                src="https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg" alt="">
                <a class="top-poster-250" href="https://www.imdb.com${id}">Побег из Шоушенка</a><h4>Рейтинг: <span class="yellow">${rat} / 10</span></h4></li>`;
            document.querySelector(".topfilm").innerHTML += poster;
        });
    })
    .catch(err => console.error(err));

fetch('https://online-movie-database.p.rapidapi.com/title/get-top-rated-tv-shows', options)
    .then(response => response.json())
    .then(data => {
        const list = data;
        list.map((item) => {
            const rat = item.chartRating;
            const id = item.id;
            const poster = `<li> <img src="https://m.media-amazon.com/images/M/MV5BMGZmYmQ5NGQtNWQ1MC00NWZlLTg0MjYtYjJjMzQ5ODgxYzRkXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg" alt="">
                                    <a class="top-poster-250" href="https://www.imdb.com${id}">Планета Земля 2</a><h4>Рейтинг: <span class="yellow">${rat}</span></h4></li>`;
            document.querySelector(".toptvshow").innerHTML += poster;
        });
    })
    .catch(err => console.error(err));

fetch('https://online-movie-database.p.rapidapi.com/actors/list-most-popular-celebs?homeCountry=US&currentCountry=US&purchaseCountry=US', options)
    .then(response => response.json())
    .then(data => {
        const listceleb = data;
        listceleb.map((item) => {
            const id = item;
            const poster = `<li> <img src="https://m.media-amazon.com/images/M/MV5BMjE0NzExMTg0MV5BMl5BanBnXkFtZTgwOTIyNTI5NzE@._V1_.jpg" alt="">
                                    <a class="top-poster-250" href="https://www.imdb.com${id}">${id}</a></li>`;
            document.querySelector(".popularceleb").innerHTML += poster;
        });
    })
    .catch(err => console.error(err));

fetch('https://online-movie-database.p.rapidapi.com/title/get-most-popular-movies?homeCountry=US&purchaseCountry=US&currentCountry=US', options)
    .then(response => response.json())
    .then(data => {
        const listmovie = data;
        listmovie.map((item) => {
            const id = item;
            const poster = `<li> <img src="https://m.media-amazon.com/images/M/MV5BZDIyYjM3N2EtOTU1MC00YTA4LTgzNjctMTNjODcxZTZhODU2XkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_.jpg" alt="">
                                    <a class="top-poster-250" href="https://www.imdb.com${id}">${id}</a></li>`;
            document.querySelector(".popularmovie").innerHTML += poster;
        });
    })
    .catch(err => console.error(err));

fetch('https://online-movie-database.p.rapidapi.com/title/get-most-popular-movies?homeCountry=US&purchaseCountry=US&currentCountry=US', options)
    .then(response => response.json())
    .then(data => {
        const listtv = data;
        listtv.map((item) => {
            const id = item;
            const poster = `<li> <img src="https://m.media-amazon.com/images/M/MV5BNDkyYjMzODItM2Y3Zi00MWQ1LWI3MzktNGFjMDQyNDU1YjBjXkEyXkFqcGdeQXVyMTgxOTIzNzk@._V1_.jpg" alt="">
                                    <a class="top-poster-250" href="https://www.imdb.com${id}">${id}</a></li>`;
            document.querySelector(".populartv").innerHTML += poster;
        });
    })
    .catch(err => console.error(err));

fetch('https://online-movie-database.p.rapidapi.com/title/get-details?tconst=tt0111161', options)
    .then(response => response.json())
    .then(data => {
        const baselist = data;
            const imagebase = baselist.image.url;
            const titlebase = baselist.title;
            const year = baselist.year;
            const runningTimeInMinutes = baselist.runningTimeInMinutes;
            const base = `
                <img class="img-base" src="${imagebase}" alt="">
                <div class="base-text">
                <h1 style="margin-bottom: 10px;">${titlebase}</h1>
                <h3 style="margin-bottom: 10px;">Длительность: ${runningTimeInMinutes} мин.</h3>
                <h3>Год выпуска: ${year}</h3>
            </div>`;
            document.querySelector('.img').innerHTML += base;
        })
    .catch(err => console.error(err));

fetch('https://online-movie-database.p.rapidapi.com/title/get-full-credits?tconst=tt0111161', options)
    .then(response => response.json())
    .then(data => {
        const castlist = data.cast;
        castlist.map((item) => {
            const castid = item.id;
            const imagecast = item.image.url;
            const castname = item.name;
            const castcategory = item.category;
            const castrole = item.characters;
            const cast = `
            <div class="cast-card">
                <a href="../pages/pageactor.html"><img class="img-cast" src="${imagecast}" alt=""></a>
                <div class="cast-card-text">
                    <h2 style="margin-bottom: 10px;"><a target="_blank" style="text-decoration: none; color: #3bc1a0;" href="https://www.imdb.com/${castid}">${castname}</a></h2>
                    <h4><b>Категория:</b> ${castcategory}</h4>
                    <h4><b>Роль: </b>${castrole}</h4>
                </div>
            </div>`;
            document.querySelector('.pagemovie-cast').innerHTML += cast;
        })
    })
    .catch(err => console.error(err));

fetch('https://online-movie-database.p.rapidapi.com/title/get-user-reviews?tconst=tt0111161', options)
    .then(response => response.json())
    .then(data => {
        const list = data.reviews;
        list.map((item) => {
            const author = item.author.displayName;
            const text = item.reviewText;
            const rev = `<li class="reviews-block"><h3 class="reviews-title">${author}</h3> <p class="reviews-text">${text}</p></li>`;
            document.querySelector('.reviews').innerHTML += rev;
        });
    })
    .catch(err => console.error(err));

fetch('https://online-movie-database.p.rapidapi.com/title/get-news?tconst=tt0111161&limit=10', options)
    .then(response => response.json())
    .then(data => {
            const news = data.items;
            news.map((item) =>{
            const newsbody = item.body;
            const head = item.head;
            const imgnews = item.image.url;
            const datenews = item.publishDateTime;
            const newss = `
    <div class="movie-list-item">
                    <img class="movie-list-item-img" src="${imgnews}" alt="">
                    <p class="movie-list-item-desc-date">${datenews}</p>
                    <span class="movie-list-item-title">${head}</span>
                    <p class="movie-list-item-desc">${newsbody}</p>
                </div>`;
            document.querySelector('.movie-list').innerHTML += newss;
        })
        const arrows = document.querySelectorAll(".arrow");
        const movieLists = document.querySelectorAll(".movie-list");
        arrows.forEach((arrow, i) => {
            const itemNumber = movieLists[i].querySelectorAll("img").length;
            let clickCounter = 0;
            arrow.addEventListener("click", () => {
                const ratio = Math.floor(window.innerWidth / 270);
                clickCounter++;
                if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
                    movieLists[i].style.transform = `translateX(${
                        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
                    }px)`;
                } else {
                    movieLists[i].style.transform = "translateX(0)";
                    clickCounter = 0;
                }
            });
            console.log(Math.floor(window.innerWidth / 270));
        });
        })
    .catch(err => console.error(err));

fetch('https://online-movie-database.p.rapidapi.com/title/list-popular-genres', options)
    .then(response => response.json())
    .then(data => {
       const genres = data.genres;
       genres.map((item) => {
           const desc = item.description;
           const text = `<li><a class="description-item" href="">${desc}</a></li>`;
           document.querySelector('.description').innerHTML += text;
       })
    })
    .catch(err => console.error(err));

fetch('https://online-movie-database.p.rapidapi.com/actors/get-bio?nconst=nm0000209', options)
    .then(response => response.json())
    .then(data => {
        const actorbio = data;
        const actorimg = actorbio.image.url;
        const actorname = actorbio.name;
        const actorrealname = actorbio.realName;
        const actorbirthdate = actorbio.birthDate;
        const sctorbirthplace = actorbio.birthPlace;
        const bio = `
                    <img class="bio-img" src="${actorimg}" alt="">
                    <div class="bio-card-text">
                        <h1 class="bio-title">${actorname}</h1>
                        <p class="bio-name"><b>Настоящее имя:</b> ${actorrealname}</p>
                        <p class="bio-birth"><b>Дата рождения:</b> ${actorbirthdate}</p>
                        <p class="bio-birth"><b>Место рождения:</b> ${sctorbirthplace}</p>
                        <h2 class="bio-mini-title">Краткая биография</h2>
                        <p class="bio-mini"></p>
                    </div>`;
        document.querySelector('.bio-card').innerHTML += bio;

        const actorbiomini = data.miniBios;
        actorbiomini.map ((item) => {
            const actorbiotext = item.text;
            const text = `<p align="justify" class="bio-text">${actorbiotext}</p></div>`;
            document.querySelector('.bio-mini').innerHTML += text;
        });
        })

        .catch(err => console.error(err));

fetch('https://online-movie-database.p.rapidapi.com/actors/get-all-filmography?nconst=nm0000209', options)
    .then(response => response.json())
    .then(data => {
        const filmography = data.filmography;
        filmography.map((item) =>{
            const filmtitle = item.title;
            const filmyear = item.year;
            const filmcategory = item.category;
            const filmimg = item.image.url;
            const filmstatus = item.status;
            const filmtitleType = item.titleType;
            const filmcard = `
                <div class="filmography-card">
                    <img class="filmography-img" src="${filmimg}" alt="">
                    <div class="filmography-text">
                        <p class="filmography-title">${filmtitle} </p>
                        <p class="filmography-year"><b>Год:</b> ${filmyear}</p>
                        <p class="filmography-category"><b>Категория:</b> ${filmcategory}</p>
                        <p class="filmography-status"><b>Статус:</b> <span class="filmography-status-span">${filmstatus}</span></p>
                        <p class="filmography-type"><b>Тип:</b> ${filmtitleType}</p>
                    </div>
                </div>`;
            document.querySelector('.filmography-cards').innerHTML += filmcard;
        });
    })
    .catch(err => console.error(err));

fetch('https://online-movie-database.p.rapidapi.com/actors/get-known-for?nconst=nm0000209', options)
    .then(response => response.json())
    .then(data => {
        const knowfor = data;
        knowfor.map((item) => {
            const knowfortitle = item.title.title;
            const knowforimg = item.title.image.url;
            const knowforyear = item.title.year;
            const knowforrat = item.imdbRating;
            const knowforcat = item.summary.category;
            const knowforcard = `
                <div class="know-for-card">
                    <img class="know-for-img" src="${knowforimg}" alt="">
                     <div class="know-for-text">
                        <p class="know-for-title">${knowfortitle} </p>
                         <p class="know-for-year"><b>Год:</b> ${knowforyear}</p>
                        <p class="know-for-category"><b>Категория:</b> ${knowforcat}</p>
                         <p class="know-for-rating"><b>Рейтинг:</b> <span class="know-for-rating-span">${knowforrat}</span></p>
                    </div>
              </div>`;
            document.querySelector('.know-for-cards').innerHTML += knowforcard;
        })
    })
    .catch(err => console.error(err));

fetch('https://online-movie-database.p.rapidapi.com/actors/get-interesting-jobs?nconst=nm0000209', options)
    .then(response => response.json())
    .then(data => {
        const joblist = data;
        joblist.map((item) =>{
            const idjob = item;
            const job = `<li class="lijob">${idjob}</li>`;
            document.querySelector(".jobs").innerHTML += job;
        });
    })
    .catch(err => console.error(err));


    const ball = document.querySelector(".toggle-ball");
    const items = document.querySelectorAll(
        ".body,.movie-list-title, li, .navbar-container,.sidebar,.left-menu-icon,.toggle, .menu-list-item, .logo, .nav, .nav-toggle, .navbar-item, .dropdown-btn"
    );
    ball.addEventListener("click", () => {
        items.forEach((item) => {
            item.classList.toggle("active");
        });
        ball.classList.toggle("active");
    });

