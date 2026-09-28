const jokercontainer = document.getElementById("joke");
const btn= document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,political,sexist";


let getJoke =() =>{
    fetch(url)
    .then(data => data.json())
       .then(item => {
            jokercontainer.innerHTML = `
                ${item.setup}
                ${item.delivery}
            `;
        });
}

btn.addEventListener("click", getJoke);
