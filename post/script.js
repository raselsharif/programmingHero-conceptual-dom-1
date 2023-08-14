
document.getElementById('post-btn').addEventListener('click', function () {
    const postMsg = document.querySelector("#post-msg");

    const postContainer = document.querySelector('#post-section');

    const p = document.createElement('p');
    p.classList.add('post')
    p.innerText = postMsg.value;

    postContainer.appendChild(p);
    postMsg.value = '';

})