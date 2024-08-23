import { Player } from "../environment/player.ts";
import { keyDownEvent, keyUpEvent, mouseDownEvent, mouseUpEvent, mouseMoveEvent } from "../helper/input_handler.ts";


export  class Game {
    run_loop:   boolean;
    last_time:  number;

    canvas: HTMLCanvasElement | any;
    ctx:    CanvasRenderingContext2D;

    mouse_pos:          {x: number, y: number};
    handleKeyDown:    (event: KeyboardEvent) => void;
    handleKeyUp:      (event: KeyboardEvent) => void;
    handleMouseDown:    (event: MouseEvent) => void;
    handleMouseUp:      (event: MouseEvent) => void;
    handleMouseMove:    (event: MouseEvent) => void;

    environment:    Array<{tick: (delta_time: number, mouse_pos:{x: number, y: number}) => void, draw: (ctx: CanvasRenderingContext2D) => void}>;
    gui:            Array<{tick: (delta_time: number, mouse_pos:{x: number, y: number}) => void, draw: (ctx: CanvasRenderingContext2D) => void}>;
    player:         Player;

    constructor() {
        // Delta time handling.
        this.run_loop =     false;
        this.last_time =    0;


        // Canvas set up.
        this.canvas =   document.getElementById("game-canvas");
        this.ctx =      this.canvas.getContext("2d");
        this.canvas.width = 800;
        this.canvas.height = 600;
        

        // Environment and interface set up.
        this.environment =  [];
        this.gui =          [];
        this.player;


        // Input handling.
        this.mouse_pos =        {x: 0, y: 0};
        this.handleKeyDown =    (event: KeyboardEvent) =>   keyDownEvent(event, this.player);
        this.handleKeyUp =      (event: KeyboardEvent) =>   keyUpEvent(event, this.player);
        this.handleMouseDown =  (event: MouseEvent) =>      mouseDownEvent(event, this.mouse_pos);
        this.handleMouseUp =    (event: MouseEvent) =>      mouseUpEvent(event, this.mouse_pos);
        this.handleMouseMove =  (event: MouseEvent) =>      mouseMoveEvent(event, this.mouse_pos, this.canvas);
    }


    initiallize() {
        // Create player instance.
        this.player = new Player(64, 64);//TODO set coords
        this.environment.push(this.player);


        // Connect event listeners.
        document.addEventListener("keydown",        this.handleKeyDown);
        document.addEventListener("keyup",          this.handleKeyUp);
        this.canvas.addEventListener("mousedown",   this.handleMouseDown);
        this.canvas.addEventListener("mouseup",     this.handleMouseUp);
        this.canvas.addEventListener("mousemove",   this.handleMouseMove);


        // Begin game loop.
        this.run_loop = true;
        requestAnimationFrame(this.gameLoop);
    }


    shutdown() {
        // Disconnect event listeners.
        document.removeEventListener("keydown",         this.handleKeyDown);
        document.removeEventListener("keyup",           this.handleKeyUp);
        this.canvas.removeEventListener("mousedown",    this.handleMouseDown);
        this.canvas.removeEventListener("mouseup",      this.handleMouseUp);
        this.canvas.removeEventListener("mousemove",    this.handleMouseMove);

        // Shut down game loop.
        this.run_loop = false;
        
        // Clear game assets.
        this.environment =  [];
        this.gui =          [];
    }


    getDeltaTime(time: number): number {
        // Convert to seconds.
        time *= 0.001;


        // Calculate delta time.
        let delta_time: number = time - (this.last_time || time);
        this.last_time = time;


        // Return delta time.
        return delta_time;
    }


    tick(delta_time: number) {
        // Tick game.
        for(let i = 0; i < this.environment.length; ++i) {
            this.environment[i].tick(delta_time, this.mouse_pos);
        }
        for(let i = 0; i < this.gui.length; ++i) {
            this.gui[i].tick(delta_time, this.mouse_pos);
        }
    }


    draw(delta_time: number) {
        // Clear screen.
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw game.
        for(let i = 0; i < this.environment.length; ++i) {
            this.environment[i].draw(this.ctx);//TODO imagelib.
        }
        for(let i = 0; i < this.gui.length; ++i) {
            this.gui[i].draw(this.ctx);
        }
    }


    gameLoop = (time: number) => {
        // Get delta time.
        let delta_time = this.getDeltaTime(time);
        

        // Tick and draw game.
        this.tick(delta_time);
        this.draw(delta_time);


        // Request next frame.
        if(this.run_loop) requestAnimationFrame(this.gameLoop);
    }
}