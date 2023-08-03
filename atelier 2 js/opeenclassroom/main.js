// Chapitre 01
//  declarer des variables et modifiez leurs valeurs

let numberOfSeasons = 6;
let numberOfEpisodes = 12;
let episodeTime = 45;
let commercialTime = 5;
let totalShowTime =(numberOfSeasons + numberOfEpisodes) * episodeTime *
commercialTime;

//  ----creer un compteur qui peut nous montrer que le nombre de fois q'on clic----------------------
 let compteur = 0;
 compteur++;
 compteur = 10;

// Create constants here==================

/*const hoursPerDay = 24;
const minutesPerHour = 60;
const secondsPerMinute = 60;*/

// enregistrer vos donnees avec des types de donnees========
 let episodetitle = 'the first time';
let episodeDurarion = 43;
let hasBeenWatched = false;

// définissez des OBJETS et leurs attributs avec des classes

let episode= {
    title:'the first time',
    duration: 43,
    hasBeenWatched: false,
};
let episodeTitle = episode.title;
let episodeDuration = episode.duration;
let episodehasBeenWatched = episode.hasBeenWatched;




//  creer des instances en utilisant le mot cle CLASS et NEW---------------
class Episode {
    constructor(title, duration, hasBeenWatched) 
    {
        this.title = title;
        this.duration = duration;
        this.hsaBeenWatched = hasBeenWatched;
    }
}

let firstEpisode = new Episode("vandam", 45, "false");
let secondEpisode = new Episode("jacson", 50, "true");
let thirdEpisode = new Episode("wilianm", 60, "false") 



// --------Regroupez vos donnees avec les tableaux et les objets===========
 

let episodes =['firstepisode', "secondepisode", "thirdepisode", "thirdepisode", "mbaye", "ibrahima" ];
episodes.push()
episodes.unshift(23);
// episodes.pop()
console.log(episodes);
let numberOfEpisodes = episodes.length;

// Chapitre 02=====================================

/* Choisissez la condition appropriée pour contrôler 
le déroulement de votre programme (if, else, switch)*/


let age = 18; 
let ages = 17;

let ageMajorite = 18 > 17;
let age2 = 18 < 17;

if(age2){
    console.log("autorisé")
}else{
    console.log("n'est pas autorisé");
}


let age;
let isControlParentalActive;
let ageMajorite = 18;

if (ageMajorite){
    console.log("vous etes autorise")
}else{
    alert("cette espace interdits aux personnes mineurs")
}


// ------------utiliser le scop-------------------------------------- 
let userLoggedIn = true;
let welcomeMessage = ''; // déclarer la variable ici

if (userLoggedIn) {
    welcomeMessage = 'Welcome back!'; // modifier la variable extérieure
} else {
    welcomeMessage = 'Welcome new user!'; // modifier la variable extérieure
}

console.log(welcomeMessage); // imprime 'Welcome back!'

// utiliser le switch==================

let firstUser = {
    name: "Mbaye",
    age: 22,
    accountLevel: "normal"
};
let secondUser = {
    name: "Moussa",
    age: 43,
    accountLevel: "premieum"
};
let thirdUser = {
    name: "Modu",
    age: 20,
    accountLevel: "mega-premieum"
};

switch (firstUser.accountLevel){
    case ('normal'):
        console.log('You have a account!');

        break;
        case ('premium'):
            console.log('You have a premium');

            break;
            case ('mega-premium'):
            console.log('You have a mega-premium');

            break;
            default:
            console.log('Unkonow a type');
}


// ===================BOUCLE============================
 let episodes =[
    new episodes("vandam", 45, "false"),
    new episodes("jacson", 50, "true"),
    new episodes("wilianm", 60, "false")
 ]
 for ( let episode of episodes){
    episode.hasBeenWatched = false;
 }

//  Gérez des erreurs et des exceptions dans votre programme==========================

// Travaillez sur les fonctions

//Définissez des méthodes d'instance et des propriétés
class Show {
    constructor(title, numberOfSeasons) {
      this.title = title;
      this.numberOfSeasons = numberOfSeasons;
      this.ratings = [];
      this.averageRating = 0;
    }
    
    addRating(rating) {
      this.ratings.push(rating);
      let sum = 0;
      for (let rating of this.ratings) {
        sum += rating;
      }
      
      this.averageRating = sum / this.ratings.length;
    }
  }

  const generateComponent = (show) => {
    const titleText = show.title;
    const seasonsText = show.numberOfSeasons + ' seasons';
    const episodesText = show.episodesPerSeason + ' episodes per season';
    return {
      titleText,
      seasonsText,
      episodesText
    };
  }


