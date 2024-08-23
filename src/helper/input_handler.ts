// Input handling script.


/*
    Executes upon keyboard press.
*/
export function keyDownEvent(event: KeyboardEvent) {
    console.log("key down");
}


/*
    Executes upon keyboard release.
*/
export function keyUpEvent(event: KeyboardEvent) {
    console.log("key up");
}


/*
    Executes upon mouse press.

    @param mouse_down   The position of the mouse in object form. {x, y}
*/
export function mouseDownEvent(event: MouseEvent, mouse_pos: {x: number, y: number}) {
    console.log("mouse down");
}


/*
    Executes upon mouse press.

    @param mouse_down   The position of the mouse in object form. {x, y}
*/
export function mouseUpEvent(event: MouseEvent, mouse_pos: {x: number, y: number}) {
    console.log("mouse up");
}


/*
    Executes upon mouse movement.

    @param mouse_down   The position of the mouse in object form. {x, y}
*/
export function mouseMoveEvent(event: MouseEvent, mouse_pos: {x: number, y: number}) {
    console.log("mouse move to x:" + mouse_pos.x + ", y:" + mouse_pos.y);
}

