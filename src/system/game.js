import { Player } from "../environment/player.js";
import { keyDownEvent, keyUpEvent, mouseDownEvent, mouseUpEvent, mouseMoveEvent } from "../helper/input_handler.js";


export  class Game {
    constructor() {
        // Delta time handling.
        this.run_loop =     false;
        this.last_time =    0;


        // Canvas set up.
        this.canvas =   document.getElementById("game-canvas");;
        this.ctx =      this.canvas.getContext("2d");
        this.canvas.width = 800;
        this.canvas.height = 600;
        

        // Input handling.
        this.handleMouseDown =  () => mouseDownEvent(this.mouse_pos);
        this.handleMouseUp =    () => mouseUpEvent(this.mouse_pos);
        this.handleMouseMove =  () => mouseMoveEvent(this.mouse_pos);
        this.mouse_pos =        {x: 0, y: 0};


        // Environment and interface set up.
        this.environment =  [];
        this.gui =          [];
        this.player;
    }


    initiallize() {
        // Connect event listeners.
        document.addEventListener("keydown",    keyDownEvent);
        document.addEventListener("keyup",      keyUpEvent);
        this.canvas.addEventListener("mousedown",    this.handleMouseDown);
        this.canvas.addEventListener("mouseup",      this.handleMouseUp);
        this.canvas.addEventListener("mousemove",    this.handleMouseMove);


        // Create player instance.
        this.player = new Player(64, 64);//TODO set coords
        this.environment.push(this.player);


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


    getDeltaTime(time) {
        // Convert to seconds.
        time *= 0.001;


        // Calculate delta time.
        let delta_time = time - (this.last_time || time);
        this.last_time = time;


        // Return delta time.
        return delta_time;
    }


    tick(delta_time) {
        // Tick game.
        for(let i = 0; i < this.environment.length; ++i) {
            this.environment[i].tick(delta_time, this.mouse_pos);
        }
        for(let i = 0; i < this.gui.length; ++i) {
            this.gui[i].tick(delta_time, this.mouse_pos);
        }
    }


    draw(delta_time) {
        // Draw game.
        for(let i = 0; i < this.environment.length; ++i) {
            this.environment[i].draw(this.ctx);//TODO imagelib.
        }
        for(let i = 0; i < this.gui.length; ++i) {
            this.gui[i].draw(this.ctx);
        }
    }


    gameLoop = (time) => {
        // Get delta time.
        let delta_time = this.getDeltaTime(time);
        

        // Tick and draw game.
        this.tick(delta_time);
        this.draw(delta_time);


        // Request next frame.
        if(this.run_loop) requestAnimationFrame(this.gameLoop);
    }
}