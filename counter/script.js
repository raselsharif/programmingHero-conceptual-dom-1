
const counter = document.getElementById('count');

let count = 0;
document.getElementById("increase").addEventListener('click', function () {

    if (count < 33) {
        count++;
    }
    counter.innerText = count;

    // counter.innerText++;

})

document.getElementById("decrease").addEventListener('click', function () {
    count--;
    counter.innerText = count;
    // counter.innerText--;

})

document.getElementById("reset").addEventListener('click', function () {
    counter.innerText = "Start Over";
    count = 0;

})
