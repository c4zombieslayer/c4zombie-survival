export class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.move_X = 0;
        this.move_y = 0;
    }

    tick(delta_time, mouse_pos) {

    }

    draw(ctx) {
        ctx.rect(this.x, this.y, 32, 32);
        ctx.fillStyle = "blue";
        ctx.fill();
    }
}