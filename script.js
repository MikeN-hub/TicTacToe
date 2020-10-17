const game = document.querySelector('.game');
const result = document.querySelector('.result');

let cross = 'X';
let circle = 'O';
let count = 0;

let field = {
    a1: ['a1', false],
    a2: ['a2', false],
    a3: ['a3', false],
    a4: ['b1', false],
    a5: ['b2', false],
    a6: ['b3', false],
    a7: ['c1', false],
    a8: ['c2', false],
    a9: ['c3', false],
}

for ( let key in field ){
    document.querySelector(`.${field[key][0]}`).addEventListener('click', ()=> {
        if ( field[key][1] == false ){
            if ( count % 2 ){
                document.querySelector(`.${field[key][0]}`).innerHTML = circle;
                field[key].push('circle');
            }else{
                document.querySelector(`.${field[key][0]}`).innerHTML = cross;
                field[key].push('cross');
            }
            field[key][1] = true;
            count++;
        }
    });
}

function checkWinner(){
    let allCells = document.getElementsByClassName('cell');
    if (allCells[0].innerHTML == cross && allCells[1].innerHTML == cross && allCells[2].innerHTML == cross){
        alert('win')
    }
}
checkWinner();