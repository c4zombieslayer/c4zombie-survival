export class Item {
    // Variable types.
    x: number;
    y: number;

    interactable: boolean;

    constructor(x: number, y: number) {
        // Coordinates.
        this.x = x;
        this.y = y;


        // Interaction data.
        this.interactable = true;
        
    }


    tick(delta_time: number, mouse_pos: {x: number, y: number}) {
        
    }


    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = "green";
        ctx.fillRect(this.x, this.y, 16, 16);
    }
}