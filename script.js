'use sctrict';

let rndm = document.querySelector('.random'),
    rndmOutput = rndm.querySelector('.random__output'),
    rndmBtn = rndm.querySelector('.random__btn');


function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
    };

function giveRandom() {
    let rndmInt = randomInteger(1, 1000);
    rndmOutput.innerHTML = rndmInt;
}

rndmBtn.addEventListener('click', function() {
    giveRandom();
})
