fetch('https://icanhazdadjoke.com/slack')
    .then(data => data.json())
    .then(jokeData =>{
        const joke = jokeData.attachments[0].text;
        const changeJoke = document.getElementById('jokeelement')
        changeJoke.innerHTML = joke;
    })