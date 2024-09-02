import { Vector2D } from "../system/vector.ts";


export class Player {
    // Variable types.
    x:          number;
    y:          number;

    interactable: boolean;

    move_left:  number;
    move_right: number;
    move_up:    number;
    move_down:  number;
    speed:      number;


    constructor(x: number, y: number) {
        // Coordinates.
        this.x = x;
        this.y = y;


        // Interaction data.
        this.interactable = false;

        
        // Movement.
        this.move_left =    0;
        this.move_right =   0;
        this.move_up =      0;
        this.move_down =    0;
        this.speed =        200;
    }


    tick(delta_time: number, mouse_pos: {x: number, y: number}) {
        const move_vec: {x: number, y: number} = new Vector2D((this.move_right - this.move_left), (this.move_down - this.move_up)).getNormal();
        this.x += move_vec.x * this.speed * delta_time;
        this.y += move_vec.y * this.speed * delta_time;
    }


    draw(ctx: CanvasRenderingContext2D) {//TODO imagelib
        ctx.fillStyle = "blue";
        ctx.fillRect(this.x, this.y, 32, 32);
    }
}
