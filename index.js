//Set all of the pawns

TURN = 'red'

const red_pawn_1 = document.getElementById('red_pawn_1')

var red_x = red_pawn_1.x;
var red_y = red_pawn_1.y;


const red_pawn_2 = document.getElementById('red_pawn_2')
red_pawn_2.style.left = red_x +35+ 'px'

const red_pawn_3 = document.getElementById('red_pawn_3')
red_pawn_3.style.top = red_y +35+ 'px'

const red_pawn_4 = document.getElementById('red_pawn_4')
red_pawn_4.style.top = red_y +35+ 'px'
red_pawn_4.style.left = red_x +35+ 'px'


// Catch clicking a button
document.getElementById('dice_roller').onclick = function() {
    let number_got = Math.floor(Math.random() * 7)
    console.log(number_got)
    if(red_pawn_1.out == true){
        red_pawn_1.style.top = red_y -(35*number_got)+ 'px'
    }

    if ((number_got == 6) && (TURN == 'red')){
        red_pawn_1.style.left = red_x +(35*4)+ 'px'
        red_pawn_1.style.top = red_y +35+ 'px'
        red_pawn_1.out = true
    }
}
