var btn_prev = document.querySelector('.btn_prev');
var btn_next = document.querySelector('.btn_next');

var blok1 = document.querySelector('.blok1');
var blok2 = document.querySelector('.blok2');
var blok3 = document.querySelector('.blok3');
var blok4 = document.querySelector('.blok4');

var home = document.querySelector('.home');
var about = document.querySelector('.about');
var service = document.querySelector('.service');
var contact = document.querySelector('.contact');
var bloc = document.querySelector('.bloc');

var i = 0;

home.addEventListener('click' , function(){
    blok1.style.display = 'block';
    blok2.style.display = 'none';
    blok3.style.display = 'none';
    blok4.style.display = 'none';
})  
home.addEventListener('click' , function(){
    blok1.style.display = 'flex'
})


about.addEventListener('click' , function(){
    blok1.style.display = 'none';
    blok2.style.display = 'block';
    blok3.style.display = 'none';
    blok4.style.display = 'none';
})
about.addEventListener('click' , function(){
    blok2.style.display = 'flex';
})


service.addEventListener('click' , function(){
    blok1.style.display = 'none';
    blok2.style.display = 'none';
    blok3.style.display = 'block';
    blok4.style.display = 'none';
})
service.addEventListener('click' , function(){
    blok3.style.display = 'flex'
})

contact.addEventListener('click' , function(){
    blok1.style.display = 'none';
    blok2.style.display = 'none';
    blok3.style.display = 'none';
    blok4.style.display = 'block';
})
contact.addEventListener('click' , function(){
    blok4.style.display = 'flex';
})
