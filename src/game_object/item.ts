export class Item {
    // Variable types.
    x: number;
    y: number;

    width:  number;
    height: number;

    interactable: boolean;

    constructor(x: number, y: number) {
        // Coordinates.
        this.x = x;
        this.y = y;


        // Size.
        this.width = 16;
        this.height = 16;


        // Interaction data.
        this.interactable = true;
        
    }


    tick(delta_time: number, mouse_pos: {x: number, y: number}) {
        
    }


    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = "green";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}