const games = [
    {
        game_name: "Minecraft",
        release_date: "November 18 2011",
        actively_played: "A lot!",
        review_rate: "10",
        genre: "Survival/Adventure-Action, SandBox",
    },
    {
        game_name: "Stardew Valley",
        release_date: "February 26 2016",
        actively_played: "Sometimes",
        review_rate: "8",
        genre: "Indie, Adventure",
    },
    {
        game_name: "R.E.P.O",
        release_date: "February 16 2025",
        actively_played: "A lot!",
        review_rate: "10",
        genre: "Horror",
    },
    {
        game_name: "Apex Legends",
        release_date: "February 4 2019",
        actively_played: "Sometimes",
        review_rate: "7",
        genre: "First-Person Shooter, Battle Royale",
    },
    {
        game_name: "Runescape",
        release_date: "January 4 2001",
        actively_played: "A lot!",
        review_rate: "9",
        genre: "MMORPG, Fantasy",
    },
    {
        game_name: "The Sims 4",
        release_date: "September 2 2014",
        actively_played: "Sometimes",
        review_rate: "7",
        genre: "Life Simulation",
        game_pic: "The Sims 4.jpg"
    }
]

const establishGameInfo = (index) => {
    console.log(games[index].game_name)
    $("p").eq(index).html(`<b>${games[index].game_name}</b><br>${games[index].genre} Release Date- ${games[index].release_date}`);
};

const showInformation = () => {
    setUpBoxes();
    jQuery.each($(".box"),establishGameInfo);

$(".box").on("click", function() {

let indexGame = $(".box").index(this);
$(this).find("p").text(`Review- ${games[indexGame].review_rate}`);
});

$(".box").on("mouseover", function () {
    $(this).css("border", "2px dotted white");
    let indexGame = $(".box").index(this);
    $(this).find("p").text(`Actively played?- ${games[indexGame].actively_played} Release Date- ${games[indexGame].release_date}`);
});

$(".box").on("mouseout", function () {
    $(this).css("border", "2px dotted pink");
    let indexGame = $(".box").index(this);
    $(this).find("p").html(`<b>${games[indexGame].game_name}</b><br>${games[indexGame].genre}<br><i> Release Date- ${games[indexGame].release_date}`);
    });
    };

const setUpBoxes = ()=> {
    let wrapperRef = $('.container');
    games.forEach((games)=>{
        let boxMarkup= ` <div class="box">
        <img class="game_pic" src="${games.game_name.toLowerCase()}.png" />
        <p class="review"></p>
        </div>`;
        wrapperRef.append(boxMarkup);

    }
);
}

let minecraftInfo = document.querySelector(".minecraft");
minecraftInfo.innerText = ("Out of the games listed above, I have played Minecraft the longest. The game reminds me of my childhood, sitting inside during school breaks and playing with my brother. Even now, as I'm going into my twenties, I still enjoy the game as I did when I was 11/12 years old.");

let stardewInfo = document.querySelector(".stardew");
stardewInfo.innerText = ("Next up is Stardew Valley! Similar to Minecraft, the player is given their grandfather's farm, and it's up to them to live up to the reputation! This is one of the relaxing games I tend to play the most.");

let repoInfo = document.querySelector(".repo");
repoInfo.innerText = ("One of my favorite friendly horror games to play! This game was just recently released to PC players. This game still has the horror elements to make it scary, yet when playing with friends, it can also have some funny moments! ");

let apexInfo = document.querySelector(".apex");
apexInfo.innerText = ("Apex Legends is a twist on battle royales. The player is given an array of legends to choose from, each having different abilities than the other. This is also another game that I enjoy playing with friends, as we can use our abilities in a teamwork setting.");

let runescapeInfo = document.querySelector(".runescape");
runescapeInfo.innerText = ("Runescape was one of the first games I had ever started playing on my own. I had randomly stumbled across it when I was 8 years old and I haven't stopped playing. It has been an enjoyable game to play continously throughout the years. I just haven't found another game like it quite yet! :)");

let simsInfo = document.querySelector(".sims");
simsInfo.innerText = ("Last but the least, The Sims 4 is a life simulation game. Just like Stardew Valley, this game is very calming to me, and I find myself playing it most when I want to relax. The customization is completely endless, especially with the amount of mod pack users can download now!");
$(document).ready(showInformation);