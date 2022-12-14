

const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(()=> {
        mario.classList.remove('jump')
    }, 500);
}

const lopp = setInterval(() => {
    const pipePosition =  pipe.offsetLeft;
    const marioPosition = window.getComputedStyle(mario).bottom.replace('px' , '');
    
    if ( pipePosition  <= 100 && marioPosition < 100) {
        pipe.style.animation = 'none' ;
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none' ;
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'imagens/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'
    }

} , 10) ;

document.addEventListener('keydown', jump);

var btn = document. querySelector("#reset")
btn. addEventListener("click", function() {
location. reload();
});

var jump1 = document.querySelector("#jump")
jump1.addEventListener("click", function() {
    mario.classList.add('jump');

    setTimeout(()=> {
        mario.classList.remove('jump')
    }, 1500);
}
);

