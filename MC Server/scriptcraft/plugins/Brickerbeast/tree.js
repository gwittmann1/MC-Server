function tree() {
    //checkpoint the starting location
    this.chkpt('tree');

    //build walls
    var blocksPerSide = 3;
    var height = 15;
    for (var heightCtr = 0; heightCtr < height; heightCtr++) {
        //Build 1 level of tree
        for (var wallCounter = 0; wallCounter < 4; wallCounter++) {
            for (var blockCounter = 1; blockCounter < blocksPerSide; ++blockCounter) {
                this.box(blocks.wood).fwd(1).turn(1);
            }
            this.turn(1);

        }
        this.up(1);
    }


    //build leaves
    this.fwd(7);
    this.turn(1);
    this.fwd(-6);
    this.hemisphere('18', 6, 'north');
    this.turn(-1);
    this.fwd(-3);
    this.turn(1);
    this.fwd(3);
    this.hemisphere(blocks.wood, 3, 'north');

    //return to the starting checkpoint
    this.move('tree');
}

var Drone = require('drone');
Drone.extend(tree);