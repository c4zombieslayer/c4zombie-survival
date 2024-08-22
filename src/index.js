import { keyDownEvent, keyUpEvent, mouseDownEvent, mouseUpEvent, mouseMoveEvent } from "./helper/input_handler.js";


class Game {
    constructor(canvas) {
        this.canvas =   document.getElementById("game-canvas");;
        this.ctx =      this.canvas.getContext("2d");
        
        this.handleMouseDown =  ()=>mouseDownEvent(this.mouse_pos);
        this.handleMouseUp =    ()=>mouseUpEvent(this.mouse_pos);
        this.handleMouseMove =  ()=>mouseMoveEvent(this.mouse_pos);
        this.mouse_pos =        {x: 0, y: 0};

        this.environment =  [];
        this.gui =          [];

    }

    initiallize() {
        document.addEventListener("keydown",    keyDownEvent);
        document.addEventListener("keyup",      keyUpEvent);
        this.canvas.addEventListener("mousedown",    this.handleMouseDown);
        this.canvas.addEventListener("mouseup",      this.handleMouseUp);
        this.canvas.addEventListener("mousemove",    this.handleMouseMove);
        
        
    }

    shutdown() {
        document.removeEventListener("keydown",      keyDownEvent);
        document.removeEventListener("keyup",      keyUpEvent);
        this.canvas.removeEventListener("mousedown",    this.handleMouseDown);
        this.canvas.removeEventListener("mouseup",    this.handleMouseUp);
        this.canvas.removeEventListener("mousemove",    this.handleMouseMove);

        this.environment =  [];
        this.gui =          [];
    }
}


let game = new Game();
game.initiallize();

game.shutdown();