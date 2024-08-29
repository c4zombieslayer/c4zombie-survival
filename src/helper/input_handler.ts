// Input handling script.
import { Player } from "../game_object/player";
import { windowToCanvasXY } from "./canvas_handler";


/**
 * Executes upon keyboard press.
 * 
 * @param event     The Keyboard event object.
 * @param player    The player object.
 */
export function keyDownEvent(event: KeyboardEvent, player: Player) {
    switch(event.code) {
        case 'KeyW': {
            player.move_up = 1;
            break;
        }


        case 'KeyA': {
            player.move_left = 1;
            break;
        }


        case 'KeyS': {
            player.move_down = 1;
            break;
        }


        case 'KeyD': {
            player.move_right = 1;
            break;
        }
    }
}


/**
 * Executes upon keyboard release.
 * 
 * @param event     The Keyboard event object.
 * @param player    The player object.
 */
export function keyUpEvent(event: KeyboardEvent, player: Player) {
    switch(event.code) {
        case 'KeyW': {
            player.move_up = 0;
            break;
        }


        case 'KeyA': {
            player.move_left = 0;
            break;
        }


        case 'KeyS': {
            player.move_down = 0;
            break;
        }


        case 'KeyD': {
            player.move_right = 0;
            break;
        }
    }
}


/**
 * Executes upon mouse press.
 * 
 * @param event     The mouse event object.
 * @param mouse_pos The position of the mouse in object form. {x, y}
 */
export function mouseDownEvent(event: MouseEvent, mouse_pos: {x: number, y: number}) {
    console.log("clicked at x:" + mouse_pos.x + " y:" + mouse_pos.y)
}


/**
 * Executes upon mouse press.
 * 
 * @param event     The mouse event object.
 * @param mouse_pos The position of the mouse in object form. {x, y}
 */
export function mouseUpEvent(event: MouseEvent, mouse_pos: {x: number, y: number}) {
}


/**
 * Executes upon mouse movement.
 * 
 * @param event     The mouse event object.
 * @param mouse_pos The position of the mouse in object form. {x, y}
 * @param canvas    The canvas object.
 */
export function mouseMoveEvent(event: MouseEvent, mouse_pos: {x: number, y: number}, canvas: HTMLCanvasElement) {
    const client_rect: DOMRect = canvas.getBoundingClientRect();
    let canvas_mouse_pos = windowToCanvasXY(canvas, (event.clientX - client_rect.left), (event.clientY - client_rect.top));

    mouse_pos.x = (canvas_mouse_pos.x);
    mouse_pos.y = (canvas_mouse_pos.y);
}