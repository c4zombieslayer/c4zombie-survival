export class Player {
    x:      number;
    y:      number;
    move_x: number;
    move_y: number;


    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;

        this.move_x = 0;
        this.move_y = 0;
    }


    tick(delta_time: number, mouse_pos: {x: number, y: number}) {

    }


    draw(ctx: CanvasRenderingContext2D) {
        ctx.rect(this.x, this.y, 32, 32);
        ctx.fillStyle = "blue";
        ctx.fill();
    }
}