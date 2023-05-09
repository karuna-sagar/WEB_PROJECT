'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};



const closeModal = function (){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

for(let i=0;i<btnOpenModal.length;i++)
    btnOpenModal[i].addEventListener('click' , openModal);

btnCloseModal.addEventListener('click', closeModal);overlay.addEventListener('click', closeModal);    

document.addEventListener('keydown',function (e) {
    // console.log(e);
    if(e.key === 'Escape'){
        if(!modal.classList.contains('hidden')){//agar modal hidden class ko contain nhi karta hai toh close model start kar do matlab jab hm escape key dabayenge toh tab hidden class on nhi hoga tab hm chahenge ki jaise hi escape dabaye waise hi pop up window close ho jaye..
            closeModal();
        }
    }
})
