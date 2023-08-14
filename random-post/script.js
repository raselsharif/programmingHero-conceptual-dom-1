
const postMsg = [
    { joke: "Why don't scientists trust atoms?", name: "Atom" },
    { joke: "Parallel lines have so much in common.", name: "Parallel lines" },
    { joke: "Why don't skeletons fight each other?", name: "Skeletons" },
    { joke: "I'm reading a book on anti-gravity.", name: "Anti-gravity" },
    { joke: "Did you hear about the claustrophobic astronaut?", name: "Astronaut" },
    { joke: "Why don't some couples go to the gym?", name: "Couples" },
    { joke: "Why did the scarecrow win an award?", name: "Scarecrow" },
    { joke: "How do you organize a space party?", name: "Space party" },
    { joke: "I used to play piano by ear.", name: "Piano" },
    { joke: "Why did the bicycle fall over?", name: "Bicycle" }
];


// console.log(postMsg[1]);

document.getElementById('random').addEventListener('click', function () {
    const randomContainer = document.getElementById('random-container');
    const post = document.getElementById('post');
    const name = document.getElementById('name');

    // const p = document.createElement('p');
    // const h3 = document.createElement('h3');


    const randomQuote = Math.floor(Math.random() * postMsg.length);

    post.innerText = postMsg[randomQuote].joke;
    name.innerText = postMsg[randomQuote].name;

    // randomContainer.appendChild(p)
    // randomContainer.appendChild(h3)

})