const VideoYoutubeRecente = [
    {
        title: "L'AFFAIRE P. DIDDY : le résumé",
        miniature: "img/Seb.jpg",
        releaseDate: "2025-05-04",
        youtubeur: "SEB",
        view: "2,2 M",
        logoYoutubeur: "img/logoSeb.jpg",
        duration: "1:14:47",
        validated: true,
    },
    {
        title: "J'ai ouvert le Grand Huit le plus profond du monde",
        miniature: "img/Fiouze.jpg",
        releaseDate: "2025-05-05",
        youtubeur: "Fiouze",
        view: "153 k",
        logoYoutubeur: "img/logoFiouze.jpg",
        duration: "18:39",
        validated: false,
    },
    {
        title: "Résumé : Le BARÇA renverse Valladolid...",
        miniature: "img/ResumeLiga.jpg",
        releaseDate: "2025-05-03",
        youtubeur: "beIN SPORT France",
        view: "291 k",
        logoYoutubeur: "img/logobeIN.jpg",
        duration: "8:26",
        validated: true,
    },
    {
        title: "J'OUVRE 100KG DE COLIS PERDUS !",
        miniature: "img/Joyca.jpg",
        releaseDate: "2025-05-04",
        youtubeur: "Lil Joyca",
        view: "958 k",
        logoYoutubeur: "img/logoJoyca.jpg",
        duration: "16:16",
        validated: true,
    },
    {
        title: "1 HEURE DE GTA ULTIME",
        miniature: "img/Beast.jpg",
        releaseDate: "2025-05-03",
        youtubeur: "More MrBeast Gaming",
        view: "4,9 M",
        logoYoutubeur: "img/logoBeast.jpg",
        duration: "54:00",
        validated: true,
    },
    {
        title: "SCANDALE P DIDDY...",
        miniature: "img/Hugo.jpg",
        releaseDate: "2025-05-05",
        youtubeur: "HugoDécrypte - Actus du jour",
        view: "460 k",
        logoYoutubeur: "img/logoHugo.jpg",
        duration: "12:10",
        validated: true,
    },
];

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const container = document.getElementById("block-videos");
const searchInput = document.querySelector(".bar-de-recherche");
const form = document.querySelector(".formDeRecherche"); 


function afficherVideos(liste) {
    container.innerHTML = "";

     liste.forEach(video => {
        const card = document.createElement("div");
        card.classList.add("carte-video");

        card.innerHTML = `
            <div class="block-miniature">
                <img src="${video.miniature}" alt="Miniature de ${video.title}" class="miniature" />
                <span class="duree">${video.duration}</span>
            </div>
            <div class="infos-video">
                <img src="${video.logoYoutubeur}" alt="${video.youtubeur}" class="logo" />
                <div class="texte-video">
                    <h3>${video.title}</h3>
                    <p>${video.youtubeur} ${video.validated ? "✅" : ""}</p>
                    <p>${video.view} • ${getDateRelativeString(video.releaseDate)}</p>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

afficherVideos(VideoYoutubeRecente);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

form.addEventListener("submit", (event) => {
    event.preventDefault(); 

    const valueEntry = searchInput.value.toLowerCase();
    const resultat = VideoYoutubeRecente.filter(video =>
        video.title.toLowerCase().includes(valueEntry) ||
        video.youtubeur.toLowerCase().includes(valueEntry)
    );

    afficherVideos(resultat);
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function getDateRelativeString(releaseDate) {
    const today = new Date();
    const dateVideo = new Date(releaseDate);
    const diffTime = today - dateVideo;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return "aujourd'hui";
    if (diffDays === 1) return "il y a 1 jour";
    return `il y a ${diffDays} jours`;
}