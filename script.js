let game = document.querySelector('.game');

let field = ['.a1', '.a2', '.a3', '.b1', '.b2', '.b3', '.c1', '.c2', '.c3'];

let mark = 'X';

field.forEach((element)=>{
    document.querySelector(`${element}`).addEventListener('click', ()=>{
        document.querySelector(`${element}`).innerHTML = mark;
    })    
});
