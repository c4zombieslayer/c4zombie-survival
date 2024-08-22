// Input handling script.


/*
    Executes upon keyboard press.
*/
export function keyDownEvent() {
    console.log("key down")
}


/*
    Executes upon keyboard release.
*/
export function keyUpEvent() {
    console.log("key up")
}


/*
    Executes upon mouse press.

    @param mouse_down   The position of the mouse in object form. {x, y}
*/
export function mouseDownEvent(mouse_pos) {
    console.log("mouse down")
}


/*
    Executes upon mouse press.

    @param mouse_down   The position of the mouse in object form. {x, y}
*/
export function mouseUpEvent(mouse_pos) {
    console.log("mouse up")
}


/*
    Executes upon mouse movement.

    @param mouse_down   The position of the mouse in object form. {x, y}
*/
export function mouseMoveEvent(mouse_pos) {
    console.log("mouse move")
}

