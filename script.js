const menu = document.querySelector('.menu__list');
document.querySelector('.menu__burger').addEventListener('click', ()=>{
    menu.classList.toggle('active');
});

document.querySelectorAll('.menu__item').forEach(item => {
    item.addEventListener('click', ()=>{
        menu.classList.remove('active');
    });
})