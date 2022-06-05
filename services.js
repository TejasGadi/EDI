const setTimeBtn = document.querySelector('.set-btn');
const hideContainer = document.querySelector('.hide-container');
const submitBtn = document.querySelector('.hide-container');


setTimeBtn.addEventListener('click', (e) => {
    hideContainer.style.display = "flex";
})

submitBtn.addEventListener('click', (e) => {
    hideContainer.style.display = "none";
})