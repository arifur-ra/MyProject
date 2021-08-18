// select modal-btn,modal-overlay,close-btn
const openModalBtn = document.querySelector('.modal-btn')
const closeBtn = document.querySelector('.close-btn')
const modelOverlay = document.querySelector('.modal-overlay')

// when user clicks modal-btn add .open-modal to modal-overlay

// listen for click events on modal-btn and close-btn

openModalBtn.addEventListener('click', ()=>{
modelOverlay.classList.add('open-modal')
})
// when user clicks close-btn remove .open-modal from modal-overlay

closeBtn.addEventListener('click', ()=>{
    modelOverlay.classList.remove('open-modal')
})