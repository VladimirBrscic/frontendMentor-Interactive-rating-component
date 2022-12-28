const form = document.querySelector('form');
const ratingButtons = document.querySelectorAll('input');
const selectedValue = document.querySelector('.card-thanks__selection-num');
const card = document.querySelector('.card');
const cardThanks = document.querySelector('.card-thanks');


form.addEventListener('submit', (e)=>{
    e.preventDefault();
    ratingButtons.forEach(radio => {
        if (radio.checked) {
            selectedValue.innerHTML = radio.value;
            console.log(radio.parentNode);
            card.classList.toggle('hide');
            cardThanks.classList.toggle('show');
        }
    })
})
