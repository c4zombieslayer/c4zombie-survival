import { keyDownEvent, keyUpEvent, mouseDownEvent, mouseUpEvent, mouseMoveEvent } from "../helper/input_handler.js";


export  class Game {
    constructor() {

        this.run_loop = false;
        this.canvas =   document.getElementById("game-canvas");;
        this.ctx =      this.canvas.getContext("2d");
        
        this.handleMouseDown =  ()=>mouseDownEvent(this.mouse_pos);
        this.handleMouseUp =    ()=>mouseUpEvent(this.mouse_pos);
        this.handleMouseMove =  ()=>mouseMoveEvent(this.mouse_pos);
        this.mouse_pos =        {x: 0, y: 0};

        this.environment =  [];
        this.gui =          [];

    }


    gameLoop = (t) => {
        console.log(t)
        
        // Request next frame.
        if(this.run_loop) requestAnimationFrame(this.gameLoop);
    }


    initiallize() {
        // Connect event listeners.
        document.addEventListener("keydown",    keyDownEvent);
        document.addEventListener("keyup",      keyUpEvent);
        this.canvas.addEventListener("mousedown",    this.handleMouseDown);
        this.canvas.addEventListener("mouseup",      this.handleMouseUp);
        this.canvas.addEventListener("mousemove",    this.handleMouseMove);
        
        // Begin game loop.
        this.run_loop = true;
        requestAnimationFrame(this.gameLoop);
    }


    shutdown() {
        // Disconnect event listeners.
        document.removeEventListener("keydown",      keyDownEvent);
        document.removeEventListener("keyup",      keyUpEvent);
        this.canvas.removeEventListener("mousedown",    this.handleMouseDown);
        this.canvas.removeEventListener("mouseup",    this.handleMouseUp);
        this.canvas.removeEventListener("mousemove",    this.handleMouseMove);

        // Shut down game loop.
        this.run_loop = false;
        
        // Clear game assets.
        this.environment =  [];
        this.gui =          [];
    }
}