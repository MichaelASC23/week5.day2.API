//refences
let button = document.getElementById("joke-btn");
let randJoke = document.querySelector("#jokes"); 
let memebtn = document.querySelector("#meme-btn");
let resetbtn = document.querySelector("#reset-btn")

button.onclick = function(event){
    event.preventDefault(); 
    // defining url
    const url = "https://official-joke-api.appspot.com/random_joke";

    fetch(url)//fetching url
    .then(function(response){
        console.log(response);
        return response.json();
    })
    .then(function(jokeJSON){
       console.log(jokeJSON); 
        
       //Joke Container
       let jokeContainer = document.createElement("div");
       randJoke.appendChild(jokeContainer);
       
       //Joke
       let punchJoke = document.createElement("p");
       console.log(punchJoke); 
       punchJoke.innerHTML = jokeJSON.setup; 
       jokeContainer.appendChild(punchJoke); 

       //Punchline
       let newJoke = document.createElement("p"); 
       console.log(newJoke);
       newJoke.innerHTML = jokeJSON.punchline; 
       jokeContainer.appendChild(newJoke);
    })
}

memebtn.onclick = function(){
    const url = "https://api.imgflip.com/get_memes"

    fetch(url)
    .then(function(memeResponse){
        console.log(memeResponse);
        return memeResponse.json();
    })
    .then(function(memeJSON){
        console.log(memeJSON);

    
        // Random generator:
        let randNum = Math.floor(Math.random()*101);
    
        let memeContainer = document.createElement("div");
        randJoke.appendChild(memeContainer)

        let memeName = document.createElement("p")
        memeName.innerHTML = memeJSON.data.memes[randNum].name;
        
        memeContainer.appendChild(memeName)
        let memeImg = document.createElement("img");
        memeImg.src = memeJSON.data.memes[randNum].url;
        memeContainer.appendChild(memeImg);
    })
}
// allow the site to reload by creating <form> and no preventDefault
resetbtn.onclick = function(){

}