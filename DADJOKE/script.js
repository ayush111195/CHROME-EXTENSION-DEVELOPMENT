fetch('https://icanhazdadjoke.com/slack')
.then(data=>data.json())
.then(jokeData=>{
    const jokeText=jokeData.attachments[0].text;
    const jokeElements=document.getElementById('jokeElements');
jokeElements.innerHTML=jokeText
})