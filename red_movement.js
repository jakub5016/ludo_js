
/**
 * Class to describe the way how board behavies.
 * Start of this linked list is in a place where red pawn starts
 *
 */
class circularLinkedList{
    constructor(data){
        this.data = data
    }

    getData(index){
        while (true) {
            if (index < (this.data.length)){
                return this.data[index]
            }
            else{
                index = index - this.data.length
            }
        }
    }

}
/**
 * Pawn that is on the board (not in base or outside the board)
 * Contains: color and current position
 */
class pawn{
    constructor(color){
        if (color == 'red'){
            this.currentPosition = 0;
            this.x = 240
            this.y = 505
        }
        else{
            throw new Error("Bad color");
        }

        this.color = color
    }

    move(how_to_go){
        this.currentPosition += 1
        this.x = (how_to_go[0] * 35) + this.x
        this.y = (how_to_go[1] * 35) + this.y
    }
}

function makeMovement(numberOfMeshes, pawn, boardStatus){
    for (let i =0; i < numberOfMeshes; i++){
        how_to_go = boardStatus.getData(pawn.currentPosition);
        pawn.move(how_to_go);
    }
}

red_guy = new pawn('red')
console.log(red_guy.x)
