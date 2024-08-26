// Input handling script.
import { Player } from "../game_object/player";


/*
    Executes upon keyboard press.
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


/*
    Executes upon keyboard release.
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


/*
    Executes upon mouse press.

    @param mouse_down   The position of the mouse in object form. {x, y}
*/
export function mouseDownEvent(event: MouseEvent, mouse_pos: {x: number, y: number}) {
}


/*
    Executes upon mouse press.

    @param mouse_down   The position of the mouse in object form. {x, y}
*/
export function mouseUpEvent(event: MouseEvent, mouse_pos: {x: number, y: number}) {
}


/*
    Executes upon mouse movement.

    @param mouse_down   The position of the mouse in object form. {x, y}
*/
export function mouseMoveEvent(event: MouseEvent, mouse_pos: {x: number, y: number}, canvas: HTMLCanvasElement) {
    const client_rect: DOMRect = canvas.getBoundingClientRect();

    mouse_pos.x = (event.clientX - client_rect.left) * (canvas.width / client_rect.width);
    mouse_pos.y = (event.clientY - client_rect.top) * (canvas.height / client_rect.height);
}

