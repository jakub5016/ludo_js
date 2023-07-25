//Set all of the pawns

TURN = 'red'

const red_pawn_1 = document.getElementById('red_pawn_1')


// const red_pawn_2 = document.getElementById('red_pawn_2')
// red_pawn_2.style.left = red_x +35+ 'px'

// const red_pawn_3 = document.getElementById('red_pawn_3')
// red_pawn_3.style.top = red_y +35+ 'px'

// const red_pawn_4 = document.getElementById('red_pawn_4')
// red_pawn_4.style.top = red_y +35+ 'px'
// red_pawn_4.style.left = red_x +35+ 'px'

const div = document.getElementById("number")


moveArray = [ [ 0, -1 ], [ 0, -1 ], [ 0, -1 ], [ 0, -1 ],
    [ -1, -1 ] ,
    [-1, 0], [-1, 0], [-1, 0], [-1, 0], [-1, 0],
    [0, -1], [0, -1],
    [1, 0], [1, 0], [1, 0], [1, 0], [1, 0],
    [1, -1],
    [0, -1], [0, -1], [0, -1], [0, -1], [0, -1],
    ]

boardStatus = new circularLinkedList(moveArray) //Board size without a places close to the base

// Catch clicking a button
document.getElementById('dice_roller').onclick = function() {
    let number_got = Math.floor(Math.random() * 7)
    console.log(number_got)
    div.innerHTML = "Number: " +number_got

    if(red_pawn_1.out == true){
        makeMovement(number_got,red_pawn_1_class,boardStatus)
        red_pawn_1.x = red_pawn_1_class.x + 'px'
        red_pawn_1.y = red_pawn_1_class.y + 'px'
    }

    if ((number_got == 6) && (TURN == 'red')){
        var red_pawn_1_class = new pawn('red')
        red_pawn_1.style.left = red_pawn_1_class.x + 'px'
        red_pawn_1.style.top = red_pawn_1_class.y +'px'
    }
}
