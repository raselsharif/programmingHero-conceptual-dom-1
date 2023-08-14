
document.getElementById('post-btn').addEventListener('click', function () {
    const postMsg = document.querySelector("#post-msg");
    const errorMsg = document.querySelector('#error-msg');

    if (postMsg.value === '') {
        errorMsg.innerText = "Pls! write something in review area.";
    } else {
        const postContainer = document.querySelector('#post-section');

        const p = document.createElement('p');
        p.classList.add('post')
        p.innerText = postMsg.value;

        postContainer.append(p);
        postMsg.value = '';
        errorMsg.innerText = "";

    }

})