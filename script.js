let turnMessage = document.querySelector('.turn-message'),
    board = document.querySelector('.board'),
    cells = document.querySelectorAll('.cell'),
    result = document.querySelector('.result'),
    start = document.querySelector('.game-start'),
    player = 'X'
    arrX = [],
    arrO = [];

start.addEventListener("click", startGame);

function startGame(){
    cells.forEach((cell) =>{
        cell.innerHTML = '';
    });
}

for ( i = 0; i < cells.length; i++ ){
    cells[i].addEventListener('click', drawMark, {once: true})
    if ( cells[i].innerHTML === 'X' ) arrX.push(i);
    else arrO.push(i);
};

console.log(arrX);
console.log(arrO);

function drawMark(e){
    e.target.innerHTML = player;
    changePlayer();
    turnMessage.innerHTML = `It is ${player} turn`;

}

function changePlayer(){
    player === 'X' ? (player = 'O'): (player = 'X');
}

function checkWinner(){

}