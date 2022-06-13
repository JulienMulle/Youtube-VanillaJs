// 1 creation class
// 2 instancer ses objets
// 3 creation du tableau
// 4 envoyer les objets dans le tableau
// 5 creation de la boucle qui va parcourir mon tableau et injecter dans mon html
// 6 rajouter un input qui va regarder si les lettres sont contenues dans le titre

//1
class VideoYoutube{
    constructor(video,title, profilImg, youtubeName,view,datePosted ){
        this.video = video;
        this.title = title ;
        this.profilImg = profilImg;
        this.youtubeName = youtubeName;
        this.view = view;
        //this.datePosted = datePosted;
    }
};

//2, 3, 4
const videoList = [
    new VideoYoutube("https://placekitten.com/g/500/501", "chaton trop mignon", "https://placedog.net/200", "jean", 178,),
    new VideoYoutube("https://placekitten.com/500/502", "OMG un chat !!!!!!!!!", "https://placedog.net/201", "pierre", 220,),
    new VideoYoutube("https://placekitten.com/500/503", "petitminou joue avec une souris trop cool !", "https://placedog.net/202", "luc", 600,),
    new VideoYoutube("https://placekitten.com/500/504", "minou ne sent pas tres bon", "https://placedog.net/203", "nicolas", 500,),
    new VideoYoutube("https://placekitten.com/500/505", "spidercat marche au plafond", "https://placedog.net/204", "charlotte", 300,),
    new VideoYoutube("https://placekitten.com/500/506", "chat et chien trooooop stylaiiiiiiiis", "https://placedog.net/205", "emilie", 800,),
    new VideoYoutube("https://placekitten.com/500/507", "smellyCat va prendre une douche", "https://placedog.net/206", "jeanne", 10000,),
    new VideoYoutube("https://placekitten.com/500/508", "Un chat monte dans un arbre", "https://placedog.net/207", "luce", 500,),
    new VideoYoutube("https://placekitten.com/500/509", "ATTENTION chat trop CLASSSSE !!!!!", "https://placedog.net/208", "marie", 500,),
    new VideoYoutube("https://placekitten.com/500/510", "KITTY !! KITTY !! KITTY !! KITTY !! KITTY !! ", "https://placedog.net/209", "louis", 200,),
];

//5
//je vais chercher l'element qui va stocker mes video
const videoContainer = document.querySelector(".cards");
const inputSearch = document.querySelector(".header");
//J'injecte la barre de recherche dans mon html
inputSearch.innerHTML = 
    `
        <div class="headerContainer">
            <h1>youtube</h1>
            <input type=search id="searchBar" size= 30 class="headerContainerIpunt">
        </div>
    `;
//je recupere et je le stock dans une variable
const searchBar = document.querySelector("#searchBar");

//je crée la logique de la recherche 
searchBar.addEventListener("input",(e)=>{
    videoContainer.innerHTML= ``;
    const searchValue = e.target.value.toLowerCase();
    const videoListFiltered = videoList.filter(element => element.title.toLowerCase().includes(searchValue));
    console.log(videoListFiltered);
    for(let i = 0; i <videoListFiltered.length; i++){
            videoContainer.innerHTML += 
                `
                <div class="container">
                    <div class="imgContainer">
                        <img class="img" src=${videoListFiltered[i].video} alt=${videoListFiltered[i].title}>
                    </div>
                    <div class="profilContainer">
                        <div class="profilContainer-img">
                            <img class="profilContainerImg" src=${videoListFiltered[i].profilImg}>
                        </div>
                        <div class="profilContainer-info">
                            <h3 class="profilContainerTitle">${videoListFiltered[i].title}</h3>
                            <div class="profilContainer-account">
                                <p class="profilContainerName"> ${videoListFiltered[i].youtubeName}</p>
                                <p class="profilContainerView">${videoListFiltered[i].view} k vues</p>
                            </div>
                        </div>
                    </div>
             </div>
                `
        }
        
    }
);

//je boucle sur mon tableau pour injecter mon html 
for (let i = 0; i < videoList.length; i++){
    videoContainer.innerHTML += 
        `
            <div class="container">
                <div class="imgContainer">
                    <img class="img" src=${videoList[i].video} alt=${videoList[i].title}>
                </div>
                <div class="profilContainer">
                    <div class="profilContainer-img">
                        <img class="profilContainerImg" src=${videoList[i].profilImg}>
                    </div>
                    <div class="profilContainer-info">
                        <h3 class="profilContainerTitle">${videoList[i].title}</h3>
                        <div class="profilContainer-account">
                            <p class="profilContainerName"> ${videoList[i].youtubeName}</p>
                            <p class="profilContainerView">${videoList[i].view} k vues</p>
                        </div>
                    </div>
                </div>
            </div>
        `
}