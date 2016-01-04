var films = [
    {
        name: "Gravity",
        year: "2013",
        info: "A medical engineer and an astronaut work together to survive after an accident leaves them adrift in space.",
        image:  "D:/JS/js-films/img/Gravity-692x1024.jpg"
    },
    {
        name: "Interstellar",
        year: "2014",
        info: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        image:  "D:/JS/js-films/img/Interstellar-655x1024.jpg"
    },
    {
        name: "StarWars",
        year: "2015",
        info: "Three decades after the defeat of the Galactic Empire, a new threat arises. The First Order attempts to rule the galaxy and only a ragtag group of heroes can stop them, along with the help of the Resistance.",
        image:  "D:/JS/js-films/img/star-wars-691x1024.jpg"
    }
];

window.onload = function() {

    var buttons = document.querySelectorAll(".btn");

    for (var i = 0; i < buttons.length; i++) {
        addEventListener(i);
    }

    function addEventListener(i) {
        function onButtonClick() {
            var attribute = buttons[i].getAttribute("data-film");
            for (var j = 0; j < films.length; j++) {
                if (attribute === films[j].name) {
                    showFilm(films[j]);

                }
            }
        }
        buttons[i].addEventListener("click", onButtonClick, false);
    }

    function showFilm(film) {
        document.querySelector("#filmImage").setAttribute("src", film.image);
        document.querySelector("#filmTitle").innerText = film.name;
        document.querySelector("#filmYear").innerText = film.year;
        document.querySelector("#filmInfo").innerText = film.info;

    }
};

